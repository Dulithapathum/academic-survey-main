import { Question } from '@/types/survey';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface QuestionRendererProps {
  question: Question;
  questionNumber: number;
  value: string | string[];
  onChange: (value: string | string[]) => void;
}

const QuestionRenderer = ({ question, questionNumber, value, onChange }: QuestionRendererProps) => {
  const handleCheckboxChange = (optionValue: string, checked: boolean) => {
    const currentValues = Array.isArray(value) ? value : [];
    if (checked) {
      onChange([...currentValues, optionValue]);
    } else {
      onChange(currentValues.filter((v) => v !== optionValue));
    }
  };

  return (
    <div className="animate-slide-in bg-card border border-border rounded-lg p-4 md:p-6">
      <div className="flex items-start gap-3 mb-4">
        <span className="bg-accent text-accent-foreground text-sm font-semibold px-2.5 py-1 rounded-md shrink-0">
          Q{questionNumber}
        </span>
        <div className="flex-1">
          <h3 className="text-foreground font-medium text-base md:text-lg leading-snug">
            {question.questionEn}
            {question.required && <span className="text-destructive ml-1">*</span>}
          </h3>
          <p className="sinhala-text mt-1">{question.questionSi}</p>
        </div>
      </div>

      {question.type === 'radio' && question.options && (
        <RadioGroup
          value={typeof value === 'string' ? value : ''}
          onValueChange={(newValue) => onChange(newValue)}
          className="space-y-2"
        >
          {question.options.map((option) => (
            <label
              key={option.value}
              htmlFor={`${question.id}-${option.value}`}
              className={`
                flex items-start gap-3 p-3 md:p-4 rounded-lg border cursor-pointer transition-all
                ${value === option.value 
                  ? 'bg-survey-option-selected border-survey-option-selected-border' 
                  : 'border-survey-option-border hover:bg-survey-option-hover hover:border-muted-foreground/30'
                }
              `}
            >
              <RadioGroupItem
                value={option.value}
                id={`${question.id}-${option.value}`}
                className="mt-0.5"
              />
              <div className="flex-1">
                <span className="text-foreground text-sm md:text-base">{option.labelEn}</span>
                <span className="sinhala-text block text-xs">{option.labelSi}</span>
              </div>
            </label>
          ))}
        </RadioGroup>
      )}

      {question.type === 'checkbox' && question.options && (
        <div className="space-y-2">
          {question.options.map((option) => {
            const currentValues = Array.isArray(value) ? value : [];
            const isChecked = currentValues.includes(option.value);
            
            return (
              <label
                key={option.value}
                htmlFor={`${question.id}-${option.value}`}
                className={`
                  flex items-start gap-3 p-3 md:p-4 rounded-lg border cursor-pointer transition-all
                  ${isChecked 
                    ? 'bg-survey-option-selected border-survey-option-selected-border' 
                    : 'border-survey-option-border hover:bg-survey-option-hover hover:border-muted-foreground/30'
                  }
                `}
              >
                <Checkbox
                  id={`${question.id}-${option.value}`}
                  checked={isChecked}
                  onCheckedChange={(checked) => handleCheckboxChange(option.value, checked === true)}
                  className="mt-0.5"
                />
                <div className="flex-1">
                  <span className="text-foreground text-sm md:text-base">{option.labelEn}</span>
                  <span className="sinhala-text block text-xs">{option.labelSi}</span>
                </div>
              </label>
            );
          })}
        </div>
      )}

      {question.type === 'textarea' && (
        <div className="space-y-2">
          <Textarea
            id={question.id}
            placeholder="Type your answer here... / ඔබේ පිළිතුර මෙහි ටයිප් කරන්න..."
            value={typeof value === 'string' ? value : ''}
            onChange={(e) => onChange(e.target.value)}
            className="min-h-[120px] text-base resize-none"
          />
          <p className="text-muted-foreground text-xs">
            Optional - Please share your thoughts in English or Sinhala
            <span className="sinhala-text block">විකල්ප - කරුණාකර ඔබේ අදහස් ඉංග්‍රීසි හෝ සිංහල භාෂාවෙන් බෙදාගන්න</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default QuestionRenderer;
