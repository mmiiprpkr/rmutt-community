import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bctypt from 'bcrypt'
import nodemailer from 'nodemailer';
import { randomUUID } from "crypto";

export async function POST(req: Request) {
   try {
   const { username, email, password } = await req.json();

   const user = await db.user.findUnique({
      where: {
         email: email
      }
   });

   if (user) {
      return NextResponse.json({ error: "Email already exit", status: 400})
   };

   const hashPassword = await bctypt.hash(password, 12);

   const userDoc = await db.user.create({
      data: {
         name: username,
         email,
         password: hashPassword,
      }
   });


   const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });    

    const verificationToken = await db.activateToken.create({
      data: {
         token: `${randomUUID()}${randomUUID()}`.replace(/-/g, ''),
         userId: userDoc.id
      }
    });

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: userDoc.email as string,
      subject: 'Verify your email',
      html: `<a href="${process.env.NEXT_URL}/verify?token=${verificationToken.token}">Click here to verify email</a>`,
    };
    
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.error('[Email Sending Error]:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

   return NextResponse.json(userDoc, { status: 200 });
   } catch (error) {
      // console.log('[POST:REGISTER]',error);
      return NextResponse.json("Internal Error", { status: 500 })
   }
}