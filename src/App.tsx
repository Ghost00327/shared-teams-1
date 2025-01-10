import React from 'react';
import './App.css';
import Header from './components/Header'
import LogoIcon from './assets/icons/logo_icon.svg';
import TableSection from './components/TableSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDashboard from './pages/ProjectDashboard';

function App() {
  const estimateNeededData = [{
    projectName: 'Website Production',
    memberName: 'Business Name',
    status: '',
    due: 'ASAP',
    projectId: '1'
  }];

  const managedProjects = [{
    projectName: 'Recurring Project(managed)',
    memberName: 'Bussiness Name',
    status: 'Support Needed',
    due: '1 day ago',
    projectId: '2'
  },
  {
    projectName: 'Finite Project(managed)',
    memberName: 'Bussiness Name',
    status: 'Updae Needed',
    due: '5 day ago',
    projectId: '3'
  }];

  const MyProjects = [{
    projectName: 'Recurring Project(managed)',
    memberName: 'Bussiness Name',
    status: 'Specialized Support',
    due: '2 day ago',
    projectId: '4'

  },
  {
    projectName: 'Recurring Project(managed)',
    memberName: 'Cardon Studios',
    status: 'Update Needed',
    due: '5 day ago',
    projectId: '5'
  },
  {
    projectName: 'Finite Project(managed)',
    memberName: 'Occasion Studios',
    status: 'Updae Needed',
    due: '5 day ago',
    projectId: '6'
  }];

  return (
    <Router>
      <Routes>
        <Route path="/" element={
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
                data={estimateNeededData}
              />
              
              <TableSection 
                title="Managed Projects"
                columns={['Managed Projects', 'Member', 'Status', 'Last Update']}
                data={managedProjects}
              />
              
              <TableSection 
                title="My Projects"
                columns={['My Projects', 'Member', 'Status', 'Last Update']}
                data={MyProjects}
              />
            </main>
          </div>
        } />
        <Route path="/project/:id" element={<ProjectDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
