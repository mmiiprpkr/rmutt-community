"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const AuthLayout = ( {children }: { children: React.ReactNode }) => {
   const session = useSession();

   if (session?.status === "loading") {
      return null;
   }

   if (session?.status === 'authenticated') {
      return redirect('/');
   }

   return ( 
      <div className="h-full flex items-center justify-center">
         {children}
      </div>
    );
}
 
export default AuthLayout;