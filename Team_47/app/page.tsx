"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white font-sans relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-72 h-72 bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 opacity-30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-opacity-20 backdrop-blur-md shadow-lg relative z-10 border-b border-gray-700">
        <div className="text-2xl font-bold tracking-wider text-purple-400 hover:scale-105 transition-transform duration-300">
          SELLIFY
        </div>
        <div className="hidden md:flex space-x-6">
          {["Features", "Benefits", "Pricing", "Support", "Testimonials"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-purple-400 transition duration-300"
            >
              {item}
            </a>
          ))}
          <Link href="/main">
            <button className="ml-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:opacity-80 transition-all duration-300 focus:ring-2 focus:ring-purple-400 shadow-xl transform hover:scale-105">
              Start Selling
            </button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-16 py-20 relative z-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h1 className="text-5xl font-extrabold text-white leading-tight">
            Empowering Small Businesses to Sell Online Easily
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Sellify helps small business owners launch, manage, and grow their
            online stores effortlessly with powerful e-commerce tools.
          </p>

          <div className="mt-6 space-y-4">
            {["Easy Store Setup in Minutes", "Secure & Hassle-Free Transactions", "Built-in Marketing & SEO Tools", "Mobile-Friendly & Customizable Themes", "24/7 Customer Support"].map((feature, index) => (
              <motion.p
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center text-gray-400"
              >
                ✅ {feature}
              </motion.p>
            ))}
          </div>

          <Link href="/signup">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 20px rgba(255, 0, 255, 0.7)",
              }}
              transition={{ duration: 0.3 }}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-md text-white hover:opacity-90 transition-all duration-300 focus:ring-2 focus:ring-purple-500 shadow-lg"
            >
              Get Started for Free
            </motion.button>
          </Link>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
        >
          <motion.img
            src="https://pbs.twimg.com/media/FqOVJqtWcAckzai.jpg:large"
            alt="Sellify E-commerce Platform"
            className="w-full max-w-md rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
