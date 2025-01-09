import React from 'react';
import './App.css';
import Header from './components/Header'
import LogoIcon from './assets/icons/logo_icon.svg';
import TableSection from './components/TableSection';

function App() {
  return (
    <div className="min-h-screen bg-[#F2F6F8]">
      <Header />
      <main className="max-w-[1200px] mx-auto px-8 py-6 space-y-6">
        <div className="flex bg-white shadow-[0_3px_6px_rgba(0,0,0,0.1)] rounded-sm rounded-tl-lg p-4 justify-between">
          <div className="flex items-center gap-2">
            <img src={LogoIcon} alt="SharedTeams" className="h-8" />
            <h2 className="text-blue-500">{'{'}Manager{'}'} Activity Snapshot</h2>
          </div>
          <p className="bg-[#F9F9F9] px-10 py-6 rounded-4 text-gray-600 mt-4">
            You have clocked <span>hoursinthepastweek</span> in the past week and <span>hoursthismonth</span> this month.
          </p>
        </div>

        <TableSection 
          title="Estimate Needed"
          columns={['Estimate Needed', 'Member', '', 'Due']}
        />
        
        <TableSection 
          title="Managed Projects"
          columns={['Managed Projects', 'Member', 'Status', 'Last Update']}
        />
        
        <TableSection 
          title="My Projects"
          columns={['My Projects', 'Member', 'Status', 'Last Update']}
        />
      </main>
    </div>
  );
}

export default App;
