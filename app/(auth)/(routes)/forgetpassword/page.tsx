"use client"
import * as z from 'zod';
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
 } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { tokenResetPassword } from '@/actions/token-reset-password';

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useState } from 'react';
import { GiConfirmed } from "react-icons/gi";
import Link from 'next/link';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { FormError } from '@/components/alert/error-msg';
import { FormSuccess } from '@/components/alert/success-msg';

const formSchema = z.object({
   email: z.string().email().min(1 , {
      message: "Email is required"
   })
})

const SigninPage = () => {
   const [error,setError] = useState(false);
   const [success,setSuccess] = useState(false);
   const [msg,setMsg] = useState('');
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: '',
      }
   });

   const isSubmitting = form.formState.isSubmitting;

   const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
         const res = await tokenResetPassword(values.email)
         if (res.error) {
            setSuccess(false);
            setError(true);
            setMsg(res.error as string)
         }
         if (res.success) {
            setError(false)
            setSuccess(true);
         }
      } catch (error) {
         console.log(error)
      }
   }

   return ( 
      <Card className="w-[350px] md:w-[500px] mx-auto">
         <CardHeader>
            <CardTitle className="text-center text-2xl">Send email to reset password</CardTitle>
         </CardHeader>
         <CardContent>
            <Form {...form} >
               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                  <FormField 
                     control={form.control}
                     name='email'
                     render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="exaple@mail.com" type="email" {...field} disabled={isSubmitting} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                  />
                  {
                     error && !success && (
                        <FormError message={msg}/>
                     )
                  }
                  {
                     success && !error && (
                        <FormSuccess message='Check your email' />
                     )
                  }
                  <div className='w-full flex items-center justify-between'>
                     <Button
                        disabled={isSubmitting}
                     >
                        Send
                     </Button>
                     <Button variant='link' asChild>
                        <Link href='/signin'>
                           back to login
                        </Link>
                     </Button>
                  </div>
               </form>
            </Form>
         </CardContent>
      </Card>
    );
}
 
export default SigninPage;