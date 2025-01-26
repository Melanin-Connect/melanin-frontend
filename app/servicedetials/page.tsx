import React from 'react'
import Breadcrumb from "../components/common/Breadcrumb";
import Index from '../components/services/serviceDetials/index'

const page = () => {
  return (
    <section className="relative text-black bg-white overflow-hidden">
      <Breadcrumb title="AI-Powered Virtual Assistants & Chatbots" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
        <Index />
      </div>
    </section>
  )
}

export default page