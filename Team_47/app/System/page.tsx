"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

const apiList = [
  { id: 1, name: "OpenAI GPT", limit: 5000 },
  { id: 2, name: "Claude AI", limit: 3000 },
  { id: 3, name: "Google Gemini", limit: 7000 },
];

const securityList = [
  "GDPR Compliance",
  "Data Retention Policies",
  "Access Control Management",
  "Ethical AI Guidelines",
];

const infraList = [
  "Kubernetes Node Monitoring",
  "Uptime Service Reports",
  "Real-Time Error Logs",
  "Incident Reporting System",
];

export default function SystemSettings() {
  const [apiLimits, setApiLimits] = useState(apiList);
  const [selectedAI, setSelectedAI] = useState("All");
  const [selectedInfra, setSelectedInfra] = useState("All");

  const increaseLimit = (id: number) => {
    setApiLimits(apiLimits.map(api => api.id === id ? { ...api, limit: api.limit + 1000 } : api));
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 p-10">
      <h1 className="text-4xl font-bold flex items-center gap-2">⚙️ System Settings</h1>
      <p className="text-gray-400 text-lg">Manage API Limits, Security, and Infrastructure.</p>

      <Tabs defaultValue="api" className="mt-8">
        <TabsList className="bg-gray-900 border border-gray-600 rounded-lg flex p-1">
          <TabsTrigger value="api" className="text-lg px-4 py-2 hover:bg-gray-700">API Analytics</TabsTrigger>
          <TabsTrigger value="security" className="text-lg px-4 py-2 hover:bg-gray-700">Security</TabsTrigger>
          <TabsTrigger value="infra" className="text-lg px-4 py-2 hover:bg-gray-700">Infrastructure</TabsTrigger>
        </TabsList>

        {/* API Section */}
        <TabsContent value="api" className="p-6 border border-gray-600 bg-gray-950 rounded-lg mt-4">
          <h2 className="text-2xl font-semibold">API Rate Limits & Usage</h2>
          {apiLimits.map(api => (
            <div key={api.id} className="p-5 border border-gray-600 rounded-lg mt-4 bg-gray-900">
              <p className="text-lg font-medium">{api.name}</p>
              <p className="text-gray-400">Current Limit: {api.limit} Requests/min</p>
              <Progress value={(api.limit / 10000) * 100} className="bg-gray-700 h-3 mt-2" />
              <Button onClick={() => increaseLimit(api.id)} className="mt-3 bg-blue-600 hover:bg-blue-500 text-white">
                Increase Limit
              </Button>
            </div>
          ))}
        </TabsContent>

        {/* Security Section */}
        <TabsContent value="security" className="p-6 border border-gray-600 bg-gray-950 rounded-lg mt-4">
          <h2 className="text-2xl font-semibold">Security Policies</h2>
          <div className="w-full bg-gray-900 border border-gray-600 rounded-md p-3 mt-3">
            <Select onValueChange={setSelectedAI}>
              <SelectTrigger className="border border-gray-600 bg-gray-800 text-gray-300 p-2 text-lg">
                <SelectValue placeholder="Select a Policy" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border border-gray-600 text-gray-300">
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="GDPR">GDPR Compliance</SelectItem>
                <SelectItem value="Access Control">Access Control Management</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <ul className="mt-5 space-y-3">
            {securityList.filter(item => selectedAI === "All" || item.includes(selectedAI)).map((item, index) => (
              <li key={index} className="p-3 border border-gray-600 rounded-lg bg-gray-900 hover:bg-gray-800">
                {item}
              </li>
            ))}
          </ul>
        </TabsContent>

        {/* Infrastructure Section */}
        <TabsContent value="infra" className="p-6 border border-gray-600 bg-gray-950 rounded-lg mt-4">
          <h2 className="text-2xl font-semibold">Infrastructure Monitoring</h2>
          <div className="w-full bg-gray-900 border border-gray-600 rounded-md p-3 mt-3">
            <Select onValueChange={setSelectedInfra}>
              <SelectTrigger className="border border-gray-600 bg-gray-800 text-gray-300 p-2 text-lg">
                <SelectValue placeholder="Select an Option" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border border-gray-600 text-gray-300">
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Kubernetes">Kubernetes Node Monitoring</SelectItem>
                <SelectItem value="Uptime">Uptime Service Reports</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <ul className="mt-5 space-y-3">
            {infraList.filter(item => selectedInfra === "All" || item.includes(selectedInfra)).map((item, index) => (
              <li key={index} className="p-3 border border-gray-600 rounded-lg bg-gray-900 hover:bg-gray-800">
                {item}
              </li>
            ))}
          </ul>
        </TabsContent>

      </Tabs>
    </div>
  );
}
