import React from 'react'
import TechnicalFrameworkHero from './sections/TechnicalFrameworkHero'
import TechnicalFrameworkTableOfContent from './sections/TechnicalFrameworkTableOfContent'
import TechnicalFrameworkIntroduction from './sections/TechnicalFrameworkIntroduction'
import TechnicalFrameworkStrategies from './sections/TechnicalFrameworkStrategies'
import TechnicalFrameworkPillars from './sections/TechnicalFrameworkPillars'
import TechnicalFrameworkGuidelines from './sections/TechnicalFrameworkGuidelines'
import TechnicalFrameworkCTA from './sections/TechnicalFrameworkCTA'


const page = () => {
  return (
    <main>
      <TechnicalFrameworkHero/>
      <TechnicalFrameworkTableOfContent/>
      <TechnicalFrameworkIntroduction/>
      <TechnicalFrameworkStrategies/>
      <TechnicalFrameworkPillars/>
      <TechnicalFrameworkGuidelines/>
      <TechnicalFrameworkCTA/>
      

    </main>
  )
}

export default page