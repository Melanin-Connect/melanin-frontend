import React from 'react'
import HeroSection from "./component/Herosection"
import StatsSection from './component/StatsSection'
import BusinessServices from './component/businessService'


const Index: React.FC = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <BusinessServices />
    </>
  )
}

export default Index