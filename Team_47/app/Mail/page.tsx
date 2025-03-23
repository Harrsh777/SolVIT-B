"use client"
import React, { useState } from "react";
import { FaInbox, FaDraftingCompass, FaPaperPlane, FaTrash, FaArchive, FaBell, FaComments, FaShoppingCart, FaTag, FaArrowLeft } from "react-icons/fa";

interface Message {
  sender: string;
  subject: string;
  tags: string[];
  date: string;
  body: string;
  timeAgo?: string;
  unread?: boolean;
}

const InboxPage = () => {
  const [activeTab, setActiveTab] = useState("Inbox");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [message, setMessage] = useState("");
  const [showUnread, setShowUnread] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const messages: Message[] = [
    { sender: "William Smith", subject: "Meeting Tomorrow", tags: ["meeting", "work", "important"], date: "Oct 22, 2023, 9:00 AM", body: "Let's discuss the project tomorrow.", timeAgo: "1 day ago", unread: true },
    { sender: "Alice Johnson", subject: "Birthday Celebration", tags: ["personal", "friends"], date: "Oct 21, 2023, 5:00 PM", body: "Join us for a party this weekend.", timeAgo: "2 days ago", unread: false },
    { sender: "Bob Martin", subject: "Invoice Update", tags: ["finance", "work"], date: "Oct 20, 2023, 11:00 AM", body: "Invoice has been updated.", timeAgo: "3 days ago", unread: true },
    { sender: "Emily Davis", subject: "Meeting Recap", tags: ["work"], date: "Oct 19, 2023, 3:00 PM", body: "Summary of today’s meeting.", timeAgo: "4 days ago", unread: false },
    { sender: "John Stewart", subject: "Weekly Report", tags: ["work"], date: "Oct 18, 2023, 2:00 PM", body: "Attached is the weekly report.", timeAgo: "5 days ago", unread: true },
    { sender: "Diana Prince", subject: "Workout Plan", tags: ["fitness"], date: "Oct 17, 2023, 7:00 AM", body: "New workout routine for next week.", timeAgo: "6 days ago", unread: false },
    { sender: "Clark Kent", subject: "Project Deadline", tags: ["work", "urgent"], date: "Oct 16, 2023, 8:00 AM", body: "Reminder about the deadline.", timeAgo: "7 days ago", unread: true },
    { sender: "Bruce Wayne", subject: "Charity Event", tags: ["community"], date: "Oct 15, 2023, 1:00 PM", body: "Invitation to the annual event.", timeAgo: "8 days ago", unread: false },
    { sender: "Barry Allen", subject: "Running Tips", tags: ["fitness"], date: "Oct 14, 2023, 9:00 AM", body: "Some new tips for endurance.", timeAgo: "9 days ago", unread: true },
    { sender: "Hal Jordan", subject: "Travel Plans", tags: ["personal"], date: "Oct 13, 2023, 10:00 AM", body: "Details about the upcoming trip.", timeAgo: "10 days ago", unread: false }
  ];

  const filteredMessages = showUnread ? messages.filter((msg) => msg.unread) : messages;
  const searchedMessages = filteredMessages.filter((msg) => msg.sender.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="flex h-screen">
      <aside className="w-1/5 bg-black p-3 text-white">
        <div className="text-lg font-bold mb-4">Alicia Koch</div>
        <ul className="space-y-2 text-sm">
          {["Inbox", "Drafts", "Sent", "Junk", "Trash", "Archive", "Social", "Updates", "Forums", "Shopping", "Promotions"].map((item) => (
            <li key={item} className="p-2 hover:bg-gray-800 rounded cursor-pointer" onClick={() => setActiveTab(item)}>{item}</li>
          ))}
        </ul>
      </aside>

      <div className="w-1/2 p-4 bg-black text-white">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => setShowUnread(false)} className="bg-gray-700 p-2 rounded">All Mail</button>
          <button onClick={() => setShowUnread(true)} className="bg-gray-700 p-2 rounded">Unread</button>
        </div>
        <input type="text" placeholder="Search by sender..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full p-2 mb-2 bg-gray-800 rounded" />
        {selectedMessage ? (
          <div className="p-4 bg-gray-900 rounded-md">
            <button onClick={() => setSelectedMessage(null)} className="mb-2 bg-gray-800 p-2 rounded">Back</button>
            <h3>{selectedMessage.sender}</h3>
            <p>{selectedMessage.subject}</p>
            <p>{selectedMessage.date}</p>
            <div>{selectedMessage.body}</div>
          </div>
        ) : (
          <div className="overflow-y-auto h-[70vh]">
            {searchedMessages.map((msg, index) => (
              <div key={index} onClick={() => setSelectedMessage(msg)} className="p-3 bg-gray-700 rounded-md mb-2 cursor-pointer">
                <h3>{msg.sender}</h3>
                <p>{msg.subject}</p>
                <p className="text-right">{msg.timeAgo}</p>
                <p>{msg.body.split(" ").slice(0, 5).join(" ")}...</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="w-1/3 p-4 bg-black text-white">
        <h3 className="text-lg font-bold mb-2">Compose Mail</h3>
        <input placeholder="To:" className="w-full p-2 mb-2 bg-gray-800 rounded" />
        <input placeholder="Cc:" className="w-full p-2 mb-2 bg-gray-800 rounded" />
        <textarea placeholder="Write your message..." className="w-full p-2 bg-gray-800 rounded h-64"></textarea>
      </div>
    </div>
  );
};

export default InboxPage;
