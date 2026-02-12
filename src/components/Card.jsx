import React from 'react';

export default function Card({ title, description, status, tags, onClick }) {
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    pending: 'bg-warmGray-100 text-warmGray-800',
    error: 'bg-red-100 text-red-800',
    archived: 'bg-trueGray-100 text-trueGray-600',
  };

  return (
    <div
      onClick={onClick}
      className="bg-white border border-coolGray-200 rounded-lg p-5 hover:shadow-md transition cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-blueGray-900 font-semibold group-hover:text-brand-600 transition">
          {title}
        </h3>
        {status && (
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[status] || statusColors.pending}`}>
            {status}
          </span>
        )}
      </div>
      <p className="text-trueGray-600 text-sm mb-4 line-clamp-2">{description}</p>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag, i) => (
            <span key={i} className="bg-coolGray-100 text-coolGray-700 text-xs px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
