import { BlogDoc } from "@/graphql/generated";
import serverQuery from "@/lib/server-query";
import { notFound } from "next/navigation";
import DeleteBlogForm from "@/components/DeleteBlogForm";

export default async function BlogPage({ params }: {params: String | any }) {
  const data: { blog: any } | any = await serverQuery(BlogDoc, { blogId: params.blogSlug });

  if (data.error) {
    notFound()
  }
  
  return (
    <div className="mx-5">
      <h1 className="text-4xl mt-5 mb-5 text-center">{data.blog.title}</h1>

      <text>
        {data.blog.description}
      </text>

      <DeleteBlogForm blogId={params.blogSlug} />
    </div>
  )
}