import React, { useState } from 'react';

export default function Sidebar({ items, activeItem, onSelect }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`bg-coolGray-900 border-r border-coolGray-700 ${collapsed ? 'w-16' : 'w-64'} transition-all duration-200`}>
      <div className="p-4 flex items-center justify-between border-b border-coolGray-800">
        {!collapsed && <span className="text-coolGray-200 font-semibold">Navigation</span>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-trueGray-400 hover:text-white p-1 rounded hover:bg-coolGray-800"
        >
          {collapsed ? '>' : '<'}
        </button>
      </div>
      <nav className="mt-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`w-full text-left px-4 py-2.5 flex items-center space-x-3 transition
              ${activeItem === item.id
                ? 'bg-blueGray-800 text-white border-l-2 border-brand-500'
                : 'text-coolGray-400 hover:bg-coolGray-800 hover:text-coolGray-200'
              }`}
          >
            <span className="text-lg">{item.icon}</span>
            {!collapsed && <span className="text-sm">{item.label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );
}
