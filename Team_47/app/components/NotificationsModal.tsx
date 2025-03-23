'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const notifications = [
  { id: 1, user: 'Caitlyn', action: 'shared two files in', project: 'QuartzAI', time: '10 hours ago', category: 'Design', file: { name: 'Billing settings mockup.jpg', size: '1.2 MB' } },
  { id: 2, user: 'Zahra', action: 'archived the project', project: 'Clandestine', time: '8 hours ago', category: 'Operations' },
  { id: 3, user: 'Zahra', action: 'marked 6 items complete in', project: 'Clandestine', time: '8 hours ago', category: 'Operations' },
  { id: 4, user: 'Florence', action: 'added a new file in', project: 'Leapyear', time: '6 hours ago', category: 'Design', file: { name: 'Surface_Customers_Q12025.csv', size: '2 MB' } },
  { id: 5, user: 'Marco', action: 'requested access to', project: 'Leapyear', time: '6 hours ago', category: 'Design', request: true },
  { id: 6, user: 'Alex', action: 'commented in', project: 'Visionary', time: '5 hours ago', category: 'Engineering', comment: 'We need to review the performance metrics before finalizing this update.' },
  { id: 7, user: 'Sophie', action: 'updated the documentation in', project: 'NeuralX', time: '7 hours ago', category: 'Product' },
  { id: 8, user: 'Jason', action: 'shared a new report in', project: 'MarketInsights', time: '9 hours ago', category: 'Analytics', file: { name: 'Quarterly Performance.pdf', size: '3.5 MB' } },
  { id: 9, user: 'Eva', action: 'tagged you in a discussion in', project: 'HyperLoop', time: '11 hours ago', category: 'Development' },
  { id: 10, user: 'Ryan', action: 'uploaded new resources to', project: 'UXHub', time: '12 hours ago', category: 'Design' }
];

export default function NotificationsModal() {
  const [open, setOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('General');
  const filters = ['General', 'Mentions', 'Inbox', 'Archive'];

  return (
    <div className="relative">
      <Bell 
        size={24} 
        className="hover:text-blue-400 transition-all duration-300 hover:scale-110 cursor-pointer" 
        onClick={() => setOpen(true)}
      />

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="absolute right-0 top-12 w-96 bg-black text-white shadow-2xl rounded-lg p-4 backdrop-blur-md border border-gray-800 z-50"
          >
            <div className="flex justify-between items-center pb-2 border-b border-gray-700">
              <h2 className="text-lg font-semibold">Notifications</h2>
              <Button onClick={() => setOpen(false)} variant="ghost">
                <X className="w-5 h-5 text-gray-400 hover:text-white transition-colors duration-200" />
              </Button>
            </div>
            
            <div className="flex justify-between mt-3 space-x-2">
              {filters.map((filter) => (
                <button 
                  key={filter} 
                  onClick={() => setActiveFilter(filter)} 
                  className={`px-3 py-1 rounded-md text-sm transition-all duration-200 border border-gray-500 ${activeFilter === filter ? 'bg-gray-700 text-white' : 'text-gray-400 hover:bg-gray-800'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            <div className="mt-4 space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
              {notifications.map((notif) => (
                <motion.div key={notif.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                  <Card className="bg-black border border-gray-500 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                    <CardContent className="flex flex-col space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-green-400">•</span>
                        <p>
                          <span className="font-semibold">{notif.user}</span> {notif.action} 
                          <span className="text-blue-400"> {notif.project}</span>
                        </p>
                      </div>
                      <p className="text-gray-400 text-sm">{notif.time} • {notif.category}</p>
                      {notif.comment && (
                        <p className="bg-gray-900 p-2 rounded text-gray-300 border border-gray-500">{notif.comment}</p>
                      )}
                      {notif.file && (
                        <div className="flex items-center bg-gray-900 p-2 rounded border border-gray-500">
                          <p className="text-gray-300">{notif.file.name}</p>
                          <span className="ml-auto text-gray-400 text-xs">{notif.file.size}</span>
                        </div>
                      )}
                      {notif.request && (
                        <div className="flex space-x-2">
                          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-red-500 hover:text-white transition-colors duration-200">Decline</Button>
                          <Button variant="default" className="bg-green-500 hover:bg-green-600 text-white">Accept</Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
