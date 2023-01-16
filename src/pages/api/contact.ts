import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

/*
type Data = {
  state: string;
}; 
*/
const getIP = (request: any) =>
  request.ip ||
  request.headers['x-forwarded-for'] ||
  request.headers['x-real-ip'] ||
  request.connection.remoteAddress;

const PASSWORD = process.env.password;
const USERNAME = process.env.username;
const UPSTASH = process.env.upstash;
const TOKEN = process.env.token;

const redis = Redis.fromEnv();

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(7, '60 s'),
});

export default async function handler(
  req: NextApiRequest,
  //res: NextApiResponse<Data>
  //and lets not forget up here with the typing
  res: NextApiResponse
) {
  //res.status(200).json({ state:  'Success' });

  //we must be careful not sending any json/body back
  //if the client tries to parse some json body it kills the app
  //is .end a hacky way to send a response back that has an empty body?

  const identifier = getIP(req);
  const result = await ratelimit.limit(identifier);
  res.setHeader('X-RateLimit-Limit', result.limit);
  res.setHeader('X-RateLimit-Remaining', result.remaining);

  if (!result.success) {
    res.status(429).json({
      message: 'The request has been rate limited.',
      rateLimitState: result,
    });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
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
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200).end();
}
