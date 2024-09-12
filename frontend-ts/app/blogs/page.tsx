import { Blog, BlogsDoc } from "@/graphql/generated";
import serverQuery from "@/lib/server-query";
import Link from "next/link";

export default async function BlogsPage() {
  // A functions that handles the queries and redirects by reading the code of the error (that comes from our backend).
  // Still need to find a way to add a flash notice with the error. Through the headers or params?
  const data = await serverQuery(BlogsDoc);
  
  // Before trying to redirect I used directly the appollo query:
  // const { data } = await query({query: BlogsDoc});
  
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