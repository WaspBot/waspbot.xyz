export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  content: string;
}

export const featuredPosts: Post[] = [
  {
    slug: 'first-post',
    title: 'My First Blog Post',
    description: 'This is an exciting journey into the world of blogging with Next.js and Gemini CLI.',
    date: '2025-11-15',
    content: `
      <p>Welcome to my first blog post! This is a test post to demonstrate the dynamic routing capabilities of Next.js.</p>
      <p>I'm using the Gemini CLI to implement this feature, which is pretty neat!</p>
      <p>Stay tuned for more updates.</p>
    `,
  },
  {
    slug: 'next-steps',
    title: 'Taking the Next Steps with Waspbot',
    description: 'Exploring advanced features and integrations for our AI-powered assistant.',
    date: '2025-11-20',
    content: `
      <p>In this post, we'll discuss the future of Waspbot and what's next on our roadmap.</p>
      <p>We're constantly working on new features and improvements to make Waspbot even better.</p>
      <p>Your feedback is always welcome!</p>
    `,
  },
  {
    slug: 'community-building',
    title: 'Building a Strong Community Around Waspbot',
    description: 'Strategies for fostering engagement and collaboration among users.',
    date: '2025-11-22',
    content: `
      <p>A strong community is essential for any successful project. Here at Waspbot, we believe in fostering a vibrant and engaged community.</p>
      <p>We'll be sharing tips and strategies for building and growing your own communities.</p>
      <p>Join us on this journey!</p>
    `,
  },
];
