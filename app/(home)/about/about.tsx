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

      <Section
        title="About Look-a-Book"
        subtitle="It's a pet family project :)"
        bgColor="light"
        size="medium"
      >
        Look-a-Book is a pet project by Sam, Harriet and their dad Rich. It aims
        to be a place where you can create your own books and show them off to
        friends, family, and maybe the rest of the world too.
      </Section>

      <Footer />
    </div>
  );
}
