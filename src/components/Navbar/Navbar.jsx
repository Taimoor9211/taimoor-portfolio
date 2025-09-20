import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import LogoImage from "../../assets/profile11.png"; // Replace with your actual logo path

// A small utility function to handle conditional classes
const clsx = (...classNames) => classNames.filter(Boolean).join(" ");

// Static data moved outside the component
const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Projects" },
  { id: "education", label: "Education" },
];

// Custom hook to manage navbar logic
const useNavbarLogic = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { isOpen, setIsOpen, activeSection, handleMenuItemClick, isScrolled };
};

const Navbar = () => {
  const { isOpen, setIsOpen, activeSection, handleMenuItemClick, isScrolled } = useNavbarLogic();

  return (
    <nav
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-700 ease-out px-4 md:px-8 lg:px-12 xl:px-20",
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-2xl shadow-2xl shadow-purple-500/20 border-b border-purple-500/30 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo with Enhanced Animation */}
        <div className="flex items-center group cursor-pointer">
          <div className="relative">
            <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 p-0.5 shadow-xl shadow-purple-500/40 group-hover:shadow-purple-500/60 transition-all duration-500 group-hover:scale-110">
              <div className="h-full w-full rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 flex items-center justify-center text-white font-bold text-lg overflow-hidden">
                {/* Replace with your actual logo */}
                <div className="w-full h-full bg-gradient-to-br from-purple-300 to-indigo-300 rounded-full flex items-center justify-center text-xs font-bold">
                  <img src={LogoImage} alt="" />
                </div>
              </div>
            </div>
            
            {/* Animated ring effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 animate-pulse"></div>
            
            {/* Orbital ring */}
            <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 group-hover:border-purple-400/60 transition-all duration-500 group-hover:scale-125 group-hover:rotate-180"></div>
          </div>
          
          {/* Optional: Logo text */}
          <div className="ml-3 hidden sm:block">
            <span className="text-white font-bold text-lg bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Taimoor
            </span>
          </div>
        </div>

        {/* Enhanced Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-800/40 backdrop-blur-2xl rounded-full px-6 py-3 border border-purple-500/30 shadow-xl shadow-purple-500/10">
          {menuItems.map((item, index) => (
            <li key={item.id} className="relative">
              <button 
                onClick={() => handleMenuItemClick(item.id)}
                className={clsx(
                  "relative px-4 py-2.5 font-medium transition-all duration-500 rounded-full text-sm lg:text-base overflow-hidden group",
                  activeSection === item.id
                    ? "text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500/40 scale-105"
                    : "text-gray-300 hover:text-white hover:bg-purple-500/20 hover:scale-105"
                )}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-20 blur-md animate-pulse"></div>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Enhanced Social Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-2">
          <a
            href="https://github.com/Taimoor9211"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-400 hover:text-white transition-all duration-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 rounded-full group relative overflow-hidden hover:scale-110 hover:rotate-3"
            aria-label="GitHub"
          >
            <Github size={20} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-30 transition-all duration-300 rounded-full blur-md"></div>
          </a>
          <a
            href="https://www.linkedin.com/in/taimoor-goraya-97878a201/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-400 hover:text-white transition-all duration-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 rounded-full group relative overflow-hidden hover:scale-110 hover:-rotate-3"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-30 transition-all duration-300 rounded-full blur-md"></div>
          </a>
        </div>

        {/* Enhanced Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative p-3 rounded-full bg-slate-800/60 backdrop-blur-md border border-purple-500/30 text-gray-300 hover:text-white focus:outline-none transition-all duration-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 group hover:scale-110"
            aria-label="Toggle menu"
          >
            <div className="relative z-10">
              {isOpen ? (
                <X className="w-5 h-5 transition-all duration-500 rotate-180 group-hover:scale-110" />
              ) : (
                <Menu className="w-5 h-5 transition-all duration-500 group-hover:scale-110" />
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-30 transition-all duration-300 rounded-full blur-sm"></div>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <div className={clsx(
        "md:hidden transition-all duration-700 ease-out overflow-hidden",
        isOpen ? 'opacity-100 max-h-screen mt-6' : 'opacity-0 max-h-0'
      )}>
        <div className="relative bg-slate-900/98 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-purple-500/30 border border-purple-500/40 mx-4 overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-indigo-600/5 to-purple-600/10 opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-pulse"></div>
          
          <ul className="relative flex flex-col py-6">
            {menuItems.map((item, index) => (
              <li key={item.id} className="px-6">
                <button 
                  onClick={() => handleMenuItemClick(item.id)}
                  className={clsx(
                    "w-full text-left py-4 px-6 rounded-2xl transition-all duration-500 group relative overflow-hidden transform hover:scale-102",
                    activeSection === item.id
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl shadow-purple-500/40 scale-102"
                      : "text-gray-300 hover:bg-gradient-to-r hover:from-purple-600/30 hover:to-indigo-600/30 hover:text-white"
                  )}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animation: isOpen ? `slideInLeft 0.6s ease-out ${index * 150}ms both` : ''
                  }}
                >
                  <span className="relative z-10 font-medium text-base">{item.label}</span>
                  
                  {/* Animated background for hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-sm"></div>
                  
                  {/* Active state glow */}
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-10 rounded-2xl blur-lg animate-pulse"></div>
                  )}
                </button>
              </li>
            ))}
          </ul>
          
          {/* Enhanced Mobile Social Icons */}
          <div className="relative flex justify-center space-x-8 py-8 mt-4 border-t border-purple-500/30 bg-slate-800/40">
            <a
              href="https://github.com/Taimoor9211"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 text-gray-400 hover:text-white transition-all duration-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 rounded-full group relative overflow-hidden shadow-xl hover:scale-110 hover:rotate-6"
              aria-label="GitHub"
            >
              <Github size={24} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-30 transition-all duration-300 rounded-full blur-md"></div>
            </a>
            <a
              href="https://www.linkedin.com/in/taimoor-goraya-97878a201/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 text-gray-400 hover:text-white transition-all duration-500 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 rounded-full group relative overflow-hidden shadow-xl hover:scale-110 hover:-rotate-6"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-30 transition-all duration-300 rounded-full blur-md"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;