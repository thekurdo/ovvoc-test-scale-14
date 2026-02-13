import React from 'react';

export default function Footer({ links, copyright }) {
  return (
    <footer className="bg-warmGray-900 text-warmGray-400 border-t border-warmGray-700">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {links.map((section, i) => (
            <div key={i}>
              <h3 className="text-warmGray-200 font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <a href={item.href} className="text-trueGray-500 hover:text-warmGray-200 transition text-sm">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-warmGray-800 text-center text-trueGray-600 text-sm">
          {copyright}
        </div>
      </div>
    </footer>
  );
}
