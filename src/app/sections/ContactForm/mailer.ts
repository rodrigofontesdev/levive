'use server'

import nodemailer from 'nodemailer'

type MailerProps = {
  from: {
    name: string
    address: string
  }
  to: string | string[]
  subject: string
  html: string
  plainText: string
}

export async function mailer({ from, to, subject, html, plainText }: MailerProps) {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  })

  const sender = `${from.name} <${from.address}>`
  const receivers = Array.isArray(to) ? to.join(', ') : to

  const options = {
    from: sender,
    to: receivers,
    replyTo: sender,
    subject: subject,
    text: plainText,
    html: html,
  }

  await transporter.sendMail(options)
}
