import React, { useState } from 'react';
import DashCards from './components/DashCards';
import CustomFilter from './components/CustomFilter';
import DashboardData from './components/DashboardData';

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState('DEALS'); // Default filter
  const [filterFormData, setFilterFormData] = useState({}); // Filter form inputs

  return (
    <div>
      <div className='px-3 py-3 bg-[#EEEEEE]'>
        <DashCards />
      </div>

      <div className='px-3 py-3 bg-[#EEEEEE]'>
        <CustomFilter 
          setActiveFilter={setActiveFilter} 
          setFilterFormData={setFilterFormData} 
        />
      </div>

      <div className='min-h-screen bg-[#EEEEEE]'>
        <DashboardData activeFilter={activeFilter} filterFormData={filterFormData} />
      </div>
    </div>
  );
};

export default Dashboard;