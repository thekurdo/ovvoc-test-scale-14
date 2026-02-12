import React from 'react';

export default function Table({ columns, data, onRowClick, emptyMessage = 'No data available' }) {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white border border-coolGray-200 rounded-lg p-8 text-center">
        <p className="text-trueGray-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-coolGray-200 rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-warmGray-50 border-b border-coolGray-200">
            {columns.map((col) => (
              <th
                key={col.key}
                className="px-4 py-3 text-left text-xs font-semibold text-blueGray-600 uppercase tracking-wider"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-coolGray-100">
          {data.map((row, i) => (
            <tr
              key={row.id || i}
              onClick={() => onRowClick?.(row)}
              className={`transition ${onRowClick ? 'cursor-pointer hover:bg-warmGray-50' : ''}`}
            >
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-sm text-trueGray-700">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
