import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Documentation</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Everything you need to get started and master Waspbot.
        </p>
      </section>

      {/* Quick Start Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Quick Start</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Installation</CardTitle>
              <CardDescription>Get Waspbot up and running.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Follow our easy installation guide to set up Waspbot on your system.</p>
              <Button asChild className="mt-4">
                <Link href="/docs/installation">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>2. Basic Usage</CardTitle>
              <CardDescription>Understand the core functionalities.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Explore the fundamental commands and features of Waspbot.</p>
              <Button asChild className="mt-4">
                <Link href="/docs/basic-usage">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>3. Configuration</CardTitle>
              <CardDescription>Customize Waspbot to your needs.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Dive into advanced configuration options and best practices.</p>
              <Button asChild className="mt-4">
                <Link href="/docs/configuration">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Doc Categories */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Browse Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>Connect Waspbot with your favorite tools.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/docs/integrations">View Integrations</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>API Reference</CardTitle>
              <CardDescription>Detailed documentation for developers.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/docs/api-reference">Explore API</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Troubleshooting</CardTitle>
              <CardDescription>Find solutions to common issues.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/docs/troubleshooting">Get Help</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Advanced Topics</CardTitle>
              <CardDescription>Deep dive into advanced features.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/docs/advanced-topics">Read More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Tutorials</CardTitle>
              <CardDescription>Step-by-step guides for various tasks.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/docs/tutorials">View Tutorials</Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Release Notes</CardTitle>
              <CardDescription>Stay up-to-date with the latest changes.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/docs/release-notes">View Releases</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}