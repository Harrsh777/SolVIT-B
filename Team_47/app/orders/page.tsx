"use client"
import React, { useState } from 'react';

const Page = () => {
    const [view, setView] = useState<'orders' | 'vendors'>('orders');
    const [vendors, setVendors] = useState([
        { id: 'VENDOR-2001', name: 'Hitesh', status: 'Pending', reason: '' },
        { id: 'VENDOR-2002', name: 'Ramesh', status: 'Verified', reason: '' },
        { id: 'VENDOR-2003', name: 'Rakesh', status: 'Blacklisted', reason: 'Regulatory violations' },
        { id: 'VENDOR-2004', name: 'Mohan', status: 'Pending', reason: '' },
        { id: 'VENDOR-2005', name: 'Shahid', status: 'Verified', reason: '' },
        { id: 'VENDOR-2006', name: 'Ratan', status: 'Blacklisted', reason: 'Fraudulent Activities' },
        { id: 'VENDOR-2007', name: 'Aakash', status: 'Pending', reason: '' },
        { id: 'VENDOR-2008', name: 'Abhishek', status: 'Verified', reason: '' },
        { id: 'VENDOR-2009', name: 'Koushik', status: 'Pending', reason: '' },
        { id: 'VENDOR-2010', name: 'Rashid', status: 'Pending', reason: '' }
    ]);


    type Order = {
      id: string;
      customer: string;
      type: string;
      status: string;
  };

  const orders = [
    { id: "#1001", name: "John Doe", email: "john.doe@aimarketplace.com", product: "Dove soap", type: "Personal Care", date: "Mar 1, 2025", price: "$199", buyer: "Business", status: "New" },
    { id: "#1002", name: "Alice Smith", email: "alice.smith@aimarketplace.com", product: "Tide Detergent", type: "Household Cleaning", date: "Mar 2, 2025", price: "$149", buyer: "Individual", status: "Confirmed" },
    { id: "#1003", name: "Bob Johnson", email: "bob.j@aimarketplace.com", product: "Surf Excel", type: "Household Cleaning", date: "Mar 3, 2025", price: "$99", buyer: "Startup", status: "Completed" },
    { id: "#1004", name: "Eve Williams", email: "eve.w@aimarketplace.com", product: "Lifebuoy soap", type: "Personal Care", date: "Mar 4, 2025", price: "$299", buyer: "E-commerce", status: "Cancelled" },
    { id: "#1005", name: "Chris Brown", email: "chris.b@aimarketplace.com", product: "Colgate Toothpaste", type: "Oral Care", date: "Mar 5, 2025", price: "$249", buyer: "Customer Support", status: "Checked Out" },
    { id: "#1006", name: "Daniel Lee", email: "daniel.l@aimarketplace.com", product: "Vim Gel", type: "Household Cleaning", date: "Mar 6, 2025", price: "$79", buyer: "Social Media", status: "New" },
    { id: "#1007", name: "Olivia Davis", email: "olivia.d@aimarketplace.com", product: "Dettol Handwash", type: "Personal Care", date: "Mar 7, 2025", price: "$199", buyer: "Fitness App", status: "Confirmed" },
    { id: "#1008", name: "Liam Walker", email: "liam.w@aimarketplace.com", product: "Dove Shampoo", type: "Hair Care", date: "Mar 8, 2025", price: "$189", buyer: "Smart Devices", status: "Checked In" },
    { id: "#1009", name: "Sophia Martinez", email: "sophia.m@aimarketplace.com", product: "Lux Bodywash", type: "Personal Care", date: "Mar 9, 2025", price: "$299", buyer: "Banking", status: "Completed" },
    { id: "#1010", name: "Noah Taylor", email: "noah.t@aimarketplace.com", product: "Miniso Body Scrub", type: "Personal Care", date: "Mar 10, 2025", price: "$159", buyer: "Security", status: "Checked In" },
    { id: "#1011", name: "Mia White", email: "mia.w@aimarketplace.com", product: "Pears Soap", type: "Personal Care", date: "Mar 11, 2025", price: "$249", buyer: "Authentication", status: "Cancelled" },
    { id: "#1012", name: "Elijah Moore", email: "elijah.m@aimarketplace.com", product: "L'Oréal Conditioner", type: "Hair Care", date: "Mar 12, 2025", price: "$129", buyer: "Photography", status: "Checked Out" },
    { id: "#1013", name: "Isabella Clark", email: "isabella.c@aimarketplace.com", product: "Gillette Razor", type: "Personal Care", date: "Mar 13, 2025", price: "$179", buyer: "Global Business", status: "New" },
    { id: "#1014", name: "James King", email: "james.k@aimarketplace.com", product: "Plum Hand Cream", type: "Personal Care", date: "Mar 14, 2025", price: "$199", buyer: "Manufacturing", status: "Confirmed" },
    { id: "#1015", name: "Amelia Scott", email: "amelia.s@aimarketplace.com", product: "Pond's Gel", type: "Skin Care", date: "Mar 15, 2025", price: "$99", buyer: "Mental Health", status: "Completed" }
];

console.log(orders);

      

    const [statusFilter, setStatusFilter] = useState('All');

    const handleVerifyVendor = (id: string) => {
      setVendors((prev) => prev.map((vendor) => vendor.id === id ? { ...vendor, status: 'Verified' } : vendor));
  };

  const handleBlacklistVendor = (id: string, reason: string) => {
      setVendors((prev) => prev.map((vendor) => vendor.id === id ? { ...vendor, status: 'Blacklisted', reason } : vendor));
  };
  
  return (
      <div className="min-h-screen bg-black text-white p-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-400">Manage orders and vendor verifications efficiently.</p>

          <div className="flex space-x-4 mt-4">
              <button onClick={() => setView('orders')} className="bg-gray-600 text-white px-4 py-2 rounded-md">All Users</button>
              <button onClick={() => setView('vendors')} className="bg-gray-600 text-white px-4 py-2 rounded-md">All Vendors</button>
          </div>

          <div className="mt-4">
              <label className="mr-2">Filter by Status:</label>
              <select 
                  className="bg-gray-700 text-white p-2 rounded-md"
                  value={statusFilter} 
                  onChange={(e) => setStatusFilter(e.target.value)}
              >
                  <option value="All">All</option>
                  {view === 'orders' ? (
                      <>
                          <option value="New">New</option>
                          <option value="Confirmed">Confirmed</option>
                          <option value="Checked In">Checked In</option>
                          <option value="Checked Out">Checked Out</option>
                      </>
                  ) : (
                      <>
                          <option value="Pending">Pending</option>
                          <option value="Verified">Verified</option>
                          <option value="Blacklisted">Blacklisted</option>
                      </>
                  )}
              </select>
          </div>

          {view === 'orders' ? (
              <>
                  <h2 className="text-xl font-semibold mt-6">Orders</h2>
                  <table className="w-full border-collapse mt-4">
                      <thead>
                          <tr className="border-b border-gray-600">
                              <th className="p-2 text-left">Order ID</th>
                              <th className="p-2 text-left">Customer</th>
                              <th className="p-2 text-left">Amount</th>
                              <th className="p-2 text-left">Status</th>
                          </tr>
                      </thead>
                      <tbody>
                          {orders.filter(order => statusFilter === 'All' || order.status === statusFilter).map((order) => (
                              <tr key={order.id} className="border-b border-gray-700 hover:bg-gray-800">
                                  <td className="p-2">{order.id}</td>
                                  <td className="p-2">{order.name}</td>
                                  <td className="p-2">{order.type}</td>
                                  <td className="p-2">{order.status}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </>
          ) : (
              <>
                  <h2 className="text-xl font-semibold mt-6">Vendor List</h2>
                  <table className="w-full border-collapse mt-4">
                      <thead>
                          <tr className="border-b border-gray-600">
                              <th className="p-2 text-left">Vendor ID</th>
                              <th className="p-2 text-left">Name</th>
                              <th className="p-2 text-left">Status</th>
                              <th className="p-2 text-left">Reason</th>
                              <th className="p-2 text-left">Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          {vendors.filter(vendor => statusFilter === 'All' || vendor.status === statusFilter).map((vendor) => (
                              <tr key={vendor.id} className="border-b border-gray-700 hover:bg-gray-800">
                                  <td className="p-2">{vendor.id}</td>
                                  <td className="p-2">{vendor.name}</td>
                                  <td className="p-2">{vendor.status}</td>
                                  <td className="p-2">{vendor.reason}</td>
                                  <td className="p-2">
                                      {vendor.status === 'Pending' && (
                                          <button onClick={() => handleVerifyVendor(vendor.id)} className="bg-blue-600 text-white px-3 py-1 rounded-md mr-2 hover:bg-blue-500">Verify</button>
                                      )}
                                      {vendor.status !== 'Blacklisted' && (
                                          <button onClick={() => handleBlacklistVendor(vendor.id, 'Policy Violation')} className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-500">Blacklist</button>
                                      )}
                                  </td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </>
          )}
      </div>
  );
};

export default Page;
