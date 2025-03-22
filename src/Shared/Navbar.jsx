import { Link, NavLink } from 'react-router-dom';
import { RiMenuLine } from "react-icons/ri";

import logo from "../assets/logo/logo.png";
import userImg from "../assets/logo/user_info.png";
import { IoMdCheckboxOutline, IoMdSettings } from 'react-icons/io';
import { LuCalendarDays } from 'react-icons/lu';
import { FaBell, FaMoneyBill1, FaMoneyCheck } from 'react-icons/fa6';
import { FaRegFileAlt } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const Navbar = () => {

  const navBar = [
    { id: 1, icon: <IoMdCheckboxOutline />, title: 'Dashboard', link: '/' },
    { id: 2, icon: <LuCalendarDays />     , title: 'Calender', link: '/calender' },
    { id: 3, icon: <FaMoneyBill1 />      , title: 'Payroll', link: '/payroll' },
    { id: 4, icon: <FaMoneyCheck /> , title: 'Prepaid/Charge', link: '/services' },
    { id: 5, icon: <IoMdSettings />, title: 'Setting', link: '/portfolio' },
    { id: 5, icon: <FaRegFileAlt />, title: 'Portfolio', link: '/portfolio' },
  ];
  
  return (
    <div className=' fixed top-0 left-0 w-full z-50 bg-[#2B3251] shadow-md'>
      <div className="flex w-full items-center h-10 py-0.5 px-4 shadow-sm ">
        <div className="navbar-start w-[10%] flex gap-2 justify-between">
          
        

          {/* Logo */}
          <div className='hidden md:block'>
            <Link to={"/"} title='DevDiary'>
              <img src={logo} className='h-8' alt="Logo" />
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden md:block lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center">
            {navBar.map((item) => (
              <li key={item.id} className='flex items-center gap-2'>
                <NavLink to={item.link} className="text-lg font-samibold border-r-[1px] border-gray-500 rounded-none">
                {item.icon}
                  {item.title}
                </NavLink>
              </li>
            ))}
            <li className='flex flex-row items-center justify-center text-2xl rounded-none px-2 py-1.5 '>
              <div className='flex items-center bg-[#0C374B]'>
              <div className='flex items-center '>
               <MdOutlineEmail />
               <div></div>
              </div>
              <div className='flex items-center '>
              <FaBell />
               <div></div>
              </div>
              </div>
            </li>


            
            
            
          </ul>
          {/* <div className='flex items-center  bg-[#12679B] '>
            <div className='flex flex-col items-center justify-center text-sm  px-2 py-1.5 '>
              <h2>Marchent:</h2>
              <p className='font-semibold'>Easify Software</p>
            </div>
            <div className='flex flex-col items-center justify-center text-sm px-2 py-1.5 overflow-hidden'>
            <h2>Login User:</h2>
            <p className='font-semibold'>Pmedia1</p>
            </div>
            <div className='flex flex-col items-center justify-center text-sm px-2 py-1.5 '>
            <h2>Role:</h2>
            <p className='font-semibold'>CRM VIDEOS</p>
            </div>

            </div> */}

            <ul className='flex items-center gap-[2px]'>
              <li className='flex flex-col text-sm px-2 bg-[#12679B]'>
                <h2>Marchent:</h2>
                <p className='font-semibold'>Easify Software</p>
              </li>

              <li className='flex flex-col text-sm px-2 bg-[#12679B]'>
              <h2>Login User:</h2>
              <p className='font-semibold'>Pmedia1</p>
              </li>

              <li className='flex flex-col text-sm px-2 bg-[#12679B]'>
              <h2>Role:</h2>
              <p className='font-semibold'>CRM VIDEOS</p>
              </li>
            </ul>
        </div>

        {/* Profile Section */}
        <div className="navbar-end w-[15%] ml-auto justify-end ">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={userImg} alt="User Profile" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 shadow text-black">
              <li>
                <Link to={'/'} className="justify-between">Edit Profile</Link>
              </li>
              <li>
                <Link to={'/'} className="justify-between">Help Section</Link>
              </li>
              <li>
                <Link to={'/'} className="justify-between">Switch to Mordern Theme</Link>
              </li>

              <li className='border-t-[1px] border-gray-500'>
                <Link to={'/'} className="justify-between">Copy Affiliate Link</Link>
              </li>
              <li>
                <Link to={'/'} className="justify-between text-gray-800 font-bold">LogOut</Link>
              </li>


              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
