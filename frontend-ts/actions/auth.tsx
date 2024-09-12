"use server"

import { LoginDoc } from "@/graphql/generated";
import { apolloClient } from "@/lib/apollo-client";
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";

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