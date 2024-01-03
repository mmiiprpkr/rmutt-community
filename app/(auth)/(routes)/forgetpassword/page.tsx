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

const formSchema = z.object({
   email: z.string().email().min(1 , {
      message: "Email is required"
   })
})

const SigninPage = () => {

   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: '',
      }
   });

   const isSubmitting = form.formState.isSubmitting;

   const onSubmit = (values: z.infer<typeof formSchema>) => {
      console.log(values)
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
                  <Button
                     disabled={isSubmitting}
                  >
                     Send
                  </Button>
               </form>
            </Form>
         </CardContent>
      </Card>
    );
}
 
export default SigninPage;