import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RefreshCw, Download } from 'lucide-react';
import { SurveyResponse } from '@/hooks/useResponses';
import { useToast } from '@/hooks/use-toast';
import { getQuestionsForRole } from '@/data/surveyQuestions';

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

    // Helper to get readable question text and map answers to labels
    const getQuestionLabel = (questionId: string, role: string) => {
      const roleQuestions = getQuestionsForRole(role);
      const q = roleQuestions.find((qq) => qq.id === questionId);
      return q ? q.questionEn : questionId;
    };

    const getAnswerLabel = (questionId: string, value: any, role: string) => {
      const roleQuestions = getQuestionsForRole(role);
      const q = roleQuestions.find((qq) => qq.id === questionId);

      if (!q || !q.options) {
        return Array.isArray(value) ? value.join('; ') : String(value);
      }

      const mapOption = (val: any) => {
        const opt = q.options?.find((o: any) => o.value === val);
        return opt ? opt.labelEn ?? String(val) : String(val);
      };

      return Array.isArray(value) ? value.map(mapOption).join('; ') : mapOption(value);
    };

    // Flatten answers for CSV with readable labels
    const csvData = responses.map((r) => {
      const row: any = {
        id: r.id,
        email: r.email,
        phone: r.phone || '',
        role: r.role,
        created_at: new Date(r.created_at).toLocaleString(),
      };

      Object.entries(r.answers as Record<string, any>).forEach(([questionId, value]) => {
        const questionLabel = getQuestionLabel(questionId, r.role);
        const answerLabel = getAnswerLabel(questionId, value, r.role);
        row[questionLabel] = answerLabel;
      });

      return row;
    });

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
