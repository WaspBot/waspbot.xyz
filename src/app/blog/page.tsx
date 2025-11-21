import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const featuredPosts = [
  {
    slug: 'first-post',
    title: 'My First Blog Post',
    description: 'This is an exciting journey into the world of blogging with Next.js and Gemini CLI.',
    date: 'November 15, 2025',
  },
  {
    slug: 'next-steps',
    title: 'Taking the Next Steps with Waspbot',
    description: 'Exploring advanced features and integrations for our AI-powered assistant.',
    date: 'November 20, 2025',
  },
  {
    slug: 'community-building',
    title: 'Building a Strong Community Around Waspbot',
    description: 'Strategies for fostering engagement and collaboration among users.',
    date: 'November 22, 2025',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Featured Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredPosts.map((post) => (
          <article key={post.slug}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
                  Read more
                </Link>
              </CardFooter>
            </Card>
          </article>
        ))}
      </div>
    </div>
  );
}
