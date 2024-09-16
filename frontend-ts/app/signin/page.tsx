'use client'

import React from "react"
import { signin } from '@/actions/auth';
import { useFormState } from "react-dom";
import FlashNotice from "@/components/FlashNotice";

export default function LoginPage({searchParams}: any) {
  const [state, formAction] = useFormState(signin, '')
  const id = React.useId()

  return (
    <div className="flex w-100 flex-col justify-center mt-5">
      <h1 className="text-4xl mb-10 text-center font-bold mb-5">SIGN IN</h1>
      
      {searchParams && <FlashNotice initialMessage={searchParams.error}></FlashNotice>}
      
      {state?.graphQLErrors && 
        state.graphQLErrors.map((error: any) => {
          return <FlashNotice key={id} initialMessage={error.message}></FlashNotice>
        })
      }
      
      <form action={formAction} className="w-full max-w-80 flex flex-col gap-4 self-center">
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" type="text" className="p-2"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" type="text" className="p-2"/>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="p-2"/>
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" className="p-2"/>
        </div>
        <button type="submit" className="rounded-none bg-blue-700 text-yellow-200 py-3 hover:bg-blue-900 hover:text-yellow-500">Login</button>
      </form>

    </div>
  )
}
