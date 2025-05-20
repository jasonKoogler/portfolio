import type { ReactNode } from 'react';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeProps {
  className?: string;
  children: ReactNode;
}

interface LinkProps {
  href: string;
  children: ReactNode;
}

const Heading1: React.FC<{ children: ReactNode }> = ({ children }) => (
  <h1 className="text-2xl text-[#33ff33] mt-8 mb-4 font-mono shadow-[0_0_5px_rgba(51,255,51,0.7)] before:content-['>_']">
    {children}
  </h1>
);

const Heading2: React.FC<{ children: ReactNode }> = ({ children }) => (
  <h2 className="text-xl text-[#33ff33] mt-6 mb-3 font-mono shadow-[0_0_5px_rgba(51,255,51,0.7)] before:content-['>>_']">
    {children}
  </h2>
);

const Paragraph: React.FC<{ children: ReactNode }> = ({ children }) => (
  <p className="my-4 leading-relaxed">
    {children}
  </p>
);

const CodeBlock: React.FC<CodeProps> = ({ className, children }) => {
  // Extract language from className
  const language = className ? className.replace(/language-/, '') : 'javascript';
  
  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      customStyle={{
        borderRadius: '5px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #33ff33',
        boxShadow: '0 0 10px rgba(51, 255, 51, 0.3)',
        margin: '1.5rem 0',
      }}
    >
      {String(children).trim()}
    </SyntaxHighlighter>
  );
};

const InlineCode: React.FC<{ children: ReactNode }> = ({ children }) => (
  <code className="bg-[rgba(0,0,0,0.5)] border border-[#33ff33] rounded px-1.5 py-0.5 font-mono">
    {children}
  </code>
);

const Link: React.FC<LinkProps> = ({ href, children }) => (
  <a 
    href={href}
    className="text-[#33ff99] no-underline relative hover:text-[#99ff99] hover:shadow-[0_0_10px_rgba(51,255,51,1)]"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const MDXComponents = {
  h1: Heading1,
  h2: Heading2,
  p: Paragraph,
  code: InlineCode,
  pre: ({ children }: { children: ReactNode }) => children,
  a: Link,
};

export default MDXComponents;