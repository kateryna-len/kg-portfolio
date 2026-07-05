import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ua" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} nav={dict.nav} />
      <main className="flex-1">{children}</main>
      <Footer name={`${dict.hero.name.first} ${dict.hero.name.last}`} />
    </>
  );
}
