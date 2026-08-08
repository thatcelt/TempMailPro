export type Message = {
  _id: string;
  to: string;
  from: string;
  cc: string;
  bcc: string;
  subject: string;
  text: string;
  userPlan: string;
  otpCode: string;
  messageId: string;
  createdAt: string;
  updatedAt: string;
};
