"use client"

import {
   Card,
   CardContent,
   CardHeader,
   CardTitle,
 } from "@/components/ui/card"

import { SignupForm } from "./_components/signup-form";

const SigninPage = () => {
   return ( 
      <Card className="w-[300px] md:w-[500px] mx-auto">
         <CardHeader>
            <CardTitle className="text-center text-4xl">🔐Singup</CardTitle>
         </CardHeader>
         <CardContent>
            <SignupForm />
         </CardContent>
      </Card>
    );
}
 
export default SigninPage;