import React from 'react';
import ProfileCard from './ProfileCard';
import MemeberMessage from './MemberMessage';
const MessageSection: React.FC<{ memberType: number, memberName:string, MessageContent: string, MessageTime: string }> = ({ memberType, memberName, MessageContent, MessageTime }) => {
  // Determine background color based on member type
  return (
    <div className="flex">
        <div className='w-1/6'>
            <ProfileCard memberType={memberType} memberName={memberName} />
        </div>
        <br />
        <div className='flex w-5/6'>
            <MemeberMessage memberType={memberType} MessageTime={MessageTime} MessageContent={MessageContent} />
        </div>
    </div>
  );
};

export default MessageSection;


