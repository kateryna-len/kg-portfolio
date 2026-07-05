import type { Bilingual } from "./experience";

export const manifesto: {
  paragraphs: { lead?: Bilingual; text: Bilingual }[];
  closing: Bilingual;
} = {
  paragraphs: [
    {
      lead: {
        en: "I can build functionality without a ready design",
        ua: "Можу реалізувати функціонал і без готового дизайну",
      },
      text: {
        en: " — creative thinking finds solutions even for tasks I'm facing for the first time. For you, that means fewer back-and-forth rounds and progress even before the spec is fully locked down.",
        ua: " — креативне мислення підказує рішення навіть для задач, з якими стикаюся вперше. Для вас це означає менше узгоджень і прогрес навіть тоді, коли технічне завдання ще не до кінця сформоване.",
      },
    },
    {
      text: {
        en: "Responsibility and precision aren't just words to me — they mean a result you can rely on, not just a closed ticket. And I work as part of the team, toward the shared goal, not just my own piece of it.",
        ua: "Відповідальність і точність у виконанні — це не просто слова, а надійний результат, а не закритий тікет. І командна робота заради спільної мети, а не лише своєї частини задачі.",
      },
    },
  ],
  closing: {
    en: "Let's talk about your project — in 15 minutes you'll know if I'm the right fit for your team. No strings attached.",
    ua: "Давайте обговоримо ваш проєкт — за 15 хвилин ви зрозумієте, чи підходжу я для вашої команди. Без зобов'язань.",
  },
};
