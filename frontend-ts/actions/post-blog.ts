"use server"

import { BlogCreateDoc } from "@/graphql/generated"
import { apolloClient } from "@/lib/apollo-client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { setFlashNotice } from "./flash-notice";

export default async function postBlog(state: any, formData: any) {
  let blogId: string | undefined

  try {
    const { data } = await apolloClient.mutate({
      mutation: BlogCreateDoc,
      variables: {
        data: {
          title: formData.get("title"),
          description: formData.get("description")
        },
      },
    });

    blogId = data?.blogCreate?.blog.id
    await setFlashNotice({ message: "Blog created!", variant: "notice" });
  } catch (error: any) {
    
    const flashMessages = Object.entries(error.graphQLErrors[0].extensions).map((error) => {
      return `${error[0].charAt(0).toUpperCase() + error[0].slice(1)} ${error[1]}`
    })
    
    flashMessages.forEach(async (message) => {
      await setFlashNotice({ message, variant: "error" });
    })
    return { error: error.graphQLErrors[0].extensions }
  }

  revalidatePath("/blogs", "layout");
  redirect(`/blogs/${blogId}`);
}