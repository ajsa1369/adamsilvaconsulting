import React from 'react'
import MarketingAutomationHero from './sections/MarketingAutomationHero'
import MarketAutomationOperations from './sections/MarketAutomationOperations'
import MarketOperationsExcellenceFramework from './sections/MarketOperationsExcellenceFramework'
import MarketAutomationArchitecture from './sections/MarketAutomationArchitecture'
import MarketAutomationMethodology from './sections/MarketAutomationMethodology'
import MarketAutomationImpact from './sections/MarketAutomationImpact'
import MarketAutomationCapabilities from './sections/MarketAutomationCapabilities'
import MarketOperationsAdvantages from './sections/MarketOperationsAdvantages'
import MarketAutomationContentCTA from './sections/MarketAutomationCTA'


const page = () => {
  return (
    <main>
      <MarketingAutomationHero/>
      <MarketAutomationOperations/>
      <MarketOperationsExcellenceFramework/>
      <MarketAutomationArchitecture/>
      <MarketAutomationMethodology/>
      <MarketAutomationImpact/>
      <MarketAutomationCapabilities/>
      <MarketOperationsAdvantages/>
      <MarketAutomationContentCTA/>

    </main>
  )
}

export default page