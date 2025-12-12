import { Checkbox } from '@/components/ui/checkbox';
import { ShieldCheck } from 'lucide-react';

interface ConsentStepProps {
  consent: boolean;
  onConsentChange: (checked: boolean) => void;
}

const ConsentStep = ({ consent, onConsentChange }: ConsentStepProps) => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-accent/10 p-2 rounded-lg">
          <ShieldCheck className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
            Consent to Participate
          </h2>
          <p className="sinhala-text">සහභාගිත්වයට එකඟතාව</p>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-4 md:p-6 mb-6">
        <p className="text-foreground text-sm md:text-base leading-relaxed mb-3">
          This survey is conducted for academic research purposes to understand the current state and future potential of digitalization in Sri Lanka's supplementary education sector. Your responses will remain completely anonymous and will be used solely for research analysis.
        </p>
        <p className="sinhala-text leading-relaxed">
          මෙම සමීක්ෂණය ශ්‍රී ලංකාවේ පරිපූරක අධ්‍යාපන අංශයේ ඩිජිටල්කරණයේ වර්තමාන තත්ත්වය සහ අනාගත හැකියාව අවබෝධ කර ගැනීම සඳහා අධ්‍යයන පර්යේෂණ අරමුණු සඳහා පවත්වනු ලැබේ. ඔබේ ප්‍රතිචාර සම්පූර්ණයෙන්ම නිර්නාමික වන අතර පර්යේෂණ විශ්ලේෂණය සඳහා පමණක් භාවිතා කරනු ඇත.
        </p>
      </div>

      <div className="bg-card border border-border rounded-lg p-4 md:p-5">
        <label
          htmlFor="consent"
          className="flex items-start gap-4 cursor-pointer group"
        >
          <Checkbox
            id="consent"
            checked={consent}
            onCheckedChange={(checked) => onConsentChange(checked === true)}
            className="mt-1 h-5 w-5 border-2"
          />
          <div className="flex-1">
            <p className="text-foreground text-sm md:text-base font-medium group-hover:text-accent transition-colors">
              I agree to participate in this research survey and understand that my responses will be used for academic purposes only.
            </p>
            <p className="sinhala-text mt-1">
              මම මෙම පර්යේෂණ සමීක්ෂණයට සහභාගී වීමට එකඟ වන අතර මගේ ප්‍රතිචාර අධ්‍යයන අරමුණු සඳහා පමණක් භාවිතා වන බව තේරුම් ගනිමි.
            </p>
          </div>
        </label>
      </div>
    </div>
  );
};

export default ConsentStep;
