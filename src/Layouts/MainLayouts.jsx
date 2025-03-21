import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
  return (
    <div className='text-white'>

      <header>
        <div className='bg-[#2B3251]'>
           <Navbar></Navbar>
        </div>
      </header>

      {/* Main */}
      <main className=''>
        <Outlet></Outlet>
      </main>

      {/* Footer */}
      <footer>
      </footer>

    </div>
  );
};

export default MainLayouts;