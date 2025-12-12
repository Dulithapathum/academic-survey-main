import { useState } from 'react';
import { User } from '@supabase/supabase-js';
import { Button } from '@/components/ui/button';
import { LogOut, RefreshCw } from 'lucide-react';
import ResponsesTable from './ResponsesTable';
import StatsCards from './StatsCards';
import FilterBar from './FilterBar';
import { useResponses } from '@/hooks/useResponses';

interface AdminDashboardProps {
  user: User | null;
  onLogout: () => void;
}

const AdminDashboard = ({ user, onLogout }: AdminDashboardProps) => {
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const { responses, isLoading, refetch } = useResponses(roleFilter);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-survey-header text-survey-header-foreground py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">Admin Dashboard</h1>
            <p className="text-sm opacity-80">Survey Response Management</p>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <span className="hidden md:inline text-sm opacity-80">{user?.email}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={onLogout}
              className="bg-transparent border-survey-header-foreground/30 text-survey-header-foreground hover:bg-survey-header-foreground/10"
            >
              <LogOut className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Logout</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Stats */}
        <StatsCards responses={responses} isLoading={isLoading} />

        {/* Filter & Actions */}
        <FilterBar
          roleFilter={roleFilter}
          onRoleFilterChange={setRoleFilter}
          responses={responses}
          onRefresh={refetch}
          isLoading={isLoading}
        />

        {/* Responses Table */}
        <ResponsesTable responses={responses} isLoading={isLoading} />
      </main>
    </div>
  );
};

export default AdminDashboard;
