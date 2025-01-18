
import React from 'react'
import PageHeader from "./PageHeader";
import InfoSection from "./InfoSection";
import ImageSection from "./ImageSection";
import AboutProject from "./AboutProject";
import ConceptSection from "./ConceptSection";
import CompanyValues from "./CompanyValues";
import ChallengeSolution from "./ChallengeSolution";
import NavigationSection from "./NavigationSection";
import CommentSection from "./CommentSection";
import Breadcrumb from "./Breadcrumb";

const index = () => {
  return (
  
         
    <div>
    

    <div className="px-6 lg:px-24 py-12">
    <Breadcrumb />
      <PageHeader />
      <InfoSection />
      <ImageSection />
      <div className="space-y-12">
        <AboutProject />
        <ConceptSection />
        <CompanyValues />
        <ChallengeSolution />
      </div>
      <NavigationSection />
      <CommentSection />
    </div>
         
    
    </div>

   
   
  )
}

export default index


