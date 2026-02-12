import React from 'react';

export default function Header({ title, user }) {
  return (
    <header className="bg-blueGray-900 text-white border-b border-coolGray-700">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-warmGray-50">{title}</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="/dashboard" className="text-coolGray-300 hover:text-white transition">Dashboard</a>
          <a href="/projects" className="text-coolGray-300 hover:text-white transition">Projects</a>
          <a href="/settings" className="text-coolGray-300 hover:text-white transition">Settings</a>
        </nav>
        {user && (
          <div className="flex items-center space-x-3">
            <span className="text-trueGray-400 text-sm">{user.name}</span>
            <img src={user.avatar} alt="" className="w-8 h-8 rounded-full ring-2 ring-blueGray-600" />
          </div>
        )}
      </div>
    </header>
  );
}
