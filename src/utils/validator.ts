import { FormData } from '../types';

interface ValidationErrors {
  companyInfo?: string;
  productInfo?: string;
  profileInfo?: string;
}

export const validateFormData = (data: FormData): ValidationErrors => {
  const errors: ValidationErrors = {};
  if (!data.companyInfo.trim()) {
    errors.companyInfo = 'Company Info is required';
  }
  if (!data.productInfo.trim()) {
    errors.productInfo = 'Product Info is required';
  }
  if (!data.profileInfo.trim()) {
    errors.profileInfo = 'Profile Info is required';
  }
  return errors;
};
