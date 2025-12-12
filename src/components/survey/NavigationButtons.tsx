import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Send } from 'lucide-react';

interface NavigationButtonsProps {
  showBack: boolean;
  showNext: boolean;
  showSubmit: boolean;
  isNextDisabled: boolean;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
}

const NavigationButtons = ({
  showBack,
  showNext,
  showSubmit,
  isNextDisabled,
  onBack,
  onNext,
  onSubmit,
  isSubmitting = false,
}: NavigationButtonsProps) => {
  return (
    <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
      <div>
        {showBack && (
          <Button
            variant="outline"
            onClick={onBack}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
            <span className="sm:hidden">ආපසු</span>
          </Button>
        )}
      </div>

      <div>
        {showNext && (
          <Button
            onClick={onNext}
            disabled={isNextDisabled}
            className="gap-2 bg-primary hover:bg-primary/90"
          >
            <span className="hidden sm:inline">Continue</span>
            <span className="sm:hidden">ඉදිරියට</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        )}

        {showSubmit && (
          <Button
            onClick={onSubmit}
            disabled={isNextDisabled || isSubmitting}
            className="gap-2 bg-accent hover:bg-accent/90"
          >
            {isSubmitting ? (
              <>
                <span className="animate-pulse">Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span className="hidden sm:inline">Submit Survey</span>
                <span className="sm:hidden">ඉදිරිපත් කරන්න</span>
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default NavigationButtons;
