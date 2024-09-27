"use server"

import { apolloClient } from "@/lib/apollo-client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { setFlashNotice } from "./flash-notice";
import { BlogDeleteDoc } from "@/graphql/generated";

export default async function deleteBlog(state: any, formData: any) {
  console.log(formData.get("blogId"))
  try {
    const { data } = await apolloClient.mutate({
      mutation: BlogDeleteDoc,
      variables: {
        blogId:  formData.get("blogId")
      },
    });


    await setFlashNotice({ message: `Blog "${data?.blogDelete?.blog.title}" deleted!`, variant: "notice" });
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
  redirect(`/blogs`);
}