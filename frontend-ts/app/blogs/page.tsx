import { Blog, BlogsDoc } from "@/graphql/generated";
import { query } from "@/lib/apollo-client";
import Link from "next/link";

export default async function BlogsPage() {
  const { error, data } = await query({query: BlogsDoc});
  
  return (
    <div className="mx-5">
      <h1 className="text-4xl mt-5 mb-5 text-center">MY BLOGS</h1>

      <ul>
        {data.blogs.map((blog: Blog, idx: number) => {
          return <li key={idx}><Link href={`/blogs/${blog.id}`} className="hover:text-orange-800">{blog.title}</Link></li>
        })}
      </ul>
    </div>
  )
}