"use server";

import { db } from "@/lib/db";
import { randomUUID } from "crypto";
import nodemailer from 'nodemailer'
export const tokenResetPassword = async ( email: string ) => {
   try {
      const userExit = await db.user.findUnique({
         where: {
            email,
         }
      });

      if (!userExit) {
         return { error: 'Not found'}
      };

      const socialMedia = await db.account.findFirst({
         where: {
            userId: userExit.id
         }
      })

      if (socialMedia?.provider === 'google' || socialMedia?.provider === 'github') {
         return { error: 'This email authentication with google or github'}
      }

      if (!userExit.emailVerified) {
         return { error: "This email is't verification"}
      }

      const forgetPasswordToken = await db.user.update({
         where: {
            email
         },
         data: {
            forgetpasswordtoken: `${randomUUID()}${randomUUID()}`.replace(/-/g, ''),
         }
      });

      const transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
           user: process.env.NODEMAILER_EMAIL,
           pass: process.env.NODEMAILER_PASSWORD,
         },
       });

       const mailOptions = {
         from: process.env.NODEMAILER_EMAIL,
         to: userExit.email as string,
         subject: 'Confirm to reset you password',
         html: `<a href="${process.env.NEXTAUTH_URL}/forgetpassword/${forgetPasswordToken.forgetpasswordtoken}">Click here to verify email</a>`,
       };
       
       transporter.sendMail(mailOptions, function (error, info) {
         if (error) {
           console.error('[Email Sending Error]:', error);
         } else {
           console.log('Email sent:', info.response);
         }
       });

       return { success: 'Confirm your email to reset password'}
   } catch (error) {
      return { error: "Internal Error"}
   }
}