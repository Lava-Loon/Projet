import { Message } from "./types";

export const formatPreview = (message: Message) => {
  if (message.content.length <= 20) {
    return message.content;
  }
  return message.content.slice(0, 20) + "...";
};