import React, { useEffect, useRef } from 'react';

export default function Modal({ isOpen, onClose, title, children, footer, size = 'md' }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      className="fixed inset-0 z-50 flex items-center justify-center bg-blueGray-900 bg-opacity-60"
    >
      <div className={`bg-white rounded-xl shadow-xl ${sizeClasses[size]} w-full mx-4`}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-coolGray-200">
          <h2 className="text-lg font-semibold text-blueGray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-trueGray-400 hover:text-trueGray-600 transition p-1 rounded hover:bg-warmGray-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-4 text-trueGray-700">{children}</div>
        {footer && (
          <div className="flex items-center justify-end space-x-3 px-6 py-4 border-t border-coolGray-200 bg-warmGray-50 rounded-b-xl">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
