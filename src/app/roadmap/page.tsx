import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface Milestone {
  title: string;
  date: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    title: "Feature A Release",
    date: "Q1 2026",
    description: "Launch of the highly anticipated Feature A with enhanced user experience.",
  },
  {
    title: "Platform Optimization",
    date: "Q2 2026",
    description: "Significant performance improvements and infrastructure upgrades.",
  },
  {
    title: "Mobile App Redesign",
    date: "Q3 2026",
    description: "Complete overhaul of the mobile application with new UI/UX.",
  },
  {
    title: "API Expansion",
    date: "Q4 2026",
    description: "Introduction of new API endpoints for broader integration capabilities.",
  },
];

export default function RoadmapPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Roadmap</h1>

      <div className="relative pl-8 sm:pl-0">
        {/* Vertical line */}
        <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

        {milestones.map((milestone, index) => (
          <div key={index} className="mb-8 flex items-center w-full">
            {/* Left side (for larger screens) */}
            <div className="hidden sm:flex w-1/2 justify-end pr-8">
              {index % 2 === 0 && (
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle>{milestone.title}</CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{milestone.date}</p>
                  </CardHeader>
                  <CardContent>
                    <p>{milestone.description}</p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Dot and line connector */}
            <div className="absolute sm:relative left-0 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10"></div>

            {/* Right side (for larger screens) */}
            <div className="flex w-full sm:w-1/2 pl-8 sm:pl-8">
              {index % 2 !== 0 && (
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle>{milestone.title}</CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{milestone.date}</p>
                  </CardHeader>
                  <CardContent>
                    <p>{milestone.description}</p>
                  </CardContent>
                </Card>
              )}
              {/* For small screens, always render on the right */}
              <div className="sm:hidden w-full">
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle>{milestone.title}</CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{milestone.date}</p>
                  </CardHeader>
                  <CardContent>
                    <p>{milestone.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
