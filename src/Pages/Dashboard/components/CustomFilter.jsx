import React, { useState } from 'react';

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
    { 
      options: ['Last 30 Days', 'Last 7 Days', 'Last Year', 'Current Month', 'Custom'],
    },
    { type: 'date', placeholder: 'from' },
    { type: 'date', placeholder: 'to' },
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
  const [activeFilter, setActiveFilter] = useState(null);
  const filters = ['DEALS', 'ISO', 'Secondary Founding', 'Pending Stips', 'Opportunities', 'Syndication', 'Defaults', 'Recent Leads', 'UnderWriting'];

  return (
    <div className='text-black'>
      <div className='flex justify-between items-center bg-white border-[1px] border-gray-600'>
        <div className='flex items-center gap-1'>
          {filters.map((item) => (
            <FilterButton key={item} label={item} isActive={activeFilter === item} onClick={() => setActiveFilter(item)} />
          ))}
        </div>

        <div className='bg-[#275B89] text-white'>
          <ul className='menu menu-horizontal'>
            <li>
              <details>
                <summary>Actions</summary>
                <ul className='p-2 text-black'>
                  <li><a>New Leads</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      <FilterForm isOpen={!!activeFilter} />
    </div>
  );
};

export default CustomFilter;
