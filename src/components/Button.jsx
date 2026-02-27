import React from 'react';

const variants = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800 disabled:bg-blueGray-300',
  secondary: 'bg-coolGray-100 text-coolGray-800 hover:bg-coolGray-200 active:bg-coolGray-300 disabled:bg-coolGray-50 disabled:text-coolGray-400',
  danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 disabled:bg-warmGray-300',
  ghost: 'text-trueGray-600 hover:bg-trueGray-100 active:bg-trueGray-200 disabled:text-trueGray-300',
};

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

export default function Button({ children, variant = 'primary', size = 'md', disabled, loading, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center font-medium rounded-lg transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2
        ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {children}
    </button>
  );
}
