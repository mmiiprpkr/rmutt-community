import { db } from "@/lib/db";
import getSession from "./getSession";
//todo รับ user มาจาก getSession เพื่อมา query หาใน prisma อีกที
export const getCurrentuser = async () => {
   try {
      const session = await getSession();
      if(!session?.user?.email) {
         return null;
      }

      const currentuser = await db.user.findUnique({
         where: {
            email: session.user.email as string
         }
      });

      if(!currentuser){
         return null;
      }
      return currentuser;
   } catch (error) {
      return null;
   }
}