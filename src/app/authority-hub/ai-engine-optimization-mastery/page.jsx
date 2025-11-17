import AICoreStrategies from "./sections/AICoreStrategies";
import AICTA from "./sections/AICTA";
import AIEngineHero from "./sections/AIEngineHero";
import AIGuideline from "./sections/AIGuideline";
import AIIntroduction from "./sections/AIIntroduction";
import AIPillars from "./sections/AIPillars";
import AITableOfContent from "./sections/AITableOfContent";

const Page = () => {


  return (
    <main>
     <AIEngineHero/>
     <AITableOfContent/>
     <AIIntroduction/>
     <AIPillars/>
    <AICoreStrategies/>
    <AIGuideline/>
    <AICTA/>
    </main>
  );
};

export default Page;
