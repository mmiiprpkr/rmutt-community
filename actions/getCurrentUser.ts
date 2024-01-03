import { db } from "@/lib/db";
import getSession from "./getSession";



export const getCurrentUser = async () => {
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

      const { password , ...other } = currentuser;

      return other;
   } catch (error) {
      return
   }
}