"use client"
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
 } from "@/components/ui/card"

 import { FcGoogle } from "react-icons/fc";
 import { PiGithubLogoFill } from "react-icons/pi";

import { SigninForm } from "./_components/signin-form";
import { SocailMedia } from "./_components/social-media";
import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Alert } from "@/components/ui/alert";
 

const SigninPage = () => {
   const searchParams = useSearchParams();
   const [error,setError] = useState('');
   useEffect(() => {
      const callbackError = searchParams?.get("error");
      if (callbackError === "OAuthAccountNotLinked") {
         setError("whoops, there may already be an account with that email")
      }
   }, [searchParams]);

   return ( 
      <Card className="w-[300px] md:w-[500px] mx-auto">
         <CardHeader>
            <CardTitle className="text-center text-2xl">SingIn</CardTitle>
         </CardHeader>
         <CardContent>
            <SigninForm />
         </CardContent>
         <div className="relative px-5 items-center">
            <Separator />
            <div className="flex justify-center">
               <p className="text-sm font-semibold absolute bg-background -top-3 px-2">or continue with</p>
            </div>
         </div>
         <CardFooter>
            <div className="mt-4 space-y-2 w-full">
               <SocailMedia 
                  label="Google"
                  icon={FcGoogle}
                  onClick={() => signIn('google', { redirect: false })}
               />
               <SocailMedia 
                  label="GitHub"
                  icon={PiGithubLogoFill}
                  onClick={() => signIn('github', { redirect: false })}
               />
               {
                  error && (
                     <Alert variant='destructive'>
                        {error}
                     </Alert>
                  )
               }
            </div>
         </CardFooter>
      </Card>
    );
}
 
export default SigninPage;