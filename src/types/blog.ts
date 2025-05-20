export interface BlogFrontMatter {
    title: string;
    date: string;
    excerpt: string;
    slug: string;
}

export interface BlogPost {
    frontMatter: BlogFrontMatter;
    content: string;
    slug: string;
  }
  
  export interface BlogCardProps {
    post: {
      id: string;
      title: string;
      date: string;
      excerpt: string;
    };
  }