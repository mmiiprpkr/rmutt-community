"use client"

import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
 } from "@/components/ui/card"

 import { FcGoogle } from "react-icons/fc";
 import { PiGithubLogoFill } from "react-icons/pi";

import { Separator } from "@/components/ui/separator";
import { SocailMedia } from "../signin/_components/social-media";
import { SignupForm } from "./_components/signup-form";
 

const SigninPage = () => {
   return ( 
      <Card className="w-[300px] md:w-[500px] mx-auto">
         <CardHeader>
            <CardTitle className="text-center text-2xl">Singup</CardTitle>
         </CardHeader>
         <CardContent>
            <SignupForm />
         </CardContent>
         <div className="relative px-5 items-center">
            <Separator />
            <div className="flex justify-center">
               <p className="text-sm font-semibold absolute -top-3 bg-background px-1">or continue with</p>
            </div>
         </div>
         <CardFooter>
            <div className="mt-4 space-y-2 w-full">
               <SocailMedia 
                  label="Google"
                  icon={FcGoogle}
                  onClick={() => {}}
               />
               <SocailMedia 
                  label="GitHub"
                  icon={PiGithubLogoFill}
                  onClick={() => {}}
               />
            </div>
         </CardFooter>
      </Card>
    );
}
 
export default SigninPage;