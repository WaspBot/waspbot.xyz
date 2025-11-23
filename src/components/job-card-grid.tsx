
import React from 'react';
import JobCard from './job-card';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  description: string;
  link: string;
}

interface JobCardGridProps {
  jobs: Job[];
}

const JobCardGrid: React.FC<JobCardGridProps> = ({ jobs }) => {
  const jobsByDepartment: { [key: string]: Job[] } = jobs.reduce((acc, job) => {
    (acc[job.department] = acc[job.department] || []).push(job);
    return acc;
  }, {} as { [key: string]: Job[] });

  return (
    <div className="space-y-12">
      {Object.entries(jobsByDepartment).map(([department, departmentJobs]) => (
        <div key={department}>
          <h2 className="text-3xl font-semibold mb-6">{department}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departmentJobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCardGrid;
