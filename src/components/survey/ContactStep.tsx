import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Phone, User } from 'lucide-react';

interface ContactStepProps {
  email: string;
  phone: string;
  onEmailChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
}

const ContactStep = ({ email, phone, onEmailChange, onPhoneChange }: ContactStepProps) => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-accent/10 p-2 rounded-lg">
          <User className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
            Contact Information
          </h2>
          <p className="sinhala-text">සම්බන්ධතා තොරතුරු</p>
        </div>
      </div>

      <div className="bg-muted/50 rounded-lg p-4 mb-6">
        <p className="text-foreground text-sm md:text-base">
          Please provide your contact details. This helps us reach out for follow-up research if needed.
        </p>
        <p className="sinhala-text mt-1">
          කරුණාකර ඔබේ සම්බන්ධතා විස්තර සපයන්න. අවශ්‍ය නම් පසු විපරම් පර්යේෂණ සඳහා ඔබව සම්බන්ධ කර ගැනීමට මෙය උපකාරී වේ.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-foreground font-medium flex items-center gap-2">
            <Mail className="w-4 h-4 text-muted-foreground" />
            Email Address
            <span className="text-destructive">*</span>
          </Label>
          <p className="sinhala-text text-xs mb-2">ඊමේල් ලිපිනය</p>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            className="h-12 text-base"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-foreground font-medium flex items-center gap-2">
            <Phone className="w-4 h-4 text-muted-foreground" />
            Phone Number
            <span className="text-muted-foreground text-xs">(Optional)</span>
          </Label>
          <p className="sinhala-text text-xs mb-2">දුරකථන අංකය (විකල්ප)</p>
          <Input
            id="phone"
            type="tel"
            placeholder="+94 XX XXX XXXX"
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
            className="h-12 text-base"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactStep;
