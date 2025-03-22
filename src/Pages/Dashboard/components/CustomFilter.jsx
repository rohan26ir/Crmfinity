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

const FilterForm = ({ isOpen, filterData, setFilterData }) => {
  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFilterData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className='p-4 bg-gray-100 border border-gray-400'>
      <div className='grid grid-cols-6 gap-4'>
        {/* Filter By */}
        <select
          className='w-full p-2 border'
          value={filterData.filterBy || ''}
          onChange={(e) => handleChange('filterBy', e.target.value)}
        >
          <option value='Filtered by Created'>Filtered by Created</option>
          <option value='Filtered by Modified'>Filtered by Modified</option>
          <option value='Filtered by Lead Status'>Filtered by Lead Status</option>
        </select>

        {/* Date Range */}
        <select
          className='w-full p-2 border'
          value={filterData.dateRange || ''}
          onChange={(e) => {
            handleChange('dateRange', e.target.value);
            // Reset customDate when not Custom
            if (e.target.value !== 'Custom') {
              handleChange('customDate', { from: '', to: '' });
            }
          }}
        >
          <option value='Last 30 Days'>Last 30 Days</option>
          <option value='Last 7 Days'>Last 7 Days</option>
          <option value='Last Year'>Last Year</option>
          <option value='Current Month'>Current Month</option>
          <option value='Custom'>Custom</option>
        </select>

        {/* Custom Date (From and To) */}
        <div className=''>
          <input
            type='date'
            className='w-full p-2 border'
            placeholder='From (mm/dd/yyyy)'
            disabled={filterData.dateRange !== 'Custom'}
            value={filterData.customDate?.from || ''}
            onChange={(e) => handleChange('customDate', { ...filterData.customDate, from: e.target.value })}
          />
          </div>
          <div className=''>
          <input
            type='date'
            className='w-full p-2 border'
            placeholder='To (mm/dd/yyyy)'
            disabled={filterData.dateRange !== 'Custom'}
            value={filterData.customDate?.to || ''}
            onChange={(e) => handleChange('customDate', { ...filterData.customDate, to: e.target.value })}
          />
        </div>

        {/* First Name */}
        <input
          type='text'
          className='w-full p-2 border'
          placeholder='First Name'
          value={filterData.firstName || ''}
          onChange={(e) => handleChange('firstName', e.target.value)}
        />

        {/* Last Name */}
        <input
          type='text'
          className='w-full p-2 border'
          placeholder='Last Name'
          value={filterData.lastName || ''}
          onChange={(e) => handleChange('lastName', e.target.value)}
        />

        {/* Email */}
        <input
          type='email'
          className='w-full p-2 border'
          placeholder='Email'
          value={filterData.email || ''}
          onChange={(e) => handleChange('email', e.target.value)}
        />

        {/* Exclusive Lead */}
        <select
          className='w-full p-2 border'
          value={filterData.exclusiveLead || ''}
          onChange={(e) => handleChange('exclusiveLead', e.target.value)}
        >
          <option value='Select Exclusive Lead'>Select Exclusive Lead</option>
          <option value='Yes'>Yes</option>
          <option value='No'>No</option>
        </select>

        {/* ID */}
        <input
          type='number'
          className='w-full p-2 border'
          placeholder='ID'
          value={filterData.idFrom || ''}
          onChange={(e) => handleChange('idFrom', e.target.value)}
        />

        {/* ID To
        <input
          type='number'
          className='w-full p-2 border'
          placeholder='ID To'
          value={filterData.idTo || ''}
          onChange={(e) => handleChange('idTo', e.target.value)}
        /> */}

        

        

        

        {/* Company Name */}
        <input
          type='text'
          className='w-full p-2 border'
          placeholder='Company Name'
          value={filterData.companyName || ''}
          onChange={(e) => handleChange('companyName', e.target.value)}
        />

        {/* Status */}
        <select
          className='w-full p-2 border'
          placeholder='Select Lead Status'
          value={filterData.status || ''}
          onChange={(e) => handleChange('status', e.target.value)}
        >
          <option value='API In'>API In</option>
          <option value='API Out'>API Out</option>
          <option value='Approve'>Approve</option>
          <option value='Contract'>Contract</option>
          <option value='New Lead'>New Lead</option>
          <option value='Planning'>Planning</option>
          <option value='Submitted'>Submitted</option>
        </select>

        {/* Disposition */}
        <select
          className='w-full p-2 border'
          value={filterData.disposition || ''}
          onChange={(e) => handleChange('disposition', e.target.value)}
        >
          <option value='Select Disposition'>Select Disposition</option>
          <option value='No Sale'>No Sale</option>
          <option value='Sale'>Sale</option>
        </select>

        {/* User */}
        <select
          className='w-full p-2 border'
          value={filterData.user || ''}
          onChange={(e) => handleChange('user', e.target.value)}
        >
          <option value='Select User'>Select User</option>
          <option value='Select All'>Select All</option>
          <option value='Performance Media'>Performance Media</option>
          <option value='Test Test'>Test Test</option>
        </select>

        {/* Select Campaign */}
        <select
          className='w-full p-2 border'
          value={filterData.compaing || ''}
          onChange={(e) => handleChange('user', e.target.value)}
        >
          <option value='Select User'>Select Campaign</option>
        </select>

        {/* Select Closer */}
        <select
          className='w-full p-2 border'
          value={filterData.Closer || ''}
          onChange={(e) => handleChange('user', e.target.value)}
        >
          <option value='Select User'>Select Closer</option>
        </select>

        {/* Lead Tag */}
        <select
          className='w-full p-2 border'
          value={filterData.leadTag || ''}
          onChange={(e) => handleChange('leadTag', e.target.value)}
        >
          <option value='Select Lead Tag'>Select Lead Tag</option>
          <option value='Hot'>Hot</option>
          <option value='Warm'>Warm</option>
          <option value='Cold'>Cold</option>
        </select>

        {/* Phone Number */}
        <input
          type='number'
          className='w-full p-2 border'
          placeholder='Phone Number'
          value={filterData.phone || ''}
          onChange={(e) => handleChange('phone', e.target.value)}
        />

        {/* Lead Source */}
        <input
          type='text'
          className='w-full p-2 border'
          placeholder='Lead Source'
          value={filterData.source || ''}
          onChange={(e) => handleChange('source', e.target.value)}
        />
      </div>
    </div>
  );
};

