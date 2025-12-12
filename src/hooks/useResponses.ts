import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface SurveyResponse {
  id: string;
  email: string;
  phone: string | null;
  role: string;
  answers: Record<string, any>;
  created_at: string;
}

export const useResponses = (roleFilter: string) => {
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchResponses = useCallback(async () => {
    setIsLoading(true);
    try {
      let query = supabase
        .from('survey_responses')
        .select('*')
        .order('created_at', { ascending: false });

      if (roleFilter !== 'all') {
        query = query.eq('role', roleFilter);
      }

      const { data, error } = await query;

      if (error) throw error;

      setResponses((data as SurveyResponse[]) || []);
    } catch (error: any) {
      console.error('Error fetching responses:', error);
      toast({
        title: 'Error fetching responses',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }, [roleFilter, toast]);

  useEffect(() => {
    fetchResponses();
  }, [fetchResponses]);

  return { responses, isLoading, refetch: fetchResponses };
};
