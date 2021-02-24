import { createTransport } from 'nodemailer';

const transport = createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function makeEmail(text: string): string {
  return `
    <div styles="
      border: 1px solid black;
      padding: 20px;
      font-family: sans-serif;
      line-height: 2;
      font-size: 18px;"
    >
    <h2>Hi There!</h2>
    <p>${text}</p>
    <p>Best,</p>
    <p>Dave McDonald</p>
  `;
}

export async function sendPasswordResetEmail(
  resetToken: string,
  to: string
): Promise<void> {
  const info = await transport.sendMail({
    to,
    from: 'david@transmissionwines.com',
    subject: 'Your password reset token!',
    html: makeEmail(`Your password reset token is here. 
      <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}">Click Here to Reset</a>
    `),
  });
}
