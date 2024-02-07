"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const SettingPage = () => {
  const session = useSession();
  if (session.status === "loading") {
    return null;
  }

  if (session.status === "unauthenticated") {
    return redirect("/signin")
  }
   return ( 
      <div>
         Setting Page
      </div>
    );
}
 
export default SettingPage;