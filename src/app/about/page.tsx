import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'About Waspbot',
  description: 'Learn more about Waspbot\'s mission, values, and team.',
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-lg">
              At Waspbot, our mission is to empower developers with intelligent,
              AI-driven tools that streamline workflows, enhance code quality,
              and accelerate innovation. We believe in a future where technology
              assists creativity, allowing engineers to focus on solving complex
              problems rather than repetitive tasks.
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-lg">
              <li>
                <strong>Innovation:</strong> Continuously exploring new frontiers in AI and software development.
              </li>
              <li>
                <strong>Quality:</strong> Committing to excellence in every line of code and every feature we deliver.
              </li>
              <li>
                <strong>Collaboration:</strong> Fostering a community where ideas are shared and built upon.
              </li>
              <li>
                <strong>Integrity:</strong> Operating with transparency, honesty, and respect for our users and team.
              </li>
              <li>
                <strong>Empowerment:</strong> Providing tools that amplify human potential and creativity.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-lg mb-4">
              We are a passionate group of engineers, designers, and AI
              enthusiasts dedicated to building the next generation of developer
              tools. Our diverse backgrounds and shared vision drive us to
              create impactful solutions.
            </CardDescription>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Alice Johnson</CardTitle>
                  <CardDescription>CEO & Co-founder</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    With a background in AI research and a passion for open
                    source, Alice leads our strategic vision.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Bob Smith</CardTitle>
                  <CardDescription>Lead Engineer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Bob is the architect behind our core AI engine, ensuring
                    robustness and scalability.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Charlie Brown</CardTitle>
                  <CardDescription>Product Designer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Charlie crafts intuitive user experiences that make complex
                    tools a joy to use.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="text-center mt-12">
        <Link href="/" className="text-blue-500 hover:underline text-lg">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
