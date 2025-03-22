import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const FilterButton = ({ label, isActive, onClick }) => (
  <div
    className={`px-4 py-2 cursor-pointer ${isActive ? 'bg-[#0067AC] text-white' : 'bg-gradient-to-t from-[#ACDFFF] to-white'}`}
    onClick={onClick}
  >
    {label}
  </div>
);

const FilterInput = ({ options, type, isCustomDate, placeholder, isDisabled }) => (
  <div>
    {isCustomDate ? (
      <div className='flex gap-2'>
        <input type='date' className='w-full p-2 border' placeholder='From (mm/dd/yyyy)' disabled={isDisabled} />
        <input type='date' className='w-full p-2 border' placeholder='To (mm/dd/yyyy)' disabled={isDisabled} />
      </div>
    ) : options ? (
      <select className='w-full p-2 border'>
        {options.map(option => <option key={option}>{option}</option>)}
      </select>
    ) : (
      <input type={type} className='w-full p-2 border' placeholder={placeholder} />
    )}
  </div>
);

const FilterForm = ({ isOpen }) => {
  if (!isOpen) return null;

  const filterFields = [
    { options: ['Filtered by Created', 'Filtered by Modified', 'Filtered by Lead Status'] },
    { options: ['Last 30 Days', 'Last 7 Days', 'Last Year', 'Current Month', 'Custom'] },
    { type: 'number', placeholder: 'from' },
    { type: 'number', placeholder: 'to' },
    { type: 'text', placeholder: 'First Name' },
    { type: 'text', placeholder: 'Last Name' },
    { type: 'email', placeholder: 'Email' },
    { options: ['Yes', 'No'] },
    { type: 'number', placeholder: 'ID' },
    { type: 'text', placeholder: 'Company Name' },
    { options: ['API In', 'API Out', 'Approve', 'Contract', 'New Lead', 'Planning', 'Submitted'] },
    { options: ['No Sale', 'Sale'] },
    { options: ['Select All', 'Performance Media', 'Test Test'] },
    { options: ['Select All', '1234', 'AD4567', 'XYZZY'] },
    { options: [] },
    { options: ['Hot', 'Warm', 'Cold'] },
    { type: 'number', placeholder: 'Phone Number' },
    { type: 'text', placeholder: 'Lead Source' }
  ];

  return (
    <div className='p-4 bg-gray-100 border border-gray-400'>
      <div className='grid grid-cols-6 gap-4'>
        {filterFields.map((field, index) => (
          <FilterInput key={index} {...field} />
        ))}
      </div>
    </div>
  );
};

const CustomFilter = () => {
  const filters = ['DEALS', 'ISO', 'Secondary Founding', 'Pending Stips', 'Opportunities', 'UnderWriting', 'Syndication', 'Defaults', 'Recent Leads'];

  const [activeFilter, setActiveFilter] = useState('DEALS'); // Default to "DEALS"
  const [isFilterVisible, setIsFilterVisible] = useState(true); // Default to visible

  const toggleHide = () => {
    setIsFilterVisible(prev => !prev);
  };

  return (
    <div className='text-black'>
      <div className='flex justify-between items-center bg-white border-[1px] border-gray-600 h-11 '>
        <div className='flex items-center gap-1'>
          {filters.map((item) => (
            <FilterButton key={item} label={item} isActive={activeFilter === item} onClick={() => setActiveFilter(item)} />
          ))}
        </div>

        {/* Toggle Button */}
        <div onClick={toggleHide} className='flex items-end justify-end relative top-0 left-6 cursor-pointer'>
          <div className='bg-blue-600 h-10 w-10 flex items-center justify-center rounded-t-3xl'>
            <FaSearch className='text-white' />
          </div>
        </div>

        <div className=' text-white'>
          <ul className='menu menu-horizontal h-10'>
            <li>
              <details>
                <summary className='hover:bg-blue-600 bg-blue-600 flex items-center justify-center bottom-1 relative'>Actions</summary>
                <ul className='p-0.5 text-black relative top-4 right-0  w-44'>
                  <li><a>New Leads</a></li>
                  <li><a>Reassign Leads</a></li>
                  <li><a>Reassign Deactive Users Leads</a></li>
                  <li><a>Reassign Leads Status</a></li>
                  <li><a>Reassign Leads Sourch/Campaign</a></li>
                  <li><a>Status Update</a></li>
                  <li><a>ISO Email Markating</a></li>
                  <li><a>Email Markating</a></li>
                  <li><a>SMS Markating</a></li>
                  <li><a>Voicemail Markating</a></li>
                  <li><a>Recycale campaign</a></li>
                  <li><a>Import Lead</a></li>
                  <li><a>Delete Lead</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      {/* Filter Section Toggle */}
      {isFilterVisible && <FilterForm isOpen={!!activeFilter} />}
    </div>
  );
};

export default CustomFilter;
