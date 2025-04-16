'use client'

import React, { useState } from 'react';
import { sendContactForm } from '../../lib/nodemailer';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
  subscribeToNewsletter: boolean;
}


const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
    subscribeToNewsletter: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      subscribeToNewsletter: e.target.checked,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await sendContactForm(formData);
      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
      });
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        message: '',
        subscribeToNewsletter: false,
      });
    } catch (error) {
      let errorMessage = 'Something went wrong. Please try again later.';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      setSubmitStatus({
        success: false,
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg border border-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Get In Touch</h2>
      
      {submitStatus && (
        <div 
          className={`p-4 mb-6 rounded-md ${
            submitStatus.success 
              ? 'bg-green-50 text-green-700 border border-green-200' 
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {submitStatus.message}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="How can we help you?"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="subscribeToNewsletter"
            name="subscribeToNewsletter"
            checked={formData.subscribeToNewsletter}
            onChange={handleCheckboxChange}
            className="h-5 w-5 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
          />
          <label htmlFor="subscribeToNewsletter" className="ml-3 block text-sm text-gray-700">
            Keep me updated with news and promotions
          </label>
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors disabled:bg-orange-300 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;