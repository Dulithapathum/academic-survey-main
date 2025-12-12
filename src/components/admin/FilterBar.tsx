import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RefreshCw, Download } from 'lucide-react';
import { SurveyResponse } from '@/hooks/useResponses';
import { useToast } from '@/hooks/use-toast';

interface FilterBarProps {
  roleFilter: string;
  onRoleFilterChange: (value: string) => void;
  responses: SurveyResponse[];
  onRefresh: () => void;
  isLoading: boolean;
}

const FilterBar = ({ roleFilter, onRoleFilterChange, responses, onRefresh, isLoading }: FilterBarProps) => {
  const { toast } = useToast();

  const exportToCSV = () => {
    if (responses.length === 0) {
      toast({
        title: 'No data to export',
        description: 'There are no responses to export.',
        variant: 'destructive',
      });
      return;
    }

    // Flatten answers for CSV
    const csvData = responses.map((r) => ({
      id: r.id,
      email: r.email,
      phone: r.phone || '',
      role: r.role,
      created_at: new Date(r.created_at).toLocaleString(),
      ...Object.fromEntries(
        Object.entries(r.answers as Record<string, any>).map(([key, value]) => [
          key,
          Array.isArray(value) ? value.join('; ') : value,
        ])
      ),
    }));

    // Get all possible headers
    const allKeys = new Set<string>();
    csvData.forEach((row) => Object.keys(row).forEach((key) => allKeys.add(key)));
    const headers = Array.from(allKeys);

    // Build CSV
    const csvContent = [
      headers.join(','),
      ...csvData.map((row) =>
        headers
          .map((header) => {
            const value = (row as any)[header] ?? '';
            // Escape quotes and wrap in quotes
            return `"${String(value).replace(/"/g, '""')}"`;
          })
          .join(',')
      ),
    ].join('\n');

    // Download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `survey_responses_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();

    toast({
      title: 'Export successful',
      description: `Exported ${responses.length} responses to CSV.`,
    });
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
      <div className="flex items-center gap-3">
        <label className="text-sm font-medium">Filter by Role:</label>
        <Select value={roleFilter} onValueChange={onRoleFilterChange}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="All Roles" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="student">Students</SelectItem>
            <SelectItem value="parent">Parents</SelectItem>
            <SelectItem value="tutor">Tutors</SelectItem>
            <SelectItem value="institute">Institutes</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={onRefresh} disabled={isLoading}>
          <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
          Refresh
        </Button>
        <Button size="sm" onClick={exportToCSV} disabled={responses.length === 0}>
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;
