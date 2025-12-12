import { Card, CardContent } from '@/components/ui/card';
import { Users, GraduationCap, Building2, BookOpen, UserCheck } from 'lucide-react';
import { SurveyResponse } from '@/hooks/useResponses';
import { Skeleton } from '@/components/ui/skeleton';

interface StatsCardsProps {
  responses: SurveyResponse[];
  isLoading: boolean;
}

const StatsCards = ({ responses, isLoading }: StatsCardsProps) => {
  const stats = [
    {
      label: 'Total Responses',
      value: responses.length,
      icon: Users,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      label: 'Students',
      value: responses.filter((r) => r.role === 'student').length,
      icon: GraduationCap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
    {
      label: 'Parents',
      value: responses.filter((r) => r.role === 'parent').length,
      icon: UserCheck,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      label: 'Tutors',
      value: responses.filter((r) => r.role === 'tutor').length,
      icon: BookOpen,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      label: 'Institutes',
      value: responses.filter((r) => r.role === 'institute').length,
      icon: Building2,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
  ];

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        {[...Array(5)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <Skeleton className="h-4 w-20 mb-2" />
              <Skeleton className="h-8 w-12" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;
