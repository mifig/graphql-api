'use client'

import React from 'react'
import styles from './new.module.css'
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';

export default function BlogNewPage() {
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  
  const BLOG_CREATE = gql`
  mutation CreateBlog($data: CreateBlogInput!) {
    blogCreate(input: { data: $data }) {
      blog {
        id
        title
        description
        user {
          email
        }
      }
    }
  }`;

  const [blogCreateMutation, { loading }] = useMutation(BLOG_CREATE)
  const router = useRouter()

  async function handleBlogCreate(event) {
    event.preventDefault()
    const { data, error } = await blogCreateMutation({ variables: { 
      data: {
        title,
        description,
      }
    }})

    if (error) {
      return JSON.stringify(error)
    } else {
      router.push(`/blogs/${data.blogCreate.blog.id}`)
    }
  }

  if (loading) {
    return "Creating Blog..."
  }

  return (
    <div>
      <h1>New Blog</h1>

      <form className={styles.form} onSubmit={handleBlogCreate}>
        <div className={styles["form-input-wrapper"]}>
          <label name="title">Title*</label>
          <input className={styles["form-input"]} type="text" name="title" value={title} onChange={(event) => setTitle(event.target.value)}></input>
        </div>

        <div className={styles["form-input-wrapper"]}>
          <label name="description">Description</label>
          <input className={styles["form-input"]} type="text" name="description" value={description} onChange={(event) => setDescription(event.target.value)}></input>
        </div>
        <button className={styles["form-button"]} type="submit">Create</button>
      </form>

      <div>
        {data?.blogCreate.blog.title}
      </div>
    </div>
  )
}
