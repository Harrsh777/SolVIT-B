import React from "react";
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface Links {
  [key: string]: string[];
}

const Footer: React.FC = () => {
  const links: Links = {
    marketplace: ["Explore", "Featured Models", "Categories", "Trending"],
    aiModels: ["Model Library", "Integration", "Documentation", "API"],
    resources: ["Blog", "Tutorials", "Case Studies", "Support"],
    company: ["About Us", "Team", "Careers", "Contact"]
  };

  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80')] opacity-5"></div>
      
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80"
                alt="AI Engine Logo"
                className="h-8 w-8 rounded-lg mr-2"
              />
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Build AI Engine
              </h2>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Decentralized AI Marketplace
            </p>
            <p className="text-gray-400 text-sm">
              Empowering the future through decentralized artificial intelligence. Connect, create, and innovate with our cutting-edge AI marketplace.
            </p>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-lg font-semibold capitalize">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm block transform hover:translate-x-1"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <FaXTwitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <FaTelegram className="h-6 w-6" />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">Trademark Info</a>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Build AI Engine. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
