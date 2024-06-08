import React, { useState } from 'react';
import { FormData } from '../types';
import { validateFormData } from '../utils/validator';
import TextAreaField from './common/TextAreaField';
import Button from './common/Button';

interface FormProps {
  onSubmit: (data: FormData) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({ companyInfo: '', productInfo: '', profileInfo: '' });
  const [errors, setErrors] = useState<{ [key in keyof FormData]?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xs w-full mx-auto p-4 space-y-4 bg-[#1f1f1f] shadow-md rounded-lg sm:max-w-md md:max-w-lg lg:max-w-xl flex flex-col justify-center items-center border border-gray-700 border-1">
      <TextAreaField
        id="companyInfo"
        name="companyInfo"
        label="Company Info"
        value={formData.companyInfo}
        onChange={handleChange}
        error={errors.companyInfo}
      />
      <TextAreaField
        id="productInfo"
        name="productInfo"
        label="Product Info"
        value={formData.productInfo}
        onChange={handleChange}
        error={errors.productInfo}
      />
      <TextAreaField
        id="profileInfo"
        name="profileInfo"
        label="Profile Info"
        value={formData.profileInfo}
        onChange={handleChange}
        error={errors.profileInfo}
      />
      <Button text="Generate Video" />
    </form>
  );
};

export default Form;
