import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.svg';
import HelpIcon from '../assets/icons/help_icon.svg';
import UserIcon from '../assets/icons/user_icon.svg';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-[1200px] mx-auto px-8 py-3 flex items-center justify-between">
        <Link to="/" aria-label="Home">
          <img src={Logo} alt="SharedTeams" className="h-8" />
        </Link>
        
        <div className="flex items-center gap-4">
          <button className="bg-[#33B8E8] text-white px-4 py-2 rounded">
            Team Social Chat
          </button>
          <button className="bg-[#33B8E8] text-white px-4 py-2 rounded">
            Create a New Project
          </button>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Member Search"
              className="border rounded-md px-3 py-2 w-[200px]"
            />
          </div>
          <button className="text-[#33B8E8]">
            <img src={HelpIcon} alt="Help" className="h-8" />
          </button>
          <button className="text-[#33B8E8]">
            <img src={UserIcon} alt="User" className="h-10" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;