const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
  const { name, email, phone, message } = req.body;

  // Set up your email transporter (using Gmail here)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tax1stpvtltd@gmail.com', // your Gmail address
      pass: 'your-app-password'       // use an app password if 2FA is enabled
    }
  });

  const mailOptions = {
    from: email,
    to: 'tax1stpvtltd@gmail.com',
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email sending failed:', error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    } else {
      console.log('Email sent:', info.response);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
