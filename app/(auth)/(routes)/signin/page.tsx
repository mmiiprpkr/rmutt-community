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
import { Separator } from "@/components/ui/separator";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FormError } from "@/components/alert/error-msg";
 

const SigninPage = () => {


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
      </Card>
    );
}
 
export default SigninPage;