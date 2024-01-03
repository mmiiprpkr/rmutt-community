import bcrypt from 'bcrypt';
import { AuthOptions } from 'next-auth';
import  CredentialsProvider  from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import { db } from '@/lib/db';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

export const options: AuthOptions = {
   adapter: PrismaAdapter(db),
   providers: [
      GithubProvider({
         clientId: process.env.GITHUB_ID as string,
         clientSecret: process.env.GITHUB_SECRET as string
      }),
      GoogleProvider({
         clientId: process.env.GOOGLE_ID as string,
         clientSecret: process.env.GOOGLE_SECRET as string
      }),
      CredentialsProvider({
         name: 'credentials',
         credentials: {
            email: { label: 'email', type: 'text' },
            password: { label: 'password', type: 'password' },
         },
         async authorize(credentials) {
             if(!credentials?.email || !credentials?.password){
               throw new Error("Invalid Credentials");
             }

             const user = await db.user.findFirst({ 
               where: {
                 email: credentials.email
               }
             });

             if(!user) {
               throw new Error('Email not found');
             }

             if (!user.emailVerified) {
               throw new Error("Email is't verification")
             }

             const isCorrectPassword = await bcrypt.compare(credentials.password, user.password as string);

             if(!isCorrectPassword) {
               throw new Error('Password invalid');
             }

             return user;
         },
      })
   ],
   pages: {
      signIn: '/signin'
   },
   callbacks: {
      async jwt({token,user,session}) {
         if (user) {
            return {
               ...token,
               id: user.id
            }
         }
         return token;
      },
      async session({ session, user, token }) {
            return {
               ...session,
               user: {
                  ...session.user,
                  id: token.id
               }
            }
      }
   },
   session: {
      strategy: 'jwt'
   },
   secret: process.env.NEXTAUTH_SECRET,
   debug: process.env.NODE_ENV === 'development'
}