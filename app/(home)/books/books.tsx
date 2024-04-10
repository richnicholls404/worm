import Header from "@/components/Header";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import { PrismaClient } from "@prisma/client";

export default async function Books() {
  const prisma = new PrismaClient();

  const books = await prisma.book.findMany({
    include: {
      author: true,
    },
  });

  return (
    <div>
      <Header />

      <Section title="Our books" subtitle="Creative people" bgColor="light">
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
