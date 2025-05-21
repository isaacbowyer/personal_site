import { EMAIL_CONFIG } from "@/data/email";

const defaultEmail = EMAIL_CONFIG.DEFAULT_EMAIL_ADDRESS;
const defaultSub = EMAIL_CONFIG.DEFAULT_EMAIL_SUBJECT;
const defaultMessage = EMAIL_CONFIG.DEFAULT_EMAIL_MESSAGE;

export const sendEmail = (
  sub: string = defaultSub,
  message: string = defaultMessage,
  toEmail: string = defaultEmail
) => {
  window.open(`mailto:${toEmail}?subject=${sub}&body=${message}`);
};
