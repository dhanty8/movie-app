"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { FormSchema, createSessionID, formSchema, getDetailAccount, getRequestToken, postLogin } from '@/lib/apis/auth';

import { Input } from '@/components/ui/input';
import React from 'react';
import { setCookie } from 'cookies-next';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

const Login = () => {
    const router = useRouter();

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormSchema) => {
    const body = {
      ...data,
      request_token: await getRequestToken(),
    };

    try {
      const result = await postLogin(body);
      const getSessionID = await createSessionID(result.request_token);
      const getUserID = await getDetailAccount(getSessionID);
      setCookie("userID", getUserID);
      setCookie("sessionID", getSessionID);
      router.push("/");
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-5/12 bg-black p-20 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Sign In</h2>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" className="border rounded-md py-2 px-3 focus:outline-none focus:border-black text-black" {...field} />
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
                  <Input placeholder="Password" type="password" className="border rounded-md py-2 px-3 focus:outline-none focus:border-black text-black" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button className="bg-red-600 text-white font-bold py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
            Sign In
          </button>
        </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
