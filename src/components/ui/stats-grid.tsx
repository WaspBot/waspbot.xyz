import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Badge } from './badge';
import { cn } from '@/lib/utils';

interface StatItem {
  label: string;
  value: string | number;
  icon?: React.ElementType; // Assuming icon can be a React component
  trend?: {
    value: string;
    type: 'up' | 'down' | 'neutral';
  };
}

interface StatsGridProps {
  items: StatItem[];
}

export function StatsGrid({ items }: StatsGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {item.label}
            </CardTitle>
            {item.icon && <item.icon className="h-4 w-4 text-muted-foreground" />}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            {item.trend && (
              <p
                className={cn(
                  'text-xs text-muted-foreground',
                  item.trend.type === 'up' && 'text-green-500',
                  item.trend.type === 'down' && 'text-red-500'
                )}
              >
                {item.trend.value}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
