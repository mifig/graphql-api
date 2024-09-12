"use client"

import React from 'react';
import { login } from '@/actions/auth';
import { useFormState } from "react-dom";

function LoginForm() {
  const [state, formAction] = useFormState(login)
  
  return (
    <form action={formAction}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="Email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
      </div>
      <button type="submit">Login</button>
      <p>{state?.error}</p>
    </form>
  )
}

export default LoginForm;
