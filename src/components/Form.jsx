import React from 'react';

function Input({ label, name, type = 'text', placeholder, error, required, value, onChange }) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-blueGray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-lg text-sm transition
          ${error
            ? 'border-red-400 focus:ring-red-500 focus:border-red-500'
            : 'border-coolGray-300 focus:ring-brand-500 focus:border-brand-500'
          }
          bg-white text-blueGray-900 placeholder-trueGray-400
          disabled:bg-warmGray-50 disabled:text-warmGray-500 disabled:cursor-not-allowed`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

function Select({ label, name, options, value, onChange, error }) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-blueGray-700 mb-1">{label}</label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 border rounded-lg text-sm bg-white text-blueGray-900
          ${error ? 'border-red-400' : 'border-coolGray-300 focus:ring-brand-500 focus:border-brand-500'}`}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}

export default function Form({ children, onSubmit, title }) {
  return (
    <form onSubmit={onSubmit} className="bg-white border border-coolGray-200 rounded-lg p-6">
      {title && <h2 className="text-lg font-semibold text-blueGray-900 mb-4">{title}</h2>}
      {children}
    </form>
  );
}

Form.Input = Input;
Form.Select = Select;
