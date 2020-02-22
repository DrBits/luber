import Mailgun from 'mailgun-js';

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_PRIVATE_KEY || '',
  domain: process.env.MAILGUN_DOMAIN || ''
});

const sendEmail = (subject: string, html: string) => {
  const emailData = {
    from: 'ilewanof@gmail.com',
    to: 'ilewanof@gmail.com',
    subject,
    html
  };

  return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = async (fullName: string, key: string) => {
  const emailSubject = `Hello!, ${fullName}, please verify your email`;
  const emailBody = `Verify your email by clicking <a href="http://luber.com/verificatin/${key}">here</a>`;

  return sendEmail(emailSubject, emailBody);
};
