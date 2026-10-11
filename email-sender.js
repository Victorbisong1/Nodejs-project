const nodemailer = require('nodemailer');

// Configure your email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'victorbisong1@gmail.com',
        pass: 'hkkvbkgk,g,ezgh'
    }
});

const mailOptions = {
    from: 'victorbisong1@gmail.com',
    to: 'victorbisong1@gmail.com', // Sending to yourself
    subject: 'Testing Node.js Email Sender',
    text: 'Hello from my Node.js checkpoint!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error occurred:', error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});