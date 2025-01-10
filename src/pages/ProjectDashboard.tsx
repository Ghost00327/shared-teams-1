import React, { useState, useRef } from 'react';
import Header from "../components/Header";
import Badge from "../components/Badge";
import RichTextEditor from '../components/RichTextEditor';
import ProfileIcon from '../assets/icons/profile_icon.svg';
import ToolsIcon from '../assets/icons/tools_icon.svg';
import FilesIcon from '../assets/icons/files_icon.svg';
import NotesIcon from '../assets/icons/notes_icon.svg';
import ErrorIcon from '../assets/icons/error_ic.svg';
import ProfileImage from '../assets/icons/profile_image.svg'
import ProfileCard from '../components/ProfileCard';
import MemeberMessage from '../components/MemberMessage';
import MessageSection from '../components/MessageSection';

function ProjectDashboard() {
    const [isVisible, setIsVisible] = useState(false);
    const [content, setContent] = useState<string>('');
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const editorRef = useRef<any>(null);

    const MessageData = [{
        type: 1,
        memeberName: 'Team Member',
        content: 'Manager update.',
        time: '12:45',
     },
     {
        type: 2,
        memeberName: 'Team Member',
        content: 'Manager update.',
        time: '12:45',
     },
     {
        type: 3,
        memeberName: 'Team Member',
        content: 'Manager update.',
        time: '12:45',
     }
    ]
    return (
        <div className="min-h-screen bg-[#F2F6F8]">
            <Header />
            <main className="max-w-[1200px] mx-auto px-8 py-6 space-y-6">
                <div className="bg-white shadow-[0_3px_6px_rgba(0,0,0,0.1)] p-8">
                    <div className="flex rounded-md rounded-tl-lg justify-between">
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="text-primary-blue font-bold">Finite Project (managed) - #657042</h2>
                            </div>
                            <p className="text-primary-blue">Bussiness Name</p>
                            <div className="px-3 flex items-center justify-center py-1 rounded-full text-sm bg-[#F56732]/10 text-[#F56732]">
                                <img src={ErrorIcon} alt="Profile" className="h-4 w-4" />
                                <p className="ml-2">Update Needed</p>
                            </div>
                            <div className="mt-4 text-custom-gray">
                                <p>Remaining Time: 5 days</p>
                                <br />
                                <p>Specialist: Specialist Name</p>
                                <p>Manager: Team Manager</p>
                                <p>Member: Member Name</p>
                            </div>
                        </div>
                        <div className="gap-1 w-[600px] mx-8">
                            <textarea
                                className="mt-2 w-full h-32 border rounded-md p-2 resize-none overflow-auto"
                                placeholder="Project Details Populated from Manager Side of System"
                            >
                            </textarea>
                        </div>
                        <div className="gap-4">
                            <div className="flex">
                                <button className="p-2">
                                    <img src={ProfileIcon} alt="Profile" />
                                </button>
                                <button className="p-2">
                                    <img src={ToolsIcon} alt="Tools" />
                                </button>
                                <button className="p-2">
                                    <img src={FilesIcon} alt="Files" />
                                </button>
                                <button className="p-2">
                                    <img src={NotesIcon} alt="Notes" />
                                </button>
                            </div>
                            <div className="flex justify-self-end">
                                <button className="bg-gray-400 text-white p-2 rounded-md mr-4">Reassign Project</button>
                                <button className="bg-custom-orange text-white p-2 rounded-md" onClick={toggleVisibility}>
                                    Update Project
                                </button>
                            </div>
                        </div>
                    </div>

                    {isVisible && (
                        <div className="pt-6">
                            <hr></hr>
                            <div className="flex gap-4 pt-4">
                                <div className="w-1/3">
                                    <div className="flex items-center mb-4">
                                        {/* Clock Time Dropdown */}
                                        <label htmlFor="clockTime" className="block text-sm font-medium text-gray-700">
                                        Clock Time:
                                        </label>
                                        <select
                                        id="clockTime"
                                        className="ml-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                        <option value="15m">15m</option>
                                        <option value="30m">30m</option>
                                        <option value="1h">1h</option>
                                        </select>
                                    </div>
                                    <div className="ml-4 mt-4 mb-8 flex items-center">
                                            <input
                                                id="nonBillable"
                                                type="checkbox"
                                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                            />
                                            <label htmlFor="nonBillable" className="ml-2 text-sm text-gray-700">
                                                Non-Billable
                                            </label>
                                    </div>
                                    <div className="mb-6">
                                        <h3 className="text-md font-medium text-gray-800 mb-2">
                                        What best describes the status of this project?
                                        </h3>
                                        <div className="space-y-2">
                                            <label className="flex items-center">
                                                <input
                                                type="radio"
                                                name="projectStatus"
                                                value="active"
                                                defaultChecked
                                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">This project is active and on schedule</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                type="radio"
                                                name="projectStatus"
                                                value="needResponse"
                                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">I need a member response to continue</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                type="radio"
                                                name="projectStatus"
                                                value="internalSupport"
                                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">
                                                We need additional internal support to continue
                                                </span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                type="radio"
                                                name="projectStatus"
                                                value="urgentResponse"
                                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">This project needs an urgent response from the assignee</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                type="radio"
                                                name="projectStatus"
                                                value="adjustHours"
                                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">Adjust the hours or timeline for this project</span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                type="radio"
                                                name="projectStatus"
                                                value="paused"
                                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">
                                                This project is paused until a specific date
                                                </span>
                                            </label>
                                            <label className="flex items-center">
                                                <input
                                                type="radio"
                                                name="projectStatus"
                                                value="noWork"
                                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                                />
                                                <span className="ml-2 text-sm text-gray-700">
                                                There is no additional work to be completed on this project
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="items-center mb-4">
                                        <span className="ml-2 text-sm text-gray-700">Does this project require immediate action from the assignee?</span>
                                        <br/>
                                        <select
                                        id="isImmediate"
                                        className="ml-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="15m">Yes</option>
                                            <option value="30m">No</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-2/3">
                                    <div className="flex justify-end">
                                        <div className="flex items-center mb-4">
                                            {/* Category Dropdown */}
                                            <label htmlFor="clockTime" className="block text-sm font-medium text-gray-700">
                                            Customize and send a member update:
                                            </label>
                                            <select
                                            id="categoryProject"
                                            className="ml-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                                <option value="">Select a Category</option>
                                                <option value="2">Category 1</option>
                                                <option value="3">category 2</option>
                                            </select>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <select
                                            id="insertSnippet"
                                            className="ml-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                            <option value="0">Insert a Snippet</option>
                                            <option value="1">Category 1</option>
                                            <option value="2">category 2</option>
                                            </select>
                                        </div>
                                    </div>
                                   <RichTextEditor ref={editorRef} />
                                    <div className='flex justify-between mt-24'>
                                        <button className="bg-gray-400 p-2 text-white rounded-md mr-4">Record a Video Update</button>
                                        <div className="flex gap-2 justify-end">
                                            <div className="flex items-center">
                                                <select
                                                id="memberUpdate"
                                                className="ml-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                >
                                                <option>This is a member Update</option>
                                                <option value="1">Member 1</option>
                                                <option value="2">Member 2</option>
                                                </select>
                                            </div>
                                            <button className="bg-second-blue p-2 text-white rounded-md mr-4">Submit Project Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {MessageData.map((message, index) => (
                    <MessageSection
                    key={index} // Provide a unique key for each component
                    memberName={message.memeberName}
                    memberType={message.type}
                    MessageTime={`${message.memeberName} posted a note today at ${message.time}`}
                    MessageContent={message.content}
                    />
                ))}
            </main>
        </div>
    );
}

export default ProjectDashboard;

