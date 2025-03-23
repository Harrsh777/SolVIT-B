'use client';

import { SidebarProvider } from '@/components/ui/sidebar';
import { Card, CardContent } from '@/components/ui/card';
import { useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line } from 'recharts';
import { Component as BarChartComponent } from '../components/areachart';
import { Components as PieChartComponent } from '../components/piechart';
import { Component } from '../components/linechart';
import AppSidebar from '@/components/app-sidebar';
import AITextAssistant from '../components/ChatAssistant';

const revenueData = [
  { name: 'Jan', value: 3000 },
  { name: 'Feb', value: 3500 },
  { name: 'Mar', value: 4000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 5000 },
  { name: 'Jun', value: 5200 },
];

const transactions = [
  { name: 'Alice', amount: '$120', date: '2025-03-10', status: 'Completed' },
  { name: 'Bob', amount: '$200', date: '2025-03-11', status: 'Pending' },
  { name: 'Charlie', amount: '$95', date: '2025-03-12', status: 'Failed' },
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar from ShadCN */}
      <div className="w-64">
        <AppSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-white text-black grid gap-4">
        {/* First Row: Revenue, Subscriptions, Pie Chart */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Total Revenue Card */}
          <Card className="bg-gray-100 p-4">
            <CardContent>
              <Component />
              <LineChart data={revenueData}>
                <Line type="monotone" dataKey="value" stroke="#FF004D" strokeWidth={2} />
              </LineChart>
            </CardContent>
          </Card>

          {/* Subscriptions Card */}
          <Card className="bg-gray-100 p-4">
            <CardContent>
              <h3 className="text-lg font-semibold">Subscriptions</h3>
              <p className="text-2xl font-bold">+2350</p>
              <p className="text-green-500">+180.1% from last month</p>
              <Progress value={75} color="red" />
            </CardContent>
          </Card>

          {/* Pie Chart Component */}
          <Card className="bg-gray-100 p-4">
            <CardContent>
              <PieChartComponent />
            </CardContent>
          </Card>
        </div>

        {/* Second Row: All Transactions (Full Width) */}
        <Card className="bg-gray-100 p-4 w-full">
          <CardContent>
            <h3 className="text-lg font-semibold">All Transactions</h3>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Name</th>
                  <th className="p-2">Amount</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{tx.name}</td>
                    <td className="p-2">{tx.amount}</td>
                    <td className="p-2">{tx.date}</td>
                    <td className={`p-2 ${tx.status === 'Completed' ? 'text-green-500' : 'text-red-500'}`}>
                      {tx.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Third Row: Bar Chart (Full Width) */}
        <div className="w-full">
          <BarChartComponent />
        </div>
        <AITextAssistant/>
      </div>
    </div>
  );
}
