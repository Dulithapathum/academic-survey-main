import { UserRole } from '@/types/survey';
import { GraduationCap, Building2, BookOpen, Users } from 'lucide-react';

interface RoleSelectorProps {
  selectedRole: UserRole | null;
  onRoleSelect: (role: UserRole) => void;
}

const roles: { value: UserRole; labelEn: string; labelSi: string; icon: React.ReactNode; descEn: string; descSi: string }[] = [
  {
    value: 'tutor',
    labelEn: 'Tutor',
    labelSi: 'ගුරුවරයා',
    icon: <GraduationCap className="w-6 h-6" />,
    descEn: 'Individual or small group teacher',
    descSi: 'තනි හෝ කුඩා කණ්ඩායම් ගුරුවරයා',
  },
  {
    value: 'institute',
    labelEn: 'Institute Owner',
    labelSi: 'ආයතන හිමිකරු',
    icon: <Building2 className="w-6 h-6" />,
    descEn: 'Mass class / Tuition center owner',
    descSi: 'සමූහ පන්ති / ටියුෂන් මධ්‍යස්ථාන හිමිකරු',
  },
  {
    value: 'student',
    labelEn: 'Student',
    labelSi: 'සිසුවා',
    icon: <BookOpen className="w-6 h-6" />,
    descEn: 'Currently attending tuition classes',
    descSi: 'දැනට ටියුෂන් පන්ති සඳහා සහභාගී වන',
  },
  {
    value: 'parent',
    labelEn: 'Parent',
    labelSi: 'දෙමාපිය',
    icon: <Users className="w-6 h-6" />,
    descEn: 'Parent of a student in tuition',
    descSi: 'ටියුෂන් යන සිසුවෙකුගේ දෙමාපිය',
  },
];

const RoleSelector = ({ selectedRole, onRoleSelect }: RoleSelectorProps) => {
  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-1">
          Select Your Role
        </h2>
        <p className="sinhala-text">ඔබේ භූමිකාව තෝරන්න</p>
      </div>

      <p className="text-muted-foreground text-sm md:text-base mb-6">
        Please select the role that best describes you. This will help us show you relevant questions.
        <span className="sinhala-text block mt-1">
          කරුණාකර ඔබව හොඳින්ම විස්තර කරන භූමිකාව තෝරන්න. අදාළ ප්‍රශ්න පෙන්වීමට මෙය උපකාරී වේ.
        </span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {roles.map((role) => (
          <button
            key={role.value}
            onClick={() => onRoleSelect(role.value)}
            className={`
              survey-option text-left p-4 md:p-5 flex items-start gap-4 transition-all duration-200
              ${selectedRole === role.value ? 'selected ring-2 ring-survey-option-selected-border' : ''}
            `}
          >
            <div className={`
              p-2.5 rounded-lg transition-colors
              ${selectedRole === role.value ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'}
            `}>
              {role.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground text-base md:text-lg">
                {role.labelEn}
              </h3>
              <p className="sinhala-text text-xs">{role.labelSi}</p>
              <p className="text-muted-foreground text-xs md:text-sm mt-1">
                {role.descEn}
              </p>
              <p className="sinhala-text text-[10px] md:text-xs">{role.descSi}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoleSelector;
