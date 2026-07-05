import type { Bilingual } from "./experience";

export const manifesto: {
  paragraphs: { lead?: Bilingual; text: Bilingual }[];
  closing: Bilingual;
} = {
  paragraphs: [
    {
      lead: {
        en: "I love what I do",
        ua: "Я люблю те, що роблю",
      },
      text: {
        en: " — and it shows in every detail of my work. What matters to me: owning the result, being precise in execution, and working as part of a team — not just my own piece of it.",
        ua: " — і це відчувається в кожній деталі роботи. Для мене важливо: брати відповідальність за результат, бути точною у виконанні та працювати в команді заради спільної мети, а не лише своєї ділянки.",
      },
    },
    {
      text: {
        en: "I can build functionality even without a finished design — creative thinking helps me find solutions even for tasks I'm facing for the first time. New challenges are what I find most exciting about this work.",
        ua: "Можу реалізувати функціонал і без готового дизайну — креативне мислення підказує рішення навіть для задач, з якими стикаюся вперше. Саме нові виклики надихають мене в цій роботі найбільше.",
      },
    },
  ],
  closing: {
    en: "Let's walk this path together and land on a result we're both happy with. I'm ready to talk it through in person — and see our real match at work.",
    ua: "Давайте пройдемо цей шлях разом і отримаємо результат, яким будуть задоволені обидві сторони. Готова обговорити деталі особисто — і побачити наш справжній метч у роботі.",
  },
};
