"use client"

import React, { ReactNode } from 'react';
import { useFormState } from 'react-dom';
import FormSubmit from '@/components/FormSubmit';
import FormInput from '../FormInput';
import deleteBlog from '@/actions/delete-blog';

function DeleteBlogForm({blogId}: {blogId: string}) {
  const [state, formAction] = useFormState(deleteBlog, { error: null })

  return (
    <form action={formAction} className="w-full max-w-80 flex flex-col gap-4 self-center">
      <FormInput type="text" hidden={true} name="blogId" label="Blog ID" inputValue={blogId} error={state.error}></FormInput>
      <FormSubmit>Delete Blog</FormSubmit>
    </form>
  );
}

export default DeleteBlogForm;
