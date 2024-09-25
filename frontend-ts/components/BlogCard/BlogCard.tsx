import { Blog } from '@/graphql/generated';
import React from 'react';
import Link from 'next/link';

function BlogCard({blog}: {blog: Blog}) {
  return (
    <Link href={`/blogs/${blog.id}`}>
      <div className='bg-yellow-400 text-blue-600 hover:bg-yellow-500'>
        <p className="p-3">{blog.title}</p>
      </div>
    </Link>
  );
}

export default BlogCard;
