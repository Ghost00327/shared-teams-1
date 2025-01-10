import React from 'react';
import ProfileImage from '../assets/icons/profile_image.svg'

const ProfileCard: React.FC<{ memberType: number, memberName:string }> = ({ memberType, memberName }) => {
  // Determine background color based on member type
  const bgColor = memberType === 1 ? '#FCEFEA' : memberType === 2 ? '#E3F7FF' : 'white';
  const colorClass = memberType === 1 ? 'bg-custom-orange' : memberType === 2 ? 'bg-second-blue' : 'bg-gray-400'; 
  return (
    <div className="max-w-xs mx-auto px-6 pt-6 shadow-md text-center relative" style={{ backgroundColor: bgColor }}>
        <div className={`absolute top-0 left-0 w-full h-1 ${colorClass}`}></div>
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
        <img
            src={ProfileImage}
            alt="Profile"
            className="w-20 h-20 rounded-full"
        />
        </div>

        {/* User Role */}
        <h2 className="text-lg font-semibold text-gray-700 mb-2">{memberName}</h2>

        {/* Edit Button */}
        <button className="bg-second-blue text-white px-4 rounded-sm shadow-md hover:bg-blue-600 transition mt-4 mb-16">
        Edit
        </button>

        {/* Footer Button */}
        <div className="w-[90%] float-right bg-[#26a9e0] pl-6 rounded-tl-2xl absolute bottom-0 right-0">
        <p className="text-white">VIEW MY PROFILE</p>
        </div>
    </div>
  );
};

export default ProfileCard;
