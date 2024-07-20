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
  "Welcomme to FixMe.ai! This is a very useful tool that will help you to enhance your writings. To use it, simply write or paste your text in the box on the right and choose one of the optons from the toolbar below. To use the tool, you need to enter a vaild OpenAI API key. You can paste it in the dialog that apears when you click on the buton at the top right with the key icon. This project was developed to participat in the Vercel and Midudev hackathon.";

export const defaultSuggestedText =
  "Welcome to FixMe.ai! This is a very usefull tool that will assist you in improving your writing. To use it, simply write or paste your text in the box on the right and choose one of the selections from the toolbar below. To use the tool, you need to enter a valid OpenAI API key. You can paste it in the dialog that appears when you click on the button at the top right with the key icon. This project was developed to participate in the Vercel and Midudev hackathon.";
