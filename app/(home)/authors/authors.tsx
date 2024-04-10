import AuthorCard from "@/components/AuthorCard";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import { PrismaClient } from "@prisma/client";

export default async function Authors() {
  const prisma = new PrismaClient();

  const authors = await prisma.author.findMany();

  return (
    <div>
      <Header />

      <Section title="Our authors" subtitle="Creative people">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.map((row) => (
            <AuthorCard key={row.id} author={row} />
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}
