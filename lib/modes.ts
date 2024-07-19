type Mode = {
  name: string;
  description: string;
};

export const modes: Mode[] = [
  {
    name: "FixMe",
    description:
      "Corrects grammar mistakes, suggests synonyms, and provides stylistic improvements.",
  },
  {
    name: "Formal",
    description:
      "Transforms the text to a more formal tone, suitable for professional settings.",
  },
  {
    name: "Casual",
    description:
      "Converts the text to a casual and friendly tone, ideal for informal communications.",
  },
  {
    name: "Funny",
    description:
      "Adds humor to the text, making it more entertaining and light-hearted.",
  },
  {
    name: "Serious",
    description:
      "Adjusts the text to a serious tone, conveying a sense of gravity and importance.",
  },
  {
    name: "Positive",
    description: "Enhances the text with a positive and optimistic tone.",
  },
  {
    name: "Negative",
    description:
      "Modifies the text to express a more negative or critical tone.",
  },
  {
    name: "Simplify",
    description:
      "Simplifies the text, making it clearer and easier to understand.",
  },
];
