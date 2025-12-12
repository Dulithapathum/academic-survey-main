import { CheckCircle2, Heart } from 'lucide-react';

const ThankYouStep = () => {
  return (
    <div className="animate-fade-in text-center py-8 md:py-12">
      <div className="flex justify-center mb-6">
        <div className="bg-green-100 p-4 rounded-full">
          <CheckCircle2 className="w-12 h-12 md:w-16 md:h-16 text-green-600" />
        </div>
      </div>

      <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
        Thank You for Your Contribution!
      </h2>
      <p className="sinhala-text text-base md:text-lg mb-6">
        ඔබේ දායකත්වයට ස්තූතියි!
      </p>

      <div className="bg-muted/50 rounded-lg p-6 md:p-8 max-w-lg mx-auto mb-8">
        <p className="text-foreground text-sm md:text-base leading-relaxed mb-4">
          Your responses have been successfully recorded and will be used to improve the digitalization of supplementary education in Sri Lanka.
        </p>
        <p className="sinhala-text leading-relaxed">
          ඔබගේ ප්‍රතිචාර සාර්ථකව වාර්තා කර ඇති අතර ශ්‍රී ලංකාවේ පරිපූරක අධ්‍යාපනයේ ඩිජිටල්කරණය වැඩිදියුණු කිරීමට භාවිතා කරනු ඇත.
        </p>
      </div>

      <div className="flex items-center justify-center gap-2 text-muted-foreground">
        <Heart className="w-4 h-4 text-red-500" />
        <span className="text-sm">Research Project 2025</span>
      </div>

      <div className="mt-8 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground">
          This research is conducted in accordance with ethical guidelines for academic research.
        </p>
        <p className="sinhala-text text-[10px] mt-1">
          මෙම පර්යේෂණය අධ්‍යයන පර්යේෂණ සඳහා වන ආචාර ධර්ම මාර්ගෝපදේශවලට අනුකූලව පවත්වනු ලැබේ.
        </p>
      </div>
    </div>
  );
};

export default ThankYouStep;
