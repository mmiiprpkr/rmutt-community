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

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useState } from 'react';
import { MdOutlineError } from "react-icons/md";
import { resetPassword } from '@/actions/reset-password';
import Link from 'next/link';
import { FormError } from '@/components/alert/error-msg';
import { FormSuccess } from '@/components/alert/success-msg';

const formSchema = z.object({
   password: z.string().min(6)
})

const ResetPassword = ( { params }: { params: { passwordtoken: string }}) => {
   const [error,setError] = useState(false);
   const [success, setSuccess] = useState(false);
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         password: '',
      }
   });

   const isSubmitting = form.formState.isSubmitting;

   const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
         const res = await resetPassword(params.passwordtoken, values.password);
         if (res.error) {
            setError(true);
            setSuccess(false);
         }

         if (res.success) {
            setError(false);
            setSuccess(true);
         }
      } catch (error) {
         console.log(error)
      }
   }

   return ( 
      <Card className="w-[350px] md:w-[500px] mx-auto">
         <CardHeader>
            <CardTitle className="text-center text-2xl">Forget Password</CardTitle>
         </CardHeader>
         <CardContent>
            <Form {...form} >
               <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                  <FormField 
                     control={form.control}
                     name='password'
                     render={({ field }) => (
                        <FormItem>
                          <FormLabel>Reset password</FormLabel>
                          <FormControl>
                            <Input placeholder="******" type="password" {...field} disabled={isSubmitting} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                  />
                  {
                     error && (
                        <FormError message='Invalid Token' />
                     )
                  }
                  <div className='flex items-center justify-between'>
                     <Button
                        disabled={isSubmitting}
                     >
                        Submit
                     </Button>
                     <Button asChild variant='link'>
                        <Link href='/signin'>
                           Back to login
                        </Link>
                     </Button>
                  </div>
               </form>
            </Form>
         </CardContent>
         {
            success && (
               <CardFooter>
                  <FormSuccess message='password has reset go to login' />
               </CardFooter>
            )
            
         }
      </Card>
    );
}
 
export default ResetPassword;