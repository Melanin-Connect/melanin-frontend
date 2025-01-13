import React from 'react'
import HeroSection from "./component/Herosection"
import StatsSection from './component/StatsSection'
import BusinessServices from './component/businessService'
import Projects from './component/projects'


const Index: React.FC = () => {

  

  return ( <>
      <HeroSection />
      <StatsSection />
      <BusinessServices />
      <Projects />
    
    </>
  )
}

export default Index