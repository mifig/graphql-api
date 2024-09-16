"use server"

import { LoginDoc, SigninDoc } from "@/graphql/generated";
import { apolloClient } from "@/lib/apollo-client";
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";
import { setFlashNotice } from "@/lib/flash-notice";

export async function login(state: any, formData: FormData) {
  try {
    const { data } = await apolloClient.mutate({
      mutation: LoginDoc, 
      variables: {
        data: {
          email: formData.get("email"),
          password: formData.get("password")
        }
      }
    })
    
    cookies().set('jwtToken', data.sessionCreate.token)
  } catch(error: any) {
    return { ...error }
  }

  redirect("/blogs")
}

export async function signin(state: any, formData: FormData) {
  try {
    const { data } = await apolloClient.mutate({
      mutation: SigninDoc, 
      variables: {
        data: {
          email: formData.get("email"),
          password: formData.get("password"),
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName")
        }
      }
    })
    
    cookies().set('jwtToken', data.registrationCreate.token)
    setFlashNotice("Welcome!")
  } catch(error: any) {
    return { ...error }
  }

  redirect("/blogs")
}

export async function logout() {
  cookies().delete('jwtToken')
  redirect('/login')
}