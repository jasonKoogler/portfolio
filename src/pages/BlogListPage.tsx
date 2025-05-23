import React, { useState } from 'react';
import { Link } from 'react-router';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

const BlogListPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      slug: 'creating-crt-effects',
      title: 'Creating CRT Effects with CSS',
      date: '2023-11-15',
      excerpt: 'Learn how to create authentic CRT monitor effects using modern CSS techniques.'
    },
    {
      slug: 'working-with-mdx',
      title: 'Working with MDX in React',
      date: '2023-10-28',
      excerpt: 'Explore the power of MDX for creating interactive and dynamic content in React applications.'
    },
    {
      slug: 'getting-started-with-react',
      title: 'Getting Started with React',
      date: '2023-09-12',
      excerpt: 'A beginner-friendly guide to setting up your first React project and understanding core concepts.'
    }
  ]);

  return (
    <div>
      <h1 className="text-2xl mb-8 font-bold tracking-wider">BLOG ENTRIES</h1>

      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.slug} className="border border-[#33ff33] p-5 hover:shadow-[0_0_12px_rgba(51,255,51,0.3)] transition-all">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <div className="text-sm opacity-70 mb-3">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <p className="mb-4">{post.excerpt}</p>
            <Link
              to={`/blog/${post.slug}`}
              className="inline-block px-4 py-2 border border-[#33ff33] hover:shadow-[0_0_8px_rgba(51,255,51,0.5)] transition-all"
            >
              READ POST &gt;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;
