import React from 'react'
import AuthorityHero from './AuthorityHero'
import Framework from './Framework'
import Pillars from './Pillars'
import StrategicIntellegence from './StrategicIntellegence'
import StrategicFramework from './StrategicFramework'
import AuthorityCTA from './AuthorityCTA'

const page = () => {
  return (
    <main className='mb-20'>
      <AuthorityHero/>
      <Framework/>
      <Pillars/>
      <StrategicIntellegence/>
      <StrategicFramework/>
      <AuthorityCTA/>
    </main>
  )
}

export default page