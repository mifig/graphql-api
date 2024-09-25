"use client"

import { gql, useQuery } from '@apollo/client';

export default function BlogPage({ params }) {
  const BLOG = gql`
  query Blog($blogId: ID!) {
    blog(blogId: $blogId) {
      title
      description
    }
  }`;

  const { loading, error, data } = useQuery(BLOG, { variables: { blogId: params.blogSlug }});

  if (loading) {
    return "Loading..."
  }

  return (
    <div>
      <h1>{data.blog.title}</h1>
      <p>{data.blog.description}</p>
    </div>
  );
}