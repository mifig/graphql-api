"use client"

import { useFormState } from "react-dom"
import FormInput from "@/components/FormInput"
import FormSubmit from "@/components/FormSubmit"
import postBlog from "@/actions/post-blog"

export default async function NewBlogPage() {  
  const [state, formAction] = useFormState(postBlog, { error: null })

  return (
    <div className="flex w-100 flex-col justify-center mt-5">
      <h1 className="text-4xl mt-5 mb-5 text-center">NEW BLOG</h1>

      <form action={formAction} className="w-full max-w-80 flex flex-col gap-4 self-center">
        <FormInput type="text" label="Title" error={state?.error?.title} id="title" name="title"></FormInput>
        <FormInput type="text" label="Description" error={state?.error?.description} id="description" name="description"></FormInput>
        <FormSubmit>Create</FormSubmit>
      </form>
    </div>
  )
}