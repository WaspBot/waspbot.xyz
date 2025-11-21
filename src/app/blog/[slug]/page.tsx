import { notFound } from 'next/navigation';
import Link from 'next/link';

import { featuredPosts } from '@/lib/blog';

export async function generateStaticParams() {
  return featuredPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = featuredPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg text-muted-foreground mb-8">{post.date}</p>
        <div className="prose lg:prose-xl dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="mt-12">
          <Link href="/blog" className="text-primary hover:underline">
            &larr; Back to all posts
          </Link>
        </div>
      </article>
    </div>
  );
}
