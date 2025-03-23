"use client"
import React, { useState } from 'react';

const Page = () => {
    const [models, setModels] = useState([
        { id: 'ITEM-1001', title: 'Pears soap', state: 'Pretrained', priority: 'High', compliance: 'Pending' },
        { id: 'ITEM-1002', title: 'Lux Bodywash', state: 'Trained', priority: 'Medium', compliance: 'Pending' },
        { id: 'ITEM-1003', title: 'Vim gel', state: 'Fine-Tuned', priority: 'Low', compliance: 'Pending' },
        { id: 'ITEM-1004', title: 'Olive oil', state: 'Custom', priority: 'High', compliance: 'Pending' },
        { id: 'ITEM-1005', title: 'Parle Salted Peanuts', state: 'Pretrained', priority: 'Medium', compliance: 'Pending' },
        { id: 'ITEM-1006', title: 'Eno', state: 'Trained', priority: 'High', compliance: 'Pending' },
        { id: 'ITEM-1007', title: 'Surf Excel', state: 'Custom', priority: 'High', compliance: 'Pending' },
        { id: 'ITEM-1008', title: 'Loreal conditioner', state: 'Fine-Tuned', priority: 'Medium', compliance: 'Pending' },
        { id: 'ITEM-1009', title: 'HeadnShoulder shampoo', state: 'Pretrained', priority: 'Low', compliance: 'Pending' },
        { id: 'ITEM-1010', title: 'Bru Instant Coffee - 200g Jar', state: 'Trained', priority: 'Medium', compliance: 'Pending' },
        { id: 'ITEM-1011', title: 'Amul Pure Ghee - 1L Tin', state: 'Pretrained', priority: 'High', compliance: 'Pending' },
        { id: 'ITEM-1012', title: 'Good Day Butter Cookies - 600g Pack', state: 'Fine-Tuned', priority: 'Medium', compliance: 'Pending' },
        { id: 'ITEM-1013', title: 'Dettol Antiseptic Liquid - 1L', state: 'Trained', priority: 'High', compliance: 'Pending' },
        { id: 'ITEM-1014', title: 'Maggie 2-Minute Instant Noodles - 12 Pack', state: 'Custom', priority: 'High', compliance: 'Pending' },
        { id: 'ITEM-1015', title: 'Tata Salt - 1kg Pack', state: 'Pretrained', priority: 'Medium', compliance: 'Pending' }
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const handleApprove = (id: string) => {
        setModels((prev) => prev.map((model) => model.id === id ? { ...model, state: 'Approved', compliance: 'Compliant' } : model));
    };
    
    const handleDeny = (id: string) => {
        setModels((prev) => prev.map((model) => model.id === id ? { ...model, state: 'Denied', compliance: 'Non-Compliant' } : model));
    };
    
    const paginatedModels = models.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const totalPages = Math.ceil(models.length / itemsPerPage);

    const goToPage = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };
    
    return (
        <div className="min-h-screen bg-black text-white p-8">
            <h1 className="text-2xl font-bold">AI Model Management</h1>
            <p className="text-gray-400">Manage and approve AI models efficiently.</p>

            <table className="w-full border-collapse mt-4">
                <thead>
                    <tr className="border-b border-gray-600">
                        <th className="p-2 text-left">AI Model ID</th>
                        <th className="p-2 text-left">Model Title</th>
                        <th className="p-2 text-left">Priority</th>
                        <th className="p-2 text-left">State</th>
                        <th className="p-2 text-left">Compliance</th>
                        <th className="p-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedModels.map((model) => (
                        <tr key={model.id} className="border-b border-gray-700 hover:bg-gray-800">
                            <td className="p-2">{model.id}</td>
                            <td className="p-2">{model.title}</td>
                            <td className="p-2">{model.priority}</td>
                            <td className="p-2">{model.state}</td>
                            <td className="p-2">{model.compliance}</td>
                            <td className="p-2">
                                {model.state !== 'Approved' && model.state !== 'Denied' && (
                                    <>
                                        <button onClick={() => handleApprove(model.id)} className="bg-green-600 text-white px-3 py-1 rounded-md mr-2 hover:bg-green-500">Approve</button>
                                        <button onClick={() => handleDeny(model.id)} className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-500">Deny</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-center gap-2 mt-4">
                <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className="bg-gray-700 text-white px-3 py-1 rounded-md hover:bg-gray-600">Previous</button>
                <span className="text-gray-300">Page {currentPage} of {totalPages}</span>
                <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages} className="bg-gray-700 text-white px-3 py-1 rounded-md hover:bg-gray-600">Next</button>
            </div>
        </div>
    );
};

export default Page;
