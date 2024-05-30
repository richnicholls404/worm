import Header from "@/components/Header";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import { PrismaClient } from "@prisma/client";
import { getCurrentUser } from "@/lib/utils/server/auth";
import { redirect } from "next/navigation";
import urls from "@/lib/urls";

export default async function MyBooks() {
  const prisma = new PrismaClient();

  const { user } = await getCurrentUser();
  if (!user) {
    redirect(urls.login());
  }

  const books = await prisma.book.findMany({
    include: {
      author: true,
    },
    where: {
      author: {
        user: {
          username: user?.username,
        },
      },
    },
  });

  return (
    <div>
      <Header />

      <Section
        title="My books"
        subtitle="Everything created by me"
        bgColor="light"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((row) => (
            <BookCard key={row.id} book={row} />
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}
