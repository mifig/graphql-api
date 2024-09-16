'use client'

import React from "react"
import { login } from '@/actions/auth';
import { useFormState } from "react-dom";
import FlashNotice from "@/components/FlashNotice";
import FormSubmit from "@/components/FormSubmit";

export default function LoginPage({searchParams}: any) {
  const [state, formAction] = useFormState(login, { error: null })
  const id = React.useId()

  return (
    <div className="flex w-100 flex-col justify-center mt-5">
      <h1 className="text-4xl mb-10 text-center font-bold mb-5">LOG IN</h1>
      
      {searchParams && <FlashNotice initialMessage={searchParams.error}></FlashNotice>}
      {state.error &&
        <FlashNotice initialMessage={state.error}></FlashNotice>
      }
      
      <form action={formAction} className="w-full max-w-80 flex flex-col gap-4 self-center">
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="p-2"/>
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" className="p-2"/>
        </div>
        <FormSubmit></FormSubmit>
      </form>

    </div>
  )
}
