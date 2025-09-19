import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import Logo from "../../assets/profile11.png";

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
        "fixed top-0 w-full z-50 transition-all duration-500 px-4 md:px-8 lg:px-12 xl:px-20",
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-xl shadow-2xl shadow-purple-500/10 border-b border-purple-500/20 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center group cursor-pointer">
          <div className="relative h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 p-0.5 shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-300">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 flex items-center justify-center text-white font-bold text-lg">
              <img src={Logo} alt="" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-75 blur-md group-hover:blur-lg transition-all duration-300"></div>
          </div>
          
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-2 lg:space-x-4 bg-slate-800/30 backdrop-blur-md rounded-full px-6 py-3 border border-purple-500/20">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button 
                onClick={() => handleMenuItemClick(item.id)}
                className={clsx(
                  "relative px-4 py-2 font-medium transition-all duration-300 rounded-full",
                  activeSection === item.id
                    ? "text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500/30"
                    : "text-gray-300 hover:text-white hover:bg-purple-500/20"
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-20 blur-sm"></div>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-3">
          <a
            href="https://github.com/Taimoor9211"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-400 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 rounded-full group relative overflow-hidden"
            aria-label="GitHub"
          >
            <Github size={20} className="relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full blur-sm"></div>
          </a>
          <a
            href="https://www.linkedin.com/in/taimoor-goraya-97878a201/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-400 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 rounded-full group relative overflow-hidden"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full blur-sm"></div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative p-3 rounded-full bg-slate-800/50 backdrop-blur-md border border-purple-500/20 text-gray-300 hover:text-white focus:outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 group"
            aria-label="Toggle menu"
          >
            <div className="relative z-10">
              {isOpen ? (
                <X className="text-xl transition-transform duration-300 rotate-90" />
              ) : (
                <Menu className="text-xl transition-transform duration-300" />
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full blur-sm"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={clsx(
        "md:hidden transition-all duration-500 ease-out overflow-hidden",
        isOpen ? 'opacity-100 max-h-96 mt-6' : 'opacity-0 max-h-0'
      )}>
        <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-purple-500/20 border border-purple-500/30 mx-4 overflow-hidden">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-indigo-600/10 opacity-50"></div>
          
          <ul className="relative flex flex-col py-4">
            {menuItems.map((item, index) => (
              <li key={item.id} className="px-4">
                <button 
                  onClick={() => handleMenuItemClick(item.id)}
                  className={clsx(
                    "w-full text-left py-4 px-6 rounded-xl transition-all duration-300 group relative overflow-hidden",
                    activeSection === item.id
                      ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/30"
                      : "text-gray-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-indigo-600/20 hover:text-white"
                  )}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <span className="relative z-10 font-medium">{item.label}</span>
                  {activeSection !== item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </button>
              </li>
            ))}
          </ul>
          
          {/* Mobile Social Icons */}
          <div className="relative flex justify-center space-x-6 py-6 mt-2 border-t border-purple-500/20 bg-slate-800/30">
            <a
              href="https://github.com/Taimoor9211"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 text-gray-400 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 rounded-full group relative overflow-hidden shadow-lg"
              aria-label="GitHub"
            >
              <Github size={24} className="relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full blur-sm"></div>
            </a>
            <a
              href="https://www.linkedin.com/in/taimoor-goraya-97878a201/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 text-gray-400 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 rounded-full group relative overflow-hidden shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full blur-sm"></div>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;