"use client"

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { BeatLoader } from "react-spinners";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
   const session = useSession();

   if (session?.status === 'loading') {
      return (
         <div className="h-full flex justify-center items-center">
            <BeatLoader />
         </div>
      )
   }

   if (session?.status === 'unauthenticated') {
      return redirect('/')
   }
   
   return ( 
      <div>
         {children}
      </div>
    );
}
 
export default SettingsLayout;