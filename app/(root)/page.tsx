'use client';
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

const HomePage = () => {
  return ( 
    <div>
      <ModeToggle />
      <Button onClick={() => signOut()} variant="destructive">
        Logout
      </Button>
    </div>
   );
}
 
export default HomePage;