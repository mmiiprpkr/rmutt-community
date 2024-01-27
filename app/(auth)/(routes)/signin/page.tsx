"use client"
import {
   Card,
   CardContent,
   CardHeader,
   CardTitle,
 } from "@/components/ui/card"

import { SigninForm } from "./_components/signin-form";
 
const SigninPage = () => {
   return ( 
      <Card className="w-[300px] md:w-[500px] mx-auto">
         <CardHeader>
            <CardTitle className="text-center text-4xl">🔐SingIn</CardTitle>
         </CardHeader>
         <CardContent>
            <SigninForm />
         </CardContent>
      </Card>
    );
}
 
export default SigninPage;