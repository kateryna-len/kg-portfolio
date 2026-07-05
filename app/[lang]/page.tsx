import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import type { Locale } from "./dictionaries";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Values } from "@/components/sections/Values";
// import { Portfolio } from "@/components/sections/Portfolio"; // temporarily hidden
// import { Contact } from "@/components/sections/Contact"; // temporarily hidden

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ua" }];
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <Hero lang={lang} t={dict.hero} contactT={dict.contact} />
      <Skills lang={lang as Locale} t={dict.skills} />
      <Experience lang={lang as Locale} t={dict.experience} />
      {/* <Portfolio lang={lang as Locale} t={dict.projects} /> temporarily hidden */}
      <Education lang={lang as Locale} t={dict.education} />
      <Values lang={lang as Locale} t={dict.values} contactT={dict.contact} />
      {/* <Contact t={dict.contact} /> temporarily hidden */}
    </>
  );
}
