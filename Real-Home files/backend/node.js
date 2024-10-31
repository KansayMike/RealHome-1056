const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(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); // Store API key in environment variables for security

const msg = {
  to: 'recipient@example.com',
  from: 'realhome1056@gmail.com', // Your verified SendGrid sender email
  subject: 'Hello from RealHome',
  text: 'Welcome to RealHome! We are excited to have you on board.',
};

sgMail
  .send(msg)
  .then(() => console.log('Email sent'))
  .catch(error => console.error(error));
