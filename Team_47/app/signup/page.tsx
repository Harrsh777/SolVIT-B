"use client";
import React, { useState } from "react";
import { supabase } from "@/lib/supabaseclient";
import { useRouter } from "next/navigation"; // Correct router import

const Signup = () => {
  const router = useRouter(); // Initialize the router

  const [selectedRole, setSelectedRole] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const roles = ["Retailer", "Wholesaler", "Manufacturer", "Distributor", "Exporter", "Other"];
  const industries = ["Textiles", "Handicrafts", "Spices", "Agriculture", "Electronics", "Other"];

  const handleSelection = (setter: (value: string) => void, value: string) => {
    setter(value);
  };

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.from("users").insert([
        {
          company_name: companyName,
          email: email,
          password: password,
          role: selectedRole,
          industry: selectedIndustry,
        },
      ]);

      if (error) {
        console.error("Error details:", error);
        alert("Signup failed: " + error.message);
        return;
      }

      alert("Signup successful!");
      router.push("/mainpage"); // Redirect to the main page (page.tsx)
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("Signup failed: An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <div className="w-full max-w-4xl space-y-6 bg-gray-800 bg-opacity-60 rounded-xl p-12 shadow-xl backdrop-blur-sm transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
          MultiCloud Deployment
        </h1>
        <p className="text-center text-gray-400">
          Deploy, manage, and scale your cloud applications effortlessly.
        </p>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Select Your Role</h2>
          <div className="flex flex-wrap gap-3">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => handleSelection(setSelectedRole, role)}
                className={`px-4 py-2 rounded-full font-semibold transition-transform duration-200 ease-in-out ${
                  selectedRole === role ? "bg-blue-600 text-white scale-105" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Select Your Industry</h2>
          <div className="flex flex-wrap gap-3">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => handleSelection(setSelectedIndustry, industry)}
                className={`px-4 py-2 rounded-full font-semibold transition-transform duration-200 ease-in-out ${
                  selectedIndustry === industry ? "bg-purple-600 text-white scale-105" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Company Name</h2>
          <input
            type="text"
            placeholder="Your Company"
            className="w-full p-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Email</h2>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Password</h2>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full p-4 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center pt-6">
          <button className="px-8 py-3 bg-gray-600 rounded-full text-white font-semibold hover:bg-gray-500 transition-colors">
            Back
          </button>
          <button
            onClick={handleSignUp}
            disabled={loading}
            className="px-8 py-3 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-500 transition-colors"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
