"use server";

import { LoginDoc, SigninDoc } from "@/graphql/generated";
import { apolloClient } from "@/lib/apollo-client";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { setFlashNotice } from "@/actions/flash-notice";
import { revalidatePath } from "next/cache";

export async function login(state: any, formData: any) {
  try {
    const { data } = await apolloClient.mutate({
      mutation: LoginDoc,
      variables: {
        data: {
          email: formData.get("email"),
          password: formData.get("password"),
        },
      },
    });

    if (data?.sessionCreate) {
      cookies().set("jwtToken", data.sessionCreate.token);
      await setFlashNotice({ message: "Welcome!", variant: "notice" });
    }
  } catch (error: any) {
    console.log(error.graphQLErrors)
    await setFlashNotice({ message: error.graphQLErrors[0].message, variant: "error" });
    return { error: error.graphQLErrors[0].message };
  }

  revalidatePath("/", "layout");
  redirect("/blogs");
}

export async function signin(state: any, formData: any) {
  try {
    const { data } = await apolloClient.mutate({
      mutation: SigninDoc,
      variables: {
        data: {
          email: formData.get("email"),
          password: formData.get("password"),
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
        },
      },
    });

    if (data?.registrationCreate) {
      cookies().set("jwtToken", data.registrationCreate.token);
      await setFlashNotice({ message: "Welcome!", variant: "notice" });
    }
  } catch (error: any) {
    await setFlashNotice({ message: error.graphQLErrors[0].message, variant: "error" });
    return { error: error.graphQLErrors[0].message };
  }

  redirect("/blogs");
}

export async function logout() {
  cookies().delete("jwtToken");
  await setFlashNotice({ message: "Good Bye!", variant: "notice" });
  redirect("/login");
}
