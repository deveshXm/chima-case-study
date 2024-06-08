import React from 'react';

interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, name, label, value, onChange, error }) => (
  <div className='w-full'>
    <label htmlFor={id} className="block text-sm font-medium text-gray-200">
      {label}
    </label>
    <input
      type="text"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={`mt-1 block text-black w-full p-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
      required
    />
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

export default InputField;
