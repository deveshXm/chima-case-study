import React from "react";

interface TextAreaFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({ id, name, label, value, placeholder, onChange, error }) => (
  <div className="w-full">
    <label htmlFor={id} className="block text-sm font-medium text-gray-200">
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`mt-1 block w-full text-black p-2 border ${
        error ? "border-red-500" : "border-gray-300"
      } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
      required
    />
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

export default TextAreaField;
