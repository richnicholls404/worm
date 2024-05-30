import Header from "@/components/Header";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import UserDebug from "./UserDebug";
import { getCurrentUser } from "@/lib/utils/server/auth";
import { redirect } from "next/navigation";
import urls from "@/lib/urls";

export default async function myProfile() {
  const { user } = await getCurrentUser();
  if (!user) {
    redirect(urls.login());
  }

  return (
    <div>
      <Header />

      <Section title="My profile" subtitle="All about me" bgColor="light">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <UserDebug />
        </div>
      </Section>

      <Footer />
    </div>
  );
}
