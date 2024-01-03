"use server"

import { db } from "@/lib/db"

export const verifyEmail = async (token: string) => {
   try {
      const user = await db.user.findFirst({
         where: {
            ActivateToken: {
               some: {
                  AND: [
                     {
                        activatedAt: null
                     },
                     {
                        createdAt: {
                           gte: new Date(Date.now() - 24*60*60*1000)
                        }
                     },
                     {
                        token
                     }
                  ]
               }
            }
         }
      });

      if (!user) {
         return { error: 'Invalid token'}
      }

      await db.activateToken.update({
         where: {
            token: token
         },
         data: {
            activatedAt: new Date(Date.now())
         }
      })

      await db.user.update({
         where: {
            id: user.id
         },
         data: {
            emailVerified: true
         }
      });

      return { success: 'verify email'}
   } catch (error) {
      return { error: null}
   }
}