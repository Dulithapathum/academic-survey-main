export type UserRole = 'tutor' | 'institute' | 'student' | 'parent';

export interface QuestionOption {
  value: string;
  labelEn: string;
  labelSi: string;
}

export interface Question {
  id: string;
  type: 'radio' | 'checkbox' | 'textarea';
  questionEn: string;
  questionSi: string;
  options?: QuestionOption[];
  required?: boolean;
}

export interface SurveyData {
  consent: boolean;
  email: string;
  phone: string;
  role: UserRole | null;
  answers: Record<string, string | string[]>;
}

export type SurveyStep = 'consent' | 'contact' | 'role' | 'questions' | 'complete';
