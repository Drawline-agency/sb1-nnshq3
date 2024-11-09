import React, { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { DashboardOverview } from '@/components/dashboard/DashboardOverview';
import { MemberSection } from '@/components/dashboard/MemberSection';
import { FinanceSection } from '@/components/dashboard/FinanceSection';
import { ClassesSection } from '@/components/dashboard/ClassesSection';

const App = () => {
  const [currentSection, setCurrentSection] = useState('dashboard');

  const renderContent = () => {
    switch (currentSection) {
      case 'dashboard':
        return <DashboardOverview setCurrentSection={setCurrentSection} />;
      case 'members':
        return <MemberSection />;
      case 'finance':
        return <FinanceSection />;
      case 'classes':
        return <ClassesSection />;
      default:
        return <DashboardOverview setCurrentSection={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <div className="pl-64">
        <div className="p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default App;