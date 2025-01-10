import React from 'react';

const MemeberMessage: React.FC<{ memberType: number, MessageContent: string, MessageTime: string }> = ({ memberType, MessageContent, MessageTime }) => {
  // Determine background color based on member type
  const bgColor = memberType === 1 ? '#FCEFEA' : memberType === 2 ? '#E3F7FF' : 'white';
  const colorClass = memberType === 1 ? 'bg-custom-orange' : memberType === 2 ? 'bg-second-blue' : 'bg-gray-400'; 
  return (
    <div className="w-full ml-4 pl-4 pt-6 shadow-md relative" style={{ backgroundColor: bgColor }}>
        <div className={`absolute top-0 left-0 w-full h-1 ${colorClass}`}></div>
        {/* Profile Image */}
        <p>{MessageTime}</p>
        <br />
        <p className="text-sm">{MessageContent}</p>
    </div>
  );
};

export default MemeberMessage;
