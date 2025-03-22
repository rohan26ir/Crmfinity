import React from 'react';
import DashCards from './components/DashCards';
import CustomFilter from './components/CustomFilter';
import DashboardData from './components/DashboardData';

const Dashboard = () => {
  return (
    <div>
      <div className='px-3 py-3 bg-[#EEEEEE]'>
        <DashCards></DashCards>
      </div>

      <div className='px-3 py-3 bg-[#EEEEEE]'>
        <CustomFilter></CustomFilter>
      </div>

      <div className='min-h-screen   bg-[#EEEEEE] '>
        <DashboardData></DashboardData>
      </div>
    </div>
  );
};

export default Dashboard;