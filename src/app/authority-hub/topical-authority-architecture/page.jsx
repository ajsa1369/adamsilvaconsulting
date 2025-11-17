import React from 'react'
import TopicalAuthorityHero from './sections/TopicalAuthorityHero'
import TopicalAuthorityTableOfContent from './sections/TopicalAuthorityTableOfContent'
import TopicalAuthorityIntroduction from './sections/TopicalAuthorityIntroduction'
import TopicalAuthorityStrategies from './sections/TopicalAuthorityStrategies'
import TopicalAuthorityPillars from './sections/TopicalAuthorityPillars'
import TopicalAuthorityGuideline from './sections/TopicalAuthorityGuideline'
import TopicalAuthorityCTA from './sections/TopicalAuthorityCTA'

const page = () => {
  return (
    <main>
      <TopicalAuthorityHero/>
      <TopicalAuthorityTableOfContent/>
      <TopicalAuthorityIntroduction/>
      <TopicalAuthorityStrategies/>
      <TopicalAuthorityPillars/>
      <TopicalAuthorityGuideline/>
      <TopicalAuthorityCTA/>

    </main>
  )
}

export default page