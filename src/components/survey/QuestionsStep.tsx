import { Question, UserRole } from '@/types/survey';
import { getQuestionsForRole } from '@/data/surveyQuestions';
import QuestionRenderer from './QuestionRenderer';

interface QuestionsStepProps {
  role: UserRole;
  answers: Record<string, string | string[]>;
  onAnswerChange: (questionId: string, value: string | string[]) => void;
}

const roleLabels: Record<UserRole, { en: string; si: string }> = {
  tutor: { en: 'Tutor Questions', si: 'ගුරු ප්‍රශ්න' },
  institute: { en: 'Institute Owner Questions', si: 'ආයතන හිමිකරු ප්‍රශ්න' },
  student: { en: 'Student Questions', si: 'සිසු ප්‍රශ්න' },
  parent: { en: 'Parent Questions', si: 'දෙමාපිය ප්‍රශ්න' },
};

const QuestionsStep = ({ role, answers, onAnswerChange }: QuestionsStepProps) => {
  const questions = getQuestionsForRole(role);
  const label = roleLabels[role];

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-1">
          {label.en}
        </h2>
        <p className="sinhala-text">{label.si}</p>
        <p className="text-muted-foreground text-sm mt-2">
          Please answer the following questions based on your experience.
          <span className="sinhala-text block mt-1">කරුණාකර ඔබේ අත්දැකීම් මත පදනම්ව පහත ප්‍රශ්නවලට පිළිතුරු දෙන්න.</span>
        </p>
      </div>

      <div className="space-y-4">
        {questions.map((question, index) => (
          <QuestionRenderer
            key={question.id}
            question={question}
            questionNumber={index + 1}
            value={answers[question.id] || (question.type === 'checkbox' ? [] : '')}
            onChange={(value) => onAnswerChange(question.id, value)}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionsStep;
