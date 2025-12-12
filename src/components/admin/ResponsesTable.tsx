import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Eye } from 'lucide-react';
import { SurveyResponse } from '@/hooks/useResponses';
import { getQuestionsForRole } from '@/data/surveyQuestions';
import { Skeleton } from '@/components/ui/skeleton';
import { ScrollArea } from '@/components/ui/scroll-area';

interface ResponsesTableProps {
  responses: SurveyResponse[];
  isLoading: boolean;
}

const roleColors: Record<string, string> = {
  student: 'bg-orange-100 text-orange-700 hover:bg-orange-100',
  parent: 'bg-purple-100 text-purple-700 hover:bg-purple-100',
  tutor: 'bg-green-100 text-green-700 hover:bg-green-100',
  institute: 'bg-blue-100 text-blue-700 hover:bg-blue-100',
};

const ResponsesTable = ({ responses, isLoading }: ResponsesTableProps) => {
  const [selectedResponse, setSelectedResponse] = useState<SurveyResponse | null>(null);

  if (isLoading) {
    return (
      <div className="survey-card overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="w-20">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(5)].map((_, i) => (
              <TableRow key={i}>
                <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                <TableCell><Skeleton className="h-5 w-16 rounded-full" /></TableCell>
                <TableCell><Skeleton className="h-4 w-28" /></TableCell>
                <TableCell><Skeleton className="h-8 w-8 rounded" /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }

  if (responses.length === 0) {
    return (
      <div className="survey-card p-8 text-center">
        <p className="text-muted-foreground">No survey responses yet.</p>
      </div>
    );
  }

  return (
    <>
      <div className="survey-card overflow-hidden">
        <ScrollArea className="w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="w-20">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {responses.map((response) => (
                <TableRow key={response.id}>
                  <TableCell className="font-medium">{response.email}</TableCell>
                  <TableCell>{response.phone || '-'}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={roleColors[response.role]}>
                      {response.role.charAt(0).toUpperCase() + response.role.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(response.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setSelectedResponse(response)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>

      {/* Response Detail Dialog */}
      <Dialog open={!!selectedResponse} onOpenChange={() => setSelectedResponse(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle>Response Details</DialogTitle>
            <DialogDescription>
              {selectedResponse?.email} · {selectedResponse?.role}
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="max-h-[60vh] pr-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <p className="font-medium">{selectedResponse?.email}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Phone</p>
                  <p className="font-medium">{selectedResponse?.phone || '-'}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Role</p>
                  <p className="font-medium capitalize">{selectedResponse?.role}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Submitted</p>
                  <p className="font-medium">
                    {selectedResponse && new Date(selectedResponse.created_at).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm font-medium mb-3">Survey Answers</p>
                <div className="space-y-3">
                  {selectedResponse?.answers &&
                    (() => {
                      const roleQuestions = getQuestionsForRole(selectedResponse!.role);

                      const renderAnswerValue = (qId: string, value: any) => {
                        const q = roleQuestions.find((qq) => qq.id === qId);
                        if (!q) {
                          if (Array.isArray(value)) return value.join(', ');
                          return String(value);
                        }

                        // Map option values to their label text when possible
                        const mapOption = (val: any) => {
                          if (!q.options) return String(val);
                          const opt = q.options.find((o: any) => o.value === val);
                          return opt ? opt.labelEn ?? String(val) : String(val);
                        };

                        if (Array.isArray(value)) return value.map(mapOption).join(', ');
                        return mapOption(value);
                      };

                      return Object.entries(selectedResponse.answers as Record<string, any>).map(
                        ([questionId, answer]) => {
                          const q = roleQuestions.find((qq) => qq.id === questionId);
                          const label = q ? q.questionEn : questionId.replace(/_/g, ' ');

                          return (
                            <div key={questionId} className="bg-muted/50 rounded-lg p-3">
                              <p className="text-xs text-muted-foreground mb-1">{label}</p>
                              <p className="text-sm">{renderAnswerValue(questionId, answer)}</p>
                            </div>
                          );
                        }
                      );
                    })()}
                </div>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ResponsesTable;
