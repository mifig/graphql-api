'use client'

import React from "react"
import { login } from '@/actions/auth';
import { useFormState } from "react-dom";
import FormSubmit from "@/components/FormSubmit";
import FormInput from "@/components/FormInput/FormInput";

export default function LoginPage() {
  const [state, formAction] = useFormState(login, { error: null })

  return (
    <div className="flex w-100 flex-col justify-center mt-5">
      <h1 className="text-4xl mb-10 text-center font-bold mb-5">LOG IN</h1>
      
      <form action={formAction} className="w-full max-w-80 flex flex-col gap-4 self-center">
        <FormInput type="email" label="Email" error={state.error} id="email" name="email"></FormInput>
        <FormInput type="password" label="Password" error={state.error} id="password" name="password"></FormInput>
        <FormSubmit>Log In</FormSubmit>
      </form>
    </div>
  )
}
