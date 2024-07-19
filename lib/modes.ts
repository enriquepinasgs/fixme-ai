export type Mode = {
  name:
    | "FixMe"
    | "Formal"
    | "Casual"
    | "Funny"
    | "Serious"
    | "Positive"
    | "Negative"
    | "Simplify";
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

export const defaultOriginalText =
  "Welcome to FixMe.ai! This is a very usefull tool that will help you to improve your writings. To use it, simply write or paste your text in the box on the left and choose one of the options from the toolbar below. The 'FixMe' option will sugest corrections and improvements in your text. The 'Funny' option will change the tone of your text to make it more funny. And the 'Angry' option will change the tone to make it more angry. Try different options to see how your text changes!";
export const defaultSuggestedText =
  "Welcome to FixMe.ai! This is a very useful tool that will help you improve your writing. To use it, simply write or paste your text in the box on the left and choose one of the options from the toolbar below. The 'FixMe' option will suggest corrections and improvements to your text. The 'Funny' option will change the tone of your text to make it funnier. And the 'Angry' option will change the tone to make it angrier. Try different options to see how your text changes!";
