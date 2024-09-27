'use client'

import React from "react"
import { signin } from '@/actions/auth';
import { useFormState } from "react-dom";
import FormInput from "@/components/FormInput";

export default function SignInPage() {
  const [state, formAction] = useFormState(signin, { error: null })

  return (
    <div className="flex w-100 flex-col justify-center mt-5">
      <h1 className="text-4xl mb-10 text-center font-bold mb-5">SIGN IN</h1>
      
      <form action={formAction} className="w-full max-w-80 flex flex-col gap-4 self-center">
        <FormInput type="text" label="Last Name" error={state.error} id="lastName" name="lastName"></FormInput>
        <FormInput type="text" label="First Name" error={state.error} id="firstName" name="firstName"></FormInput>
        <FormInput type="email" label="Email" error={state.error} id="email" name="email"></FormInput>
        <FormInput type="password" label="Password" error={state.error} id="password" name="password"></FormInput>
        <button type="submit" className="rounded-none bg-blue-700 text-yellow-200 py-3 hover:bg-blue-900 hover:text-yellow-500">Sign Up</button>
      </form>

    </div>
  )
}
