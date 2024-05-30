import Header from "@/components/Header";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function Books() {
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
