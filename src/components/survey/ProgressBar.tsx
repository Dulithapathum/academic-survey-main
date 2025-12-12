import { Check } from 'lucide-react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  steps: { labelEn: string; labelSi: string }[];
}

const ProgressBar = ({ currentStep, totalSteps, steps }: ProgressBarProps) => {
  const progress = ((currentStep) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full px-4 py-4 bg-card border-b border-border">
      <div className="max-w-3xl mx-auto">
        {/* Progress bar */}
        <div className="progress-bar mb-4">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Step indicators */}
        <div className="flex justify-between items-start">
          {steps.map((step, index) => {
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep;
            
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center flex-1"
              >
                <div
                  className={`
                    w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-medium transition-all duration-300
                    ${isCompleted 
                      ? 'bg-survey-step-active text-primary-foreground' 
                      : isCurrent 
                        ? 'bg-survey-step-active text-primary-foreground ring-2 ring-survey-step-active ring-offset-2' 
                        : 'bg-survey-progress-bg text-survey-step-inactive'
                    }
                  `}
                >
                  {isCompleted ? <Check className="w-4 h-4" /> : index + 1}
                </div>
                <span className={`
                  mt-2 text-[10px] md:text-xs font-sans transition-colors hidden sm:block
                  ${isCurrent ? 'text-survey-step-active font-medium' : 'text-survey-step-inactive'}
                `}>
                  {step.labelEn}
                </span>
                <span className={`
                  text-[9px] md:text-[10px] text-survey-sinhala hidden sm:block
                  ${isCurrent ? 'opacity-100' : 'opacity-70'}
                `}>
                  {step.labelSi}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
