"use server";

import { db } from "@/lib/db";
import bcrypt from 'bcrypt'
export const resetPassword = async ( token: string, password: string ) => {
   try {
      const user = await db.user.findFirst({
         where: {
            forgetpasswordtoken: token
         }
      });
      if (!user) {
         return { error: 'Invalid Token' }
      };

      const hashPassword = await bcrypt.hash(password, 12);

      const changepassword = await db.user.update({
         where: {
            id: user.id
         },
         data: {
            password: hashPassword,
            forgetpasswordtoken: null,
         }
      })

      return { success: 'Password has reset go to login'}
   } catch (error) {
      return { error: 'Internal Error'}
   }
}