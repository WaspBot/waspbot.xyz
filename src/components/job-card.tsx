
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface JobCardProps {
  title: string;
  department: string;
  location: string;
  description: string;
  link: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, department, location, description, link }) => {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{department} - {location}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">Apply Now</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
