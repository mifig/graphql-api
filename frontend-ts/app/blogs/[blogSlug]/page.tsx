import { BlogDoc } from "@/graphql/generated";
import serverQuery from "@/lib/server-query";

export default async function BlogPage({ params }: Record<string, any>) {
  const data = await serverQuery(BlogDoc, { blogId: params.blogSlug });
  
  return (
    <div className="mx-5">
      <h1 className="text-4xl mt-5 mb-5 text-center">{data.blog.title}</h1>

      <text>
        {data.blog.description}
      </text>
    </div>
  )
}