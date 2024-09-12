"use client"

import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function BlogsPage() {
  const BLOGS = gql`
  query Blogs {
    blogs {
      id
      title
      description
      user {
        email
        fullName
      }
    }
  }`;

  const router = useRouter();
  const { loading, error, data } = useQuery(BLOGS);

  if (loading) return 'Loading...';
  if (error) {
    // router.push("/login")
    return error.status
  }

  return (
    <div>
      <h1>My Blogs</h1>
      <ul>
        {data.blogs.map((blog) => {
          return (
            <li><Link href={`/blogs/${blog.id}`}>{blog.title}</Link></li>
          )
        })}
      </ul>
      <hr></hr>
      <Link href="/blogs/new">+ Blog</Link>
    </div>
  );
}