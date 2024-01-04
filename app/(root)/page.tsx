"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const HomePage = () => {
  const session = useSession();
  return ( 
    <div className="flex items-center justify-between">
      <Link href='/signin'>
        Signin      
      </Link>
      <div>
        {
          session?.status === 'authenticated' ? ('authenticated') : 'unauthorized'
        }
      </div>
      <Button onClick={() => signOut({redirect: false})}>
        Logout
      </Button>
    </div>
   );
}
 
export default HomePage;