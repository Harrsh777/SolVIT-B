"use client"
import React, { useState } from 'react';

const Page = () => {
    const [selectedTitle, setSelectedTitle] = useState('');
    const [selectedIndustry, setSelectedIndustry] = useState('');
    const [selectedEmails, setSelectedEmails] = useState('');

    const titles = ['Startup', 'Corporation', 'Freelancer', 'Agency', 'Non-Profit', 'Student', 'Other'];
    const industries = ['Information Technology', 'Food & Beverages', 'Media & Entertainment', 'Consulting & Professional Services', 'Other'];
    const emailCounts = ['< 1K', '1-5K', '10-20K', '20-50K', '> 50K'];

    const handleSelection = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
        setter(value);
    };
    

    return (
        <div className="min-h-screen bg-black text-white flex justify-center items-center p-8">
            <div className="max-w-lg w-full space-y-4">
                <h1 className="text-2xl font-bold text-center">Welcome to AI Marketplace</h1>
                <p className="text-center text-gray-400">Let's start with a few questions<br />Your answers will help us tailor the onboarding just for you</p>

                <div className="space-y-2">
                    <h2 className="text-lg">Select your title</h2>
                    <div className="flex flex-wrap gap-2">
                        {titles.map((title) => (
                            <button
                                key={title}
                                onClick={() => handleSelection(setSelectedTitle, title)}
                                className={`px-3 py-1 rounded-md text-white ${selectedTitle === title ? 'bg-blue-600' : 'bg-gray-800'} hover:bg-gray-700`}
                            >
                                {title}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-lg">Select your industry</h2>
                    <div className="flex flex-wrap gap-2">
                        {industries.map((industry) => (
                            <button
                                key={industry}
                                onClick={() => handleSelection(setSelectedIndustry, industry)}
                                className={`px-3 py-1 rounded-md text-white ${selectedIndustry === industry ? 'bg-blue-600' : 'bg-gray-800'} hover:bg-gray-700`}
                            >
                                {industry}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-lg">How many models will you use per month?</h2>
                    <div className="flex flex-wrap gap-2">
                        {emailCounts.map((emails) => (
                            <button
                                key={emails}
                                onClick={() => handleSelection(setSelectedEmails, emails)}
                                className={`px-3 py-1 rounded-md text-white ${selectedEmails === emails ? 'bg-blue-600' : 'bg-gray-800'} hover:bg-gray-700`}
                            >
                                {emails}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-lg">Give your workspace a name</h2>
                    <input type="text" placeholder="Test workspace" className="w-full p-2 bg-gray-800 text-white rounded-md" />
                    <p className="text-gray-500 text-sm">Your workspace will include all your settings and data.</p>
                </div>

                <div className="flex justify-between">
                    <button className="px-4 py-1 bg-gray-700 rounded-md text-white hover:bg-gray-600">Back</button>
                    <button className="px-4 py-1 bg-blue-600 rounded-md text-white hover:bg-blue-500">Create workspace</button>
                </div>
            </div>
        </div>
    );
};

export default Page;
