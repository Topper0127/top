// /api/contact
import nodemailer from "nodemailer";

async function handler(req, res) {
  if (req.method === "POST") {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      secure: true,
    });

    const mailData = {
      from: process.env.EMAIL,
      to: process.env.RECIPIENT,
      subject: `Message From ${req.body.name}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`,
    };

    transporter.sendMail(mailData, function (err) {
      if (err) {
        res.status(400).send(); // something went wrong
      } else {
        res.status(200).send(); // successfully sent
      }
    });
  }
}

export default handler;
