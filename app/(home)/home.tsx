import AuthorCard from "@/components/AuthorCard";
import InteractiveBook from "@/components/InteractiveBook";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import { PrismaClient } from "@prisma/client";

export default async function Template() {
  const prisma = new PrismaClient();

  const authors = await prisma.author.findMany();

  const books = await prisma.book.findMany({
    include: {
      author: true,
    },
  });

  return (
    <div>
      <Header />

      <Section title="Featured book" subtitle="Samuel" bgColor="light">
        <div className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200 dark:bg-slate-900 dark:border-gray-700">
          <InteractiveBook />
        </div>
      </Section>

      <Section title="Our authors" subtitle="Creative people">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.map((row) => (
            <AuthorCard key={row.id} author={row} />
          ))}
        </div>
      </Section>

      <Section title="Popular books" subtitle="Creative people" bgColor="light">
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
