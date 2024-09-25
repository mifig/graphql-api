import BlogCard from "@/components/BlogCard/BlogCard";
import { Blog, BlogsDoc } from "@/graphql/generated";
import serverQuery from "@/lib/server-query";
import Link from "next/link";

export default async function BlogsPage() {
  const data: { blogs: Array<Blog> } | undefined = await serverQuery(BlogsDoc);
  
  return (
    <div className="mx-5">
      <h1 className="text-4xl mb-5 text-center">MY BLOGS</h1>

      <Link href="/blogs/new" className="bg-blue-700 hover:bg-blue-900 text-yellow-200 px-3 py-2 mb-5 block w-fit">+ Create Blog</Link>

      <div className="flex flex-col gap-2">
        {data!.blogs.map((blog: Blog, idx: number) => {
          return <BlogCard key={idx} blog={blog} />
        })}
      </div>
    </div>
  )
}