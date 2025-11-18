import React from 'react'
import AIContentHero from './sections/AIContentHero'
import AIContentOperations from './sections/AIContentOperations'
import AIContentStrategies from './sections/AIContentStrategies'
import AIContentRoadmap from './sections/AIContentRoadmap'
import AIContentBusinessImpact from './sections/AIContentBusinessImpact'
import AIContentOptimization from './sections/AIContentOptimization'
import AIContentQualityAssurance from './sections/AIContentQualityAssurance'
import AIContentCTA from './sections/AIContentCTA'




const page = () => {
  return (
    <main>
      <AIContentHero/>
      <AIContentOperations/>
      <AIContentStrategies/>
      <AIContentRoadmap/>
      <AIContentBusinessImpact/>
      <AIContentOptimization/>
      <AIContentQualityAssurance/>
      <AIContentCTA/>
     
      

    </main>
  )
}

export default page