const CustomFilter = ({ setActiveFilter, setFilterFormData }) => {
  const filters = ['DEALS', 'ISO', 'Secondary Founding', 'Pending Stips', 'Opportunities', 'UnderWriting', 'Syndication', 'Defaults', 'Recent Leads'];
  const [activeFilterLocal, setActiveFilterLocal] = useState('DEALS');
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [filterData, setFilterData] = useState({});

  const handleFilterClick = (filter) => {
    setActiveFilterLocal(filter);
    setActiveFilter(filter); // Pass to parent
  };

  const toggleHide = () => {
    setIsFilterVisible(prev => !prev);
  };

  // Sync filter data with parent
  const updateFilterData = (newFilterData) => {
    setFilterData(newFilterData);
    setFilterFormData(newFilterData);
  };

  return (
    <div className='text-black'>
      <div className='flex justify-between items-center bg-white border-[1px] border-gray-600 h-11'>
        <div className='flex items-center gap-1'>
          {filters.map((item) => (
            <FilterButton
              key={item}
              label={item}
              isActive={activeFilterLocal === item}
              onClick={() => handleFilterClick(item)}
            />
          ))}
        </div>

        <div onClick={toggleHide} className='flex items-end justify-end relative top-0 left-6 cursor-pointer'>
          <div className='bg-blue-600 h-10 w-10 flex items-center justify-center rounded-t-3xl'>
            <FaSearch className='text-white' />
          </div>
        </div>

        <div className='text-white'>
          <ul className='menu menu-horizontal h-10'>
            <li>
              <details>
                <summary className='hover:bg-blue-600 bg-blue-600 flex items-center justify-center bottom-1 relative'>Actions</summary>
                <ul className='p-0.5 text-black relative top-4 right-0 w-44'>
                  <li><a>New Leads</a></li>
                  <li><a>Reassign Leads</a></li>
                  <li><a>Reassign Deactive Users Leads</a></li>
                  <li><a>Reassign Leads Status</a></li>
                  <li><a>Reassign Leads Source/Campaign</a></li>
                  <li><a>Status Update</a></li>
                  <li><a>ISO Email Marketing</a></li>
                  <li><a>Email Marketing</a></li>
                  <li><a>SMS Marketing</a></li>
                  <li><a>Voicemail Marketing</a></li>
                  <li><a>Recycle Campaign</a></li>
                  <li><a>Import Lead</a></li>
                  <li><a>Delete Lead</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      {isFilterVisible && (
        <FilterForm
          isOpen={!!activeFilterLocal}
          filterData={filterData}
          setFilterData={updateFilterData}
        />
      )}
    </div>
  );
};

export default CustomFilter;