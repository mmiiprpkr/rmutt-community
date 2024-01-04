"use client"
import { verifyEmail } from "@/actions/verify-email";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from 'react-spinners'

const VerifyPage = () => {
   const search = useSearchParams();
   const token = search.get('token');
   const [loading, setLoading] = useState(true);
   const router = useRouter();
   const [msg, setMsg] = useState('');
   const onSubmit = useCallback( async () => {
     try {
         if (!token) {
            return 
         }
         const verify = await verifyEmail(token);
         if (verify.success) {
            setLoading(false);
            router.push('/signin')
         }
         if (verify.error) {
            setLoading(false);
            setMsg(verify?.error as string);
         }
     } catch (error) {
         console.log(error)
     }
   },[token,router])

   useEffect(() => {
      onSubmit()
   },[onSubmit]);
   return ( 
      <Card className="space-y-3">
         <CardHeader className="w-[300px] md:w-[500px] mx-auto">
            <h1 className="text-2xl text-center font-bold">Verify Email</h1>
         </CardHeader>
         <CardDescription className="text-center">
            Confirmimg your verification
         </CardDescription>
         <CardContent className="flex items-center justify-center">
            {
               !msg 
               ? <BeatLoader hidden={!loading}/>
               : msg
            }
         </CardContent>
         <CardFooter>
            <Button asChild size="sm">
               <Link href='/signin'>
                  back to singin
               </Link>
            </Button>
         </CardFooter>
      </Card>
    );
}
 
export default VerifyPage;