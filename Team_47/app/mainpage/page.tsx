"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Mail, Bell, User } from "react-feather";
import { FaUserPlus, FaSpinner, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import OrderList from "../orderlist";
import Footer from "../components/footer";
import NotificationsModal from "../components/NotificationsModal";
import AITextAssistant from "../components/ChatAssistant";

const statusOptions = [
  { label: "All", count: 30, icon: <FaUserPlus size={20} className="text-gray-500 mt-[0.8cm]" /> },
  { label: "In Progress", count: 2, icon: <FaSpinner size={20} className="text-yellow-500 mt-[0.8cm]" /> },
  { label: "Ready", count: 7, icon: <FaCheckCircle size={20} className="text-green-500 mt-[0.8cm]" /> },
  { label: "Cancelled", count: 3, icon: <FaTimesCircle size={20} className="text-red-500 mt-[0.8cm]" /> },
];

const AdminPanel: React.FC = () => {
  const router = useRouter();
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isListView, setIsListView] = useState(false);
  

  const handleStatusClick = (status: string) => {
    setSelectedStatus(status === "All" ? null : status);

    
    
  };

  return (
    <div className="bg-white text-black min-h-screen">
{/* Navigation Bar */}
<div className="pt-6 mx-auto rounded-[1cm] bg-gray-900 text-white p-6 m-[1cm] shadow-2xl backdrop-blur-lg bg-opacity-80">
  <div className="rounded-[1cm] bg-gradient-to-r from-gray-900 to-gray-800 p-6 shadow-lg relative">
    
    {/* Navigation Menu */}
    <div className="flex justify-between items-center px-8">
      
      {/* Left Section - Logo & Menu */}
      <div className="flex items-center gap-10 text-lg font-medium">
        <button 
          onClick={() => router.push("/dashboard")} 
          className="transition-all duration-300 hover:text-blue-400 hover:scale-105"
        >
          Financial Activity
        </button>
        <button 
          onClick={() => router.push("/Tasks")} 
          className="transition-all duration-300 hover:text-blue-400 hover:scale-105"
        >
          Marketplace Management
        </button>
        <button 
          onClick={() => router.push("/orders")} 
          className="transition-all duration-300 hover:text-blue-400 hover:scale-105"
        >
          User Management
        </button>
        <button 
          onClick={() => router.push("/Community")} 
          className="transition-all duration-300 hover:text-blue-400 hover:scale-105"
        >
          Community Management
        </button>

        <button 
          onClick={() => router.push("/Plugins")} 
          className="transition-all duration-300 hover:text-blue-400 hover:scale-105"
        >
          Plugins
        </button>
        <button 
          onClick={() => router.push("/System")} 
          className="transition-all duration-300 hover:text-blue-400 hover:scale-105"
        >
          System Settings
        </button>
       

        {/* Dropdown for API & Analytics */}
        <div className="relative group">
        
          <div className="absolute left-0 hidden group-hover:block bg-gray-800 rounded-lg shadow-md mt-2 w-[10cm] text-white">
            {["All API's", "Vendors Analytics"].map((menu, index) => (
              <button 
                key={index} 
                className="block w-full px-4 py-2 hover:bg-blue-600 transition-all duration-300 text-left"
              >
                {menu}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Icons */}
      <div className="flex items-center gap-6">
        <Search size={24} className="hover:text-blue-400 transition-all duration-300 hover:scale-110 cursor-pointer" />
        <button onClick={() => router.push("/Mail")}>
          <Mail size={24} className="hover:text-blue-400 transition-all duration-300 hover:scale-110 cursor-pointer" />
        </button>
        <NotificationsModal/>
        <button onClick={() => router.push("/Form")}>
          <User size={24} className="hover:text-blue-400 transition-all duration-300 hover:scale-110 cursor-pointer" />
        </button>
      </div>
  

  </div>
          {/* Status Options */}
          <div className="flex gap-4 justify-start mt-2 flex-wrap">
            {statusOptions.map((option, index) => (
              <div
                key={index}
                className={`bg-transparent p-4 rounded-lg shadow-md w-[8cm] h-[4cm] flex flex-col items-start text-left hover:bg-gray-700 transition-colors relative cursor-pointer ${
                  selectedStatus === option.label ? "bg-gray-700" : ""
                }`}
                onClick={() => handleStatusClick(option.label)}
              >
                <span className="text-2xl font-medium">{option.label}</span>
                <span className="text-4xl font-bold mt-1">{option.count}</span>
                <div className="absolute bottom-3 right-3">{option.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 items-center gap-4">
        <div className="relative w-[60%] max-w-[600px]">
          <input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 text-lg border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute right-4 top-3 text-gray-500 cursor-pointer" size={22} />
        </div>
        <button
          onClick={() => setIsListView(!isListView)}
          className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition"
        >
          {isListView ? "Card View" : "List View"}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex gap-4 p-6 items-start justify-center mt-4">
        {/* Filters */}
        <div className="bg-gray-800 p-4 rounded-lg w-[6cm] h-[15cm] text-white shadow-md flex-shrink-0">
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <h3 className="text-md font-medium mb-2">Order Status</h3>
          <div className="space-y-2 mb-4">
            {statusOptions.map((option, index) => (
              <div key={index} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  id={option.label}
                  className="w-4 h-4"
                  checked={selectedStatus === option.label || (option.label === "All" && selectedStatus === null)}
                  onChange={() => handleStatusClick(option.label)}
                />
                <label htmlFor={option.label} className="text-sm">{option.label}</label>
              </div>
            ))}
          </div>
        </div>
        <AITextAssistant/>
        {/* Order List */}
        <div className="w-4/5 p-4 flex flex-col ml-[5cm]">
          <div className="grid grid-cols-3 gap-x-4 gap-y-3 w-full">
            <OrderList selectedStatus={selectedStatus} searchTerm={searchTerm} />
          </div>
        </div>
        
      </div>
     
      <Footer/>
    </div>
  );
};

export default AdminPanel;
