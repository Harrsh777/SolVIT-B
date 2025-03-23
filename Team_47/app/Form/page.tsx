"use client"
import React, { useState } from "react";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [notificationSettings, setNotificationSettings] = useState({
    communication: false,
    marketing: false,
    social: false,
    security: false,
    section1: false,
    section2: false,
    section3: false,
    section4: false,
  });
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const toggleSetting = (key: keyof typeof notificationSettings) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggleTwoFactorAuth = () => {
    setTwoFactorEnabled((prev) => !prev);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Account":
        return (
          <div className="w-4/5 pl-6">
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            <p className="text-gray-400 mb-6">Manage your account security and privacy.</p>
            <div className="space-y-6">
              <div className="border-b border-gray-700 pb-4">
                <label className="block text-gray-400 mb-1">Change Password</label>
                <input
                  type="password"
                  placeholder="New password"
                  className="w-full bg-gray-800 p-2 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
                <button className="mt-2 bg-gray-700 hover:bg-gray-600 text-white py-1 px-3 rounded-md">Update Password</button>
              </div>
              <div className="border-b border-gray-700 pb-4 flex justify-between items-center">
                <label className="block text-gray-400">Two-Factor Authentication</label>
                <input
                  type="checkbox"
                  checked={twoFactorEnabled}
                  onChange={toggleTwoFactorAuth}
                  className="w-5 h-5 bg-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
              <div className="border-b border-red-700 pb-4">
                <label className="block text-red-400 mb-1">Delete Account</label>
                <button className="bg-red-700 hover:bg-red-600 text-white py-1 px-3 rounded-md">Delete Account Permanently</button>
              </div>
            </div>
          </div>
        );
      case "Appearance":
        return (
          <div className="w-4/5 pl-6">
            <h2 className="text-xl font-semibold mb-4">Appearance</h2>
            <p className="text-gray-400 mb-6">Customize your theme preference.</p>
            <div className="border-b border-gray-700 pb-4 flex justify-between items-center">
              <label className="block text-gray-400">Dark Mode</label>
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
                className="w-5 h-5 bg-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>
          </div>
        );
      case "Notifications":
        return (
          <div className="w-4/5 pl-6">
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
            <p className="text-gray-400 mb-6">Configure how you receive notifications.</p>
            <div className="space-y-6">
            {Object.keys(notificationSettings).map((key) => (
  <div key={key} className="border-b border-gray-700 pb-4 flex justify-between items-center">
    <label className="block text-gray-400">
      {key.charAt(0).toUpperCase() + key.slice(1)}
    </label>
    <input
      type="checkbox"
      checked={notificationSettings[key as keyof typeof notificationSettings]}
      onChange={() => toggleSetting(key as keyof typeof notificationSettings)}
      className="w-5 h-5 bg-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
    />
  </div>
))}

              <button className="mt-4 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md">Update Notifications</button>
            </div>
          </div>
        );
      default:
        return (
          <div className="w-4/5 pl-6">
            <h2 className="text-xl font-semibold mb-4">Profile</h2>
            <p className="text-gray-400 mb-6">This is how others will see you on the site.</p>
            <div className="space-y-6">
              {["Username", "Email", "Bio", "URLs"].map((label) => (
                <div key={label} className="border-b border-gray-700 pb-4">
                  <label className="block text-gray-400 mb-1">{label}</label>
                  <input
                    type="text"
                    placeholder={label === "Username" ? "shadcn" : label === "Bio" ? "I own a computer." : label === "URLs" ? "https://shadcn.com" : "Select a verified email to display"}
                    className="w-full bg-gray-800 p-2 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
                  />
                </div>
              ))}
              <button className="mt-4 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md">Update Profile</button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-black text-white" : "bg-white text-black"} p-8`}>
      <h1 className="text-3xl font-semibold mb-2">Settings</h1>
      <p className="text-gray-400 mb-8">Manage your account settings and set e-mail preferences.</p>
      <div className="flex">
        <aside className="w-1/5 pr-6 border-r border-gray-700">
          <ul className="space-y-4">
            {["Profile", "Account", "Appearance", "Notifications", "Display"].map((item) => (
              <li
                key={item}
                className={`text-gray-400 hover:text-white cursor-pointer ${activeTab === item ? "text-white" : ""}`}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
        {renderContent()}
      </div>
    </div>
  );
};

export default SettingsPage;
