import nodemailer from 'nodemailer';
export const mailer = process.env.SMTP_HOST ? nodemailer.createTransport({host:process.env.SMTP_HOST,port:Number(process.env.SMTP_PORT||587),secure:Number(process.env.SMTP_PORT)===465,auth:{user:process.env.SMTP_USER,pass:process.env.SMTP_PASS}}) : null;
export async function sendMail({to,subject,html}){ if(!mailer || !to) return; await mailer.sendMail({from:process.env.MAIL_FROM||process.env.SMTP_USER,to,subject,html}); }
