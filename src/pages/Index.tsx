import { Helmet } from 'react-helmet-async';
import SurveyContainer from '@/components/survey/SurveyContainer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Study on Digitalization of Supplementary Education in Sri Lanka | Research Survey 2025</title>
        <meta 
          name="description" 
          content="Participate in our academic research survey on the digitalization of supplementary education (tuition) in Sri Lanka. Anonymous data collection for academic purposes." 
        />
      </Helmet>
      <SurveyContainer />
    </>
  );
};

export default Index;
