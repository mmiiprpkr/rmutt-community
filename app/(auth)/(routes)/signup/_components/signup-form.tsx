"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import axios from 'axios'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { toast } from "sonner"
import { FormError } from "@/components/alert/error-msg"
import { useState } from "react"
import { FormSuccess } from "@/components/alert/success-msg"

const formSchema = z.object({
  username: z.string().min(1, {
   message: "Username is require"
  }),
  email: z.string().min(1, {
   message: "Email is require"
  }),
  password: z.string().min(1, {
    message: "Password is require"
  })
})

export function SignupForm() {
  const [error,setError] = useState('');
  const [success, setSuccess] = useState('');
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        email: "",
        password: "",
      },
    })

    const isSubmit = form.formState.isSubmitting;

    async function onSubmit(values: z.infer<typeof formSchema>) {
      setError('');
      setSuccess('');
      try {
        const { data } = await axios.post('/api/register', values);
        if (data.error) {
          setError(data.error);
        }
        if (data.id) {
          setSuccess("Please check your email to vifification");
        }
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" type="text" {...field} disabled={isSubmit}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="exaple@mail.com" type="email" {...field} disabled={isSubmit} />
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
                <Input placeholder="******" type="password" {...field} disabled={isSubmit} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {
            error && (
              <FormError message={error} />
            )
        }
        {
          success && (
            <FormSuccess message={success}/>
          )
        }
        <Button type="submit" disabled={isSubmit}>Submit</Button>
        <div className="text-sm">
          <p>Already have an account? <Link href='/signin' className="ml-1">Signin</Link></p>
        </div>
      </form>
    </Form>
  )
}
