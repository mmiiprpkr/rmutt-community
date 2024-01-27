"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { FormError } from "@/components/alert/error-msg"

const formSchema = z.object({
  email: z.string().min(1, {
   message: "Email is require"
  }),
  password: z.string().min(1, {
    message: "Password is require"
  })
})

export function SigninForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error,setError] = useState('');

  useEffect(() => {
     const callbackError = searchParams?.get("error");
     if (callbackError === "OAuthAccountNotLinked") {
        setError("whoops, there may already be an account with that email")
     }
  }, [searchParams]);
  
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    })

    const isSubmitting = form.formState.isSubmitting;

    async function onSubmit(values: z.infer<typeof formSchema>) {
      try {
        setError('');
        const res = await signIn('credentials', { email: values.email, password: values.password , redirect: false});
        if (res?.error) {
          if (res?.error === 'OAuthAccountNotLinked') {
            return
          }
          setError(res?.error as string);
        }
        router.refresh();
        router.push('/settings')
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="email"
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="******" type="password" {...field} disabled={isSubmitting} />
              </FormControl>
              <FormDescription>
                <Link href='/forgetpassword'>
                  forget password
                </Link>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting}>Submit</Button>
        <div className="text-sm flex space-y-2 flex-col">
          <p>Don&apos;t hava an account? <Link href='/signup' className="ml-1">Signup</Link></p>
          {
            error && (
              <FormError message={error} />
            )
          }
        </div>
      </form>
    </Form>
  )
}
