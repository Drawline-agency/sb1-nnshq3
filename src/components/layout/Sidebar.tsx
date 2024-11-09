import React from 'react';
import { navItems } from '@/config/navigation';

interface SidebarProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentSection, setCurrentSection }) => {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white border-r">
      <div className="h-16 flex items-center justify-center border-b">
        <span className="text-xl font-bold text-gray-800">Arrahma Beheer</span>
      </div>

      <nav className="p-4 space-y-1">
        {navItems.map(item => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentSection(item.id)}
              className={`
                w-full flex items-center px-4 py-2 text-sm rounded-lg
                transition-colors duration-150 ease-in-out
                ${currentSection === item.id
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50'
                }
              `}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.title}
            </button>
          );
        })}
      </nav>
    </div>
  );
};