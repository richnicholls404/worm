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
        title="About Sahara"
        subtitle="It's a pet family project :)"
        bgColor="light"
        size="medium"
      >
        Sahara (short for Sam and Harriet) is a pet project by Sam, Harriet and
        their dad Rich. It aims to be a place where people can create their own
        books and show them off to friends, family, and the rest of the world
        too.
      </Section>

      <Footer />
    </div>
  );
}
