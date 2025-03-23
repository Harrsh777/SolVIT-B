"use client";
import React, { useState } from "react";

const Page = () => {
    const [view, setView] = useState<'communities' | 'moderation' | 'events'>('communities');
    const [sortBy, setSortBy] = useState<'engagement' | 'members' | 'growth'>('engagement');
    const [filterCategory, setFilterCategory] = useState<string>('All');
    const [newEvent, setNewEvent] = useState({ name: '', date: '', attendees: '' });

    // 🔥 Top Communities Data
    const communities = [
        { id: 'COMM-1001', name: 'Lifebuoy Soap', members: 3200, engagement: 98, growth: 12, sentiment: 'Positive', spamReports: 5, category: 'Personal Care' },
        { id: 'COMM-1002', name: 'Surf Excel Detergent', members: 5200, engagement: 92, growth: 20, sentiment: 'Neutral', spamReports: 8, category: 'Home Care' },
        { id: 'COMM-1003', name: 'Colgate Toothpaste', members: 4100, engagement: 88, growth: 15, sentiment: 'Positive', spamReports: 2, category: 'Oral Care' },
        { id: 'COMM-1004', name: 'Vim Dishwash Gel', members: 2900, engagement: 85, growth: 8, sentiment: 'Negative', spamReports: 12, category: 'Hair Care' },
        { id: 'COMM-1005', name: 'Dettol Handwash', members: 4800, engagement: 97, growth: 18, sentiment: 'Positive', spamReports: 3, category: 'Oral Care' },
        { id: 'COMM-1006', name: 'Dove Shampoo', members: 3300, engagement: 90, growth: 14, sentiment: 'Neutral', spamReports: 7, category: 'Hair Care' },
        { id: 'COMM-1007', name: 'Lux Body Wash', members: 5500, engagement: 95, growth: 22, sentiment: 'Positive', spamReports: 4, category: 'Personal Care' },
        { id: 'COMM-1008', name: 'Lysol Floor Cleaner', members: 2600, engagement: 82, growth: 6, sentiment: 'Negative', spamReports: 15, category: 'Home Hygiene' },
        { id: 'COMM-1009', name: 'Clinic Plus Shampoo', members: 3700, engagement: 91, growth: 17, sentiment: 'Positive', spamReports: 3, category: 'Hair Care' },
        { id: 'COMM-1010', name: 'Pears Soap', members: 4500, engagement: 93, growth: 21, sentiment: 'Neutral', spamReports: 6, category: 'Personal Care' }   , 
        { id: 'COMM-1011', name: 'Dove Body Wash', members: 5500, engagement: 95, growth: 22, sentiment: 'Positive', spamReports: 4, category: 'Personal Care' },
        { id: 'COMM-1012', name: 'Clean Floor Cleaner', members: 2600, engagement: 82, growth: 6, sentiment: 'Negative', spamReports: 15, category: 'Home Hygiene' },
        { id: 'COMM-1013', name: 'Vatika Shampoo', members: 3700, engagement: 91, growth: 17, sentiment: 'Positive', spamReports: 3, category: 'Hair Care' },
        { id: 'COMM-1014', name: 'Pears Soap', members: 4500, engagement: 93, growth: 21, sentiment: 'Neutral', spamReports: 6, category: 'Personal Care' }    
    ];

 

    // 🔥 Sorting & Filtering Logic
    const sortedCommunities = [...communities].sort((a, b) => {
        if (sortBy === 'engagement') return b.engagement - a.engagement;
        if (sortBy === 'members') return b.members - a.members;
        if (sortBy === 'growth') return b.growth - a.growth;
        return 0;
    }).filter(comm => filterCategory === 'All' || comm.category === filterCategory);

    // 🔥 Reported Content Data
    const [reportedPosts, setReportedPosts] = useState([
        { id: 'REP-001', user: 'John Doe', reason: 'Spam', status: 'Pending' },
        { id: 'REP-002', user: 'Jane Smith', reason: 'Harassment', status: 'Pending' },
        { id: 'REP-003', user: 'Alice Johnson', reason: 'Fake News', status: 'Pending' }
    ]);

    const handleModeration = (id: string, action: 'Warn' | 'Ban' | 'Ignore') => {
        setReportedPosts(reportedPosts.map(post => 
            post.id === id ? { ...post, status: action } : post
        ));
    };

    // 🔥 Event Management System
    const [events, setEvents] = useState([
        { name: 'AI & Future Trends', date: 'April 15, 2025', attendees: 120 },
        { name: 'Ethical AI Conference', date: 'May 1, 2025', attendees: 95 }
    ]);

    const addEvent = () => {
        if (newEvent.name && newEvent.date && newEvent.attendees) {
            setEvents([...events, { ...newEvent, attendees: parseInt(newEvent.attendees) }]);
            setNewEvent({ name: '', date: '', attendees: '' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-4">🔍 Community Management</h1>

            {/* 🏷 Navigation Tabs */}
            <div className="flex space-x-4 mb-6">
                <button onClick={() => setView('communities')} className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition">Top Communities</button>
                <button onClick={() => setView('moderation')} className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition">Moderation & Reports</button>
                <button onClick={() => setView('events')} className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 transition">Events & Announcements</button>
            </div>

            {/* 🎯 Community Section */}
            {view === 'communities' && (
                <>
                    <h2 className="text-xl font-semibold">🔥 Top Engaged Communities</h2>
                    
                    {/* 🎛 Sorting & Filtering */}
                    <div className="flex space-x-4 mt-4 mb-4">
                        <select onChange={(e) => setSortBy(e.target.value as 'engagement' | 'members' | 'growth')} className="bg-gray-800 p-2 rounded-md">
                            <option value="engagement">Sort by Engagement</option>
                            <option value="members">Sort by Members</option>
                            <option value="growth">Sort by Growth</option>
                        </select>
                        <select onChange={(e) => setFilterCategory(e.target.value)} className="bg-gray-800 p-2 rounded-md">
                            <option value="All">All Categories</option>
                            <option value="Oral Care">Oral Products</option>
                            <option value="Hair Care">Hair Products</option>
                        </select>
                    </div>

                    {/* 📊 Community Table */}
                    <table className="w-full border-collapse mt-4">
                        <thead>
                            <tr className="border-b border-gray-600">
                                <th className="p-2">Community Name</th>
                                <th className="p-2">Members</th>
                                <th className="p-2">Engagement</th>
                                <th className="p-2">Growth</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedCommunities.map((comm) => (
                                <tr key={comm.id} className="border-b border-gray-700 hover:bg-gray-800">
                                    <td className="p-2">{comm.name}</td>
                                    <td className="p-2">{comm.members}</td>
                                    <td className="p-2">{comm.engagement}%</td>
                                    <td className="p-2">{comm.growth}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}

            {/* 🚨 Moderation & Reports */}
            {view === 'moderation' && (
                <>
                    <h2 className="text-xl font-semibold">🚨 Reported Content</h2>
                    {reportedPosts.map(post => (
                        <div key={post.id} className="bg-gray-800 p-4 rounded-md mt-4">
                            <p><strong>User:</strong> {post.user}</p>
                            <p><strong>Reason:</strong> {post.reason}</p>
                            <p><strong>Status:</strong> <span className={`text-${post.status === 'Pending' ? 'yellow' : 'green'}-500`}>{post.status}</span></p>
                            <div className="flex space-x-2 mt-2">
                                <button onClick={() => handleModeration(post.id, 'Warn')} className="bg-yellow-600 px-3 py-1 rounded-md">Warn</button>
                                <button onClick={() => handleModeration(post.id, 'Ban')} className="bg-red-600 px-3 py-1 rounded-md">Ban</button>
                                <button onClick={() => handleModeration(post.id, 'Ignore')} className="bg-gray-600 px-3 py-1 rounded-md">Ignore</button>
                            </div>
                        </div>
                    ))}
                </>
            )}

            {/* 📅 Event Management */}
            {view === 'events' && (
                <>
                    <h2 className="text-xl font-semibold">📅 Create New Event</h2>
                    <input type="text" placeholder="Event Name" value={newEvent.name} onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })} />
                    <input type="date" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} />
                    <input type="number" placeholder="Attendees" value={newEvent.attendees} onChange={(e) => setNewEvent({ ...newEvent, attendees: e.target.value })} />
                    <button onClick={addEvent} className="bg-blue-600 px-4 py-2 rounded-md">Create Event</button>

                    <h2 className="text-xl font-semibold mt-6">📆 Upcoming Events</h2>
                    {events.map(event => <p key={event.name}>{event.name} - {event.date} ({event.attendees} Attendees)</p>)}
                </>
            )}
        </div>
    );
};

export default Page;
