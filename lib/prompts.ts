import { Mode } from "./modes";

interface Promtps {
  fixme: string;
  formal: string;
  casual: string;
  funny: string;
  serious: string;
  positive: string;
  negative: string;
  simplify: string;
}
const prompts: Promtps = {
  fixme:
    "Correct all grammatical and spelling errors in the following text. Additionally, suggest suitable synonyms to avoid unnecessary repetition and improve text fluency. Ensure that the overall style of the text is coherent and professional, improving sentence structure where necessary. Provide all suggestions and corrections in a way that maintains the original meaning of the text. The output should strictly be the corrected text and nothing else. Respond strictly in the same language as the original text.",
  formal:
    "Transform the following text to have a more formal and professional tone. Use language appropriate for a business or academic setting, avoiding slang or colloquial expressions. Ensure that the text conveys seriousness and respect, and that all sentences are structured clearly and precisely. Maintain the original meaning of the text while adjusting the tone and style. The output should strictly be the corrected text and nothing else. Respond strictly in the same language as the original text.",
  casual:
    "Adjust the following text to have a more casual and friendly tone. Use relaxed and accessible language, as if you were speaking to a close friend. Avoid overly formal or technical terms and use colloquial expressions where appropriate. Ensure that the text is easy to read and conveys a sense of closeness and cordiality. Maintain the original meaning of the text while adjusting the tone and style. The output should strictly be the corrected text and nothing else. Respond strictly in the same language as the original text.",
  funny:
    "Modify the following text to be more fun and humorous. Add elements of humor and use a light and entertaining tone. You can include wordplay, jokes, and comical expressions, as long as they do not change the essential meaning of the text. Ensure that the text is capable of making the reader smile or laugh, while maintaining clarity and coherence. The output should strictly be the corrected text and nothing else. Respond strictly in the same language as the original text.",
  serious:
    "Adjust the following text to have a more serious and somber tone. Use formal and direct language, avoiding any type of humor or colloquial expressions. Ensure that the text conveys a sense of gravity and seriousness, appropriate for delicate or formal situations. Maintain the original meaning of the text while adjusting the tone and style. The output should strictly be the corrected text and nothing else. Respond strictly in the same language as the original text.",
  positive:
    "Modify the following text to have a more positive and optimistic tone. Focus on highlighting the positive aspects and use encouraging and motivational language. Ensure that the text conveys a sense of enthusiasm and confidence, and avoid any terms or phrases that may seem negative or discouraging. Maintain the original meaning of the text while adjusting the tone and style. The output should strictly be the corrected text and nothing else. Respond strictly in the same language as the original text.",
  negative:
    "Adjust the following text to have a more critical and negative tone. Use language that highlights deficiencies, problems, or negative aspects of the subject matter. Ensure that the text conveys a sense of disapproval or dissatisfaction, appropriate for situations that require a critical or negative analysis. Maintain the original meaning of the text while adjusting the tone and style. The output should strictly be the corrected text and nothing else. Respond strictly in the same language as the original text.",
  simplify:
    "Simplify the following text to be clearer and easier to understand. Remove any unnecessary jargon, technical terms, or complex phrases. Restructure sentences to improve clarity and ensure that the text is accessible to a reader without specialized knowledge. Maintain the original meaning of the text while adjusting the tone and style to be more direct and comprehensible. The output should strictly be the corrected text and nothing else. Respond strictly in the same language as the original text.",
};

export const getPromptForMode = (
  mode: Mode["name"],
  userText: string
): string => {
  switch (mode) {
    case "FixMe":
      return `${prompts.fixme}\nText: ${userText}`;
    case "Formal":
      return `${prompts.formal}\nText: ${userText}`;
    case "Casual":
      return `${prompts.casual}\nText: ${userText}`;
    case "Funny":
      return `${prompts.funny}\nText: ${userText}`;
    case "Serious":
      return `${prompts.serious}\nText: ${userText}`;
    case "Positive":
      return `${prompts.positive}\nText: ${userText}`;
    case "Negative":
      return `${prompts.negative}\nText: ${userText}`;
    case "Simplify":
      return `${prompts.simplify}\nText: ${userText}`;
  }
};
