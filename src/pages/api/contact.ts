import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  state: string;
};
const PASSWORD = process.env.password;
const USERNAME = process.env.username;

export default function handler(
  req: NextApiRequest,
  //res: NextApiResponse<Data>
  //and lets not forget up here with the typing
  res: NextApiResponse
) {
  //res.status(200).json({ state:  'Success' });

  //we must be careful not sending any json/body back
  //if the client tries to parse some json body it kills the app
  //is .end a hacky way to send a response back that has an empty body?
  const transporter = nodemailer.createTransport({
    service: 'Outlook365',
    auth: {
      user: USERNAME,
      pass: PASSWORD,
    },
  });

  const mailData = {
    from: process.env.username,
    to: process.env.username,
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: `<div><p>Name: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>${req.body.message}</p></div>`,
  };

  transporter.sendMail(mailData, (err, info) => {
    /*if (err) console.log(err);
    else console.log(info); */
  });

  res.status(200).end();
}
