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
        en: " — and it shows in every detail of my work. What matters to me is taking ownership of the result, precision in execution, and being a team player who works toward a shared goal, not just my own part of it.",
        ua: " — і це відчувається в кожній деталі роботи. Для мене важлива відповідальність за результат, точність у виконанні та вміння працювати в команді заради спільної мети, а не лише своєї ділянки.",
      },
    },
    {
      text: {
        en: "I can implement functionality even without a ready design — creative thinking helps me find solutions even for tasks I'm facing for the first time. New challenges are what excite me most about this work.",
        ua: "Можу реалізувати функціонал і без готового дизайну — креативне мислення підказує рішення навіть для задач, з якими стикаюся вперше. Саме нові виклики надихають мене в цій роботі найбільше.",
      },
    },
  ],
  closing: {
    en: "Let's walk this path together and land on a result we're both happy with. I'm ready to talk it through in person — and see our real match at work.",
    ua: "Давайте пройдемо цей шлях разом і отримаємо результат, яким будуть задоволені обидві сторони. Готова обговорити це особисто — і побачити наш справжній метч у роботі.",
  },
};
