import { GraduationCap } from 'lucide-react';

const SurveyHeader = () => {
  return (
    <header className="bg-primary text-primary-foreground py-6 px-4 md:py-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-primary-foreground/10 p-3 rounded-full">
            <GraduationCap className="w-8 h-8 md:w-10 md:h-10" />
          </div>
        </div>
        <h1 className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold mb-2 leading-tight">
          Study on Digitalization of Supplementary Education in Sri Lanka
        </h1>
        <p className="text-primary-foreground/80 text-sm md:text-base font-sans mb-3">
          Research Project 2025
        </p>
        <div className="inline-block bg-primary-foreground/10 px-4 py-2 rounded-md">
          <p className="text-xs md:text-sm text-primary-foreground/90 font-sans">
            Anonymous Data Collection for Academic Purposes
          </p>
          <p className="text-xs text-primary-foreground/70 font-sans mt-1">
            අධ්‍යයන අරමුණු සඳහා නිර්නාමික දත්ත එකතු කිරීම
          </p>
        </div>
      </div>
    </header>
  );
};

export default SurveyHeader;
