"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Release {
  id: string;
  name: string;
  date: string;
  channel: 'stable' | 'beta' | 'alpha';
  link: string;
}

const mockReleases: Release[] = [
  {
    id: '1',
    name: 'Waspbot v1.0.0',
    date: '2025-11-20',
    channel: 'stable',
    link: '/blog/waspbot-v1-release',
  },
  {
    id: '2',
    name: 'Waspbot v0.9.0 Beta',
    date: '2025-11-01',
    channel: 'beta',
    link: '/blog/waspbot-v09-beta',
  },
  {
    id: '3',
    name: 'Waspbot v0.8.0 Alpha',
    date: '2025-10-15',
    channel: 'alpha',
    link: '/blog/waspbot-v08-alpha',
  },
  {
    id: '4',
    name: 'Waspbot v1.0.1 Patch',
    date: '2025-11-25',
    channel: 'stable',
    link: '/blog/waspbot-v101-patch',
  },
];

type ChannelFilter = 'all' | Release['channel'];

const ChangelogPage = () => {
  const [filter, setFilter] = useState<ChannelFilter>('all');

  const sortedAndFilteredReleases = [...mockReleases]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter((release) => {
      if (filter === 'all') {
        return true;
      }
      return release.channel === filter;
    });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Changelog</h1>
      <div className="mb-4 space-x-2">
        <Button variant={filter === 'all' ? 'secondary' : 'outline'} onClick={() => setFilter('all')}>
          All
        </Button>
        <Button variant={filter === 'stable' ? 'secondary' : 'outline'} onClick={() => setFilter('stable')}>
          Stable
        </Button>
        <Button variant={filter === 'beta' ? 'secondary' : 'outline'} onClick={() => setFilter('beta')}>
          Beta
        </Button>
        <Button variant={filter === 'alpha' ? 'secondary' : 'outline'} onClick={() => setFilter('alpha')}>
          Alpha
        </Button>
      </div>
      <div className="space-y-4">
        {sortedAndFilteredReleases.map((release) => (
          <Card key={release.id}>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>
                <Link href={release.link} className="hover:underline">
                  {release.name}
                </Link>
              </CardTitle>
              <Badge variant="outline">{release.date}</Badge>
            </CardHeader>
            <CardContent>
              <p>Channel: <Badge>{release.channel}</Badge></p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ChangelogPage;
