"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

import { motion } from "framer-motion";

const categories = [
  { id: "system", name: "System-Wide Plugins" },
  { id: "marketplace", name: "Marketplace Expansion" },
  { id: "analytics", name: "Data & Analytics" },
  { id: "payments", name: "Payments & Subscription" },
  { id: "api", name: "API Gateway Extensions" },
  { id: "user", name: "User Management Plugins" },
  { id: "performance", name: "Performance Optimization Plugins" }
];

const plugins = {
  system: [
    { name: "AI Moderation", description: "Detect and prevent harmful content" },
    { name: "Threat Detection", description: "Monitor security threats in real-time" },
    { name: "Session Analysis", description: "Track user behavior for insights" },
    { name: "Access Control", description: "Manage user roles and permissions" },
    { name: "Logging & Audit", description: "Maintain system logs and audit trails" }
  ],
  marketplace: [
    { name: "SEO Optimization", description: "Enhance search rankings with AI" },
    { name: "Affiliate Marketing", description: "Track referrals and commissions" },
    { name: "Paid Ads Integration", description: "Manage Google & Facebook Ads" },
    { name: "Customer Engagement", description: "Boost user engagement with gamification" }
  ],
  analytics: [
    { name: "Google Analytics", description: "Track website performance" },
    { name: "Custom BI Dashboards", description: "Advanced data visualization" },
    { name: "Real-Time Data Sync", description: "Sync data across platforms" },
    { name: "User Insights", description: "Deep dive into user behavior patterns" }
  ],
  payments: [
    { name: "Stripe & PayPal", description: "Support multiple payment methods" },
    { name: "Subscription Management", description: "Manage pricing & discounts" },
    { name: "Invoice Generation", description: "Generate detailed payment logs" },
    { name: "Crypto Payments", description: "Accept payments in Bitcoin and Ethereum" }
  ],
  api: [
    { name: "Kong API Management", description: "Rate limiting & authentication" },
    { name: "Custom API Hooks", description: "Extend API functionality" },
    { name: "Gateway Monitoring", description: "Track API performance" },
    { name: "Load Balancing", description: "Distribute traffic efficiently" }
  ],
  user: [
    { name: "Profile Customization", description: "Allow users to customize profiles" },
    { name: "Social Login", description: "Enable login via social networks" }
  ],
  performance: [
    { name: "Cache Optimization", description: "Reduce load times with caching" },
    { name: "Image Compression", description: "Optimize images for faster delivery" }
  ]
};

export default function PluginsPage() {
  const [enabledPlugins, setEnabledPlugins] = useState<Record<string, boolean>>({});

  const togglePlugin = (name: string) => {
    setEnabledPlugins((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="min-h-screen bg-black text-gray-300 p-8">
      <h1 className="text-4xl font-bold flex items-center gap-2">🔌 Plugins & Integrations</h1>
      <p className="text-gray-400 text-lg mt-2px">Manage and expand your AI Marketplace with powerful integrations.</p>

      <Tabs defaultValue="system" className="mt-6">
        <TabsList className="bg-gray-900 border border-gray-700 rounded-lg flex overflow-x-auto">
          {categories.map((cat) => (
            <TabsTrigger key={cat.id} value={cat.id} className="text-lg text-gray-300">{cat.name}</TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat.id} value={cat.id} className="p-6 border border-black-700 bg-black rounded-lg grid gap-4 md:grid-cols-2">
            {plugins[cat.id as keyof typeof plugins].map((plugin) => (
              <motion.div key={plugin.name} whileHover={{ scale: 1.02 }}>
                <Card className="bg-gray-800 border border-gray-700 p-4">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center text-xl text-gray-300">
                      {plugin.name} <Switch checked={enabledPlugins[plugin.name] || false} onCheckedChange={() => togglePlugin(plugin.name)} />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 text-base">{plugin.description}</p>
                    <Button variant="outline" className="mt-2 text-lg">Configure</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}