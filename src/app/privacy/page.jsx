import React from 'react'
import PrivacyHero from './sections/PrivacyHero'
import Policy from './sections/Policy'
import GDPRRights from './sections/GDPRRights'
import PrivacyPolicyFooters from './sections/PrivacyPolicyFooters'

const page = () => {
  return (
    <main className="mb-20">
      <PrivacyHero/>
      <Policy/>
      <GDPRRights/>
      <PrivacyPolicyFooters/>
    </main>
  )
}

export default page