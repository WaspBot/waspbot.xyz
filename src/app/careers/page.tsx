import React from 'react';
import JobCardGrid from '@/components/job-card-grid';

const DUMMY_JOBS = [
  {
    id: '1',
    title: 'Software Engineer',
    department: 'Engineering',
    location: 'Remote',
    description: 'We are looking for a talented Software Engineer to join our growing team. You will be responsible for developing and maintaining our core products.',
    link: '#',
  },
  {
    id: '2',
    title: 'Product Manager',
    department: 'Product',
    location: 'New York, NY',
    description: 'As a Product Manager, you will define the product strategy, roadmap, and requirements for our next-generation products.',
    link: '#',
  },
  {
    id: '3',
    title: 'UX Designer',
    department: 'Design',
    location: 'Remote',
    description: 'We are seeking a creative UX Designer to craft intuitive and engaging user experiences for our web and mobile applications.',
    link: '#',
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    description: 'Join our engineering team as a DevOps Engineer and help us build and maintain our scalable infrastructure.',
    link: '#',
  },
  {
    id: '5',
    title: 'Marketing Specialist',
    department: 'Marketing',
    location: 'London, UK',
    description: 'We are looking for a passionate Marketing Specialist to help us reach new customers and grow our brand presence.',
    link: '#',
  },
  {
    id: '6',
    title: 'Data Scientist',
    department: 'Data Science',
    location: 'Remote',
    description: 'As a Data Scientist, you will analyze complex data sets to extract actionable insights and drive product decisions.',
    link: '#',
  },
];

const CareersPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Careers at Waspbot</h1>
      <p className="text-lg mb-12">Join our team and help us build the future!</p>
      <JobCardGrid jobs={DUMMY_JOBS} />
    </div>
  );
};

export default CareersPage;