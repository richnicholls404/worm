import AuthorCard from "@/components/AuthorCard";
import InteractiveBook from "@/components/InteractiveBook";
import Header from "@/components/Header";
import Section, { SectionStyleContainer } from "@/components/Section";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import { PrismaClient } from "@prisma/client";
import FullscreenContainer from "@/components/FullscreenContainer";
import Ribbon from "@/components/Ribbon";

export default async function Home() {
  const prisma = new PrismaClient();

  const authors = await prisma.author.findMany();

  const books = await prisma.book.findMany({
    include: {
      author: true,
    },
  });

  const featuredBook = books.length
    ? books[Math.floor(Math.random() * books.length)]
    : undefined;

  return (
    <div>
      <Header />

      <SectionStyleContainer bgColor="light">
        {featuredBook && (
          <FullscreenContainer>
            <Ribbon text="Featured" />
            <Section
              title={featuredBook.title}
              subtitle={
                <div className="flex items-center gap-x-4 justify-center mt-2 text-left">
                  <img
                    className="rounded-full size-12"
                    src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                    alt="Image Description"
                  />
                  <div>
                    <h3 className="font-medium text-lg text-gray-800 dark:text-gray-200">
                      {featuredBook.author.name}
                    </h3>
                    <div className="text-sm text-gray-500">Bla bla bla</div>
                  </div>
                </div>
              }
              headingProps={{ className: "mb-4 lg:mb-8" }}
              bgColor="light"
            >
              <InteractiveBook book={featuredBook} />
            </Section>
          </FullscreenContainer>
        )}
      </SectionStyleContainer>

      <Section title="Our authors" subtitle="Creative people" bgColor="dark">
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
