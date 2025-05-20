import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
}

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // In a real application, you would fetch the post data from an API
    // For now, let's simulate loading the post based on the slug
    setLoading(true);
    
    // Simulating API call delay
    setTimeout(() => {
      // Demo post data
      const demoPost = {
        slug: slug || '',
        title: slug === 'creating-crt-effects' 
          ? 'Creating CRT Effects with CSS' 
          : slug === 'working-with-mdx'
          ? 'Working with MDX in React'
          : 'Getting Started with React',
        date: '2023-11-15',
        content: `This is a placeholder for the ${slug} blog post content. 
        
In a real application, this would be loaded from an MDX file or a CMS.

The content would include:
- Rich text formatting
- Code snippets
- Images and other media
- Interactive components

Stay tuned for the complete version of this article!
        `
      };
      
      setPost(demoPost);
      setLoading(false);
    }, 800);
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[40vh]">
        <p className="animate-pulse">LOADING POST...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div>
        <h1 className="text-2xl mb-4 font-bold tracking-wider">ERROR 404</h1>
        <p>Post not found. The specified article doesn't exist.</p>
      </div>
    );
  }

  return (
    <article>
      <h1 className="text-2xl mb-2 font-bold tracking-wider">{post.title}</h1>
      <div className="text-sm opacity-70 mb-8">
        {new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </div>
      
      <div className="prose prose-invert prose-green">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </article>
  );
};

export default BlogPostPage;
