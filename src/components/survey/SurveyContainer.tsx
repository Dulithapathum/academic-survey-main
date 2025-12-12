import { useState } from 'react';
import { SurveyData, SurveyStep, UserRole } from '@/types/survey';
import { getQuestionsForRole } from '@/data/surveyQuestions';
import { useToast } from '@/hooks/use-toast';
import SurveyHeader from './SurveyHeader';
import ProgressBar from './ProgressBar';
import ConsentStep from './ConsentStep';
import ContactStep from './ContactStep';
import RoleSelector from './RoleSelector';
import QuestionsStep from './QuestionsStep';
import ThankYouStep from './ThankYouStep';
import NavigationButtons from './NavigationButtons';

const steps = [
  { labelEn: 'Consent', labelSi: 'එකඟතාව' },
  { labelEn: 'Contact', labelSi: 'සම්බන්ධතා' },
  { labelEn: 'Role', labelSi: 'භූමිකාව' },
  { labelEn: 'Questions', labelSi: 'ප්‍රශ්න' },
  { labelEn: 'Complete', labelSi: 'සම්පූර්ණයි' },
];

const stepOrder: SurveyStep[] = ['consent', 'contact', 'role', 'questions', 'complete'];

const SurveyContainer = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<SurveyStep>('consent');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [surveyData, setSurveyData] = useState<SurveyData>({
    consent: false,
    email: '',
    phone: '',
    role: null,
    answers: {},
  });

  const currentStepIndex = stepOrder.indexOf(currentStep);

  const updateSurveyData = (updates: Partial<SurveyData>) => {
    setSurveyData((prev) => ({ ...prev, ...updates }));
  };

  const handleAnswerChange = (questionId: string, value: string | string[]) => {
    setSurveyData((prev) => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: value },
    }));
  };

  const validateCurrentStep = (): boolean => {
    switch (currentStep) {
      case 'consent':
        if (!surveyData.consent) {
          toast({
            title: 'Consent Required',
            description: 'Please agree to participate in this survey to continue.',
            variant: 'destructive',
          });
          return false;
        }
        return true;

      case 'contact':
        if (!surveyData.email.trim()) {
          toast({
            title: 'Email Required',
            description: 'Please enter your email address.',
            variant: 'destructive',
          });
          return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(surveyData.email)) {
          toast({
            title: 'Invalid Email',
            description: 'Please enter a valid email address.',
            variant: 'destructive',
          });
          return false;
        }
        return true;

      case 'role':
        if (!surveyData.role) {
          toast({
            title: 'Role Required',
            description: 'Please select your role to continue.',
            variant: 'destructive',
          });
          return false;
        }
        return true;

      case 'questions':
        if (!surveyData.role) return false;
        const questions = getQuestionsForRole(surveyData.role);
        const requiredQuestions = questions.filter((q) => q.required);
        
        for (const question of requiredQuestions) {
          const answer = surveyData.answers[question.id];
          if (!answer || (Array.isArray(answer) && answer.length === 0)) {
            toast({
              title: 'Please Answer All Required Questions',
              description: `Question "${question.questionEn}" requires an answer.`,
              variant: 'destructive',
            });
            return false;
          }
        }
        return true;

      default:
        return true;
    }
  };

  const handleNext = () => {
    if (!validateCurrentStep()) return;

    const nextIndex = currentStepIndex + 1;
    if (nextIndex < stepOrder.length) {
      setCurrentStep(stepOrder[nextIndex]);
    }
  };

  const handleBack = () => {
    const prevIndex = currentStepIndex - 1;
    if (prevIndex >= 0) {
      setCurrentStep(stepOrder[prevIndex]);
    }
  };

  const handleSubmit = async () => {
    if (!validateCurrentStep()) return;
    if (!surveyData.role) return;

    setIsSubmitting(true);
    
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      
      const { error } = await supabase.from('survey_responses').insert({
        email: surveyData.email.trim(),
        phone: surveyData.phone.trim() || null,
        role: surveyData.role,
        answers: surveyData.answers,
      });

      if (error) throw error;
      
      toast({
        title: 'Survey Submitted Successfully!',
        description: 'Thank you for your contribution to this research.',
      });
      
      setCurrentStep('complete');
    } catch (error: any) {
      console.error('Submission error:', error);
      toast({
        title: 'Submission Failed',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isNextDisabled = () => {
    switch (currentStep) {
      case 'consent':
        return !surveyData.consent;
      case 'contact':
        return !surveyData.email.trim();
      case 'role':
        return !surveyData.role;
      default:
        return false;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'consent':
        return (
          <ConsentStep
            consent={surveyData.consent}
            onConsentChange={(checked) => updateSurveyData({ consent: checked })}
          />
        );
      case 'contact':
        return (
          <ContactStep
            email={surveyData.email}
            phone={surveyData.phone}
            onEmailChange={(email) => updateSurveyData({ email })}
            onPhoneChange={(phone) => updateSurveyData({ phone })}
          />
        );
      case 'role':
        return (
          <RoleSelector
            selectedRole={surveyData.role}
            onRoleSelect={(role) => updateSurveyData({ role })}
          />
        );
      case 'questions':
        return surveyData.role ? (
          <QuestionsStep
            role={surveyData.role}
            answers={surveyData.answers}
            onAnswerChange={handleAnswerChange}
          />
        ) : null;
      case 'complete':
        return <ThankYouStep />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SurveyHeader />
      
      {currentStep !== 'complete' && (
        <ProgressBar
          currentStep={currentStepIndex}
          totalSteps={steps.length}
          steps={steps}
        />
      )}

      <main className="max-w-3xl mx-auto px-4 py-6 md:py-8">
        <div className="survey-card p-4 md:p-6 lg:p-8">
          {renderStep()}

          {currentStep !== 'complete' && (
            <NavigationButtons
              showBack={currentStepIndex > 0}
              showNext={currentStep !== 'questions'}
              showSubmit={currentStep === 'questions'}
              isNextDisabled={isNextDisabled()}
              onBack={handleBack}
              onNext={handleNext}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          )}
        </div>
      </main>

      <footer className="text-center py-6 px-4 border-t border-border">
        <p className="text-xs text-muted-foreground">
          © 2025 Academic Research Project. All rights reserved.
        </p>
        <p className="sinhala-text text-[10px] mt-1">
          © 2025 අධ්‍යයන පර්යේෂණ ව්‍යාපෘතිය. සියලුම හිමිකම් ඇවිරිණි.
        </p>
      </footer>
    </div>
  );
};

export default SurveyContainer;
