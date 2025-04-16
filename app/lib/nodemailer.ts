// lib/api.ts
import axios from 'axios';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  subscribeToNewsletter: boolean;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

export const sendContactForm = async (formData: ContactFormData): Promise<ApiResponse> => {
  try {
    const response = await axios.post<ApiResponse>('https://melanin-mail-service.onrender.com/api/contact', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      // Handle structured API errors
      const errorMessage = error.response.data.error || 'Failed to submit form';
      throw new Error(errorMessage);
    }
    // Handle network or other errors
    throw new Error('Network error. Please check your connection and try again.');
  }
};

// Optional: You can add more API functions here as needed
export const validateEmailClient = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};