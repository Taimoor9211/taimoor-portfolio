import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImagelogo from "../../assets/profile11.png";

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
        "fixed top-0 w-full z-50 transition-all duration-300 px-[20vw]",
        isScrolled
          ? "bg-[#0A0520] bg-opacity-95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-[#8245ec] to-[#a855f7] p-0.5 shadow-lg">
  <img 
    src={profileImagelogo} 
    alt="Profile" 
    className="h-full w-full rounded-full object-cover"
  />
</div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button 
                onClick={() => handleMenuItemClick(item.id)}
                className={clsx(
                  "relative px-1 py-2 font-medium transition-colors duration-300",
                  activeSection === item.id
                    ? "text-[#a97cff]"
                    : "text-gray-300 hover:text-white"
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#8245ec] to-[#5a2fbd] rounded-full"></span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/Taimoor9211"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-300 hover:text-white transition-colors duration-300 hover:bg-[#8245ec] hover:bg-opacity-20 rounded-full"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/taimoor-goraya-97878a201/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-300 hover:text-white transition-colors duration-300 hover:bg-[#8245ec] hover:bg-opacity-20 rounded-full"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#8245ec]"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX className="text-2xl text-[#8245ec]" />
            ) : (
              <FiMenu className="text-2xl text-[#8245ec]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={clsx(
        "md:hidden transition-all duration-300 ease-in-out",
        isOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
      )}>
        <div className="bg-[#0A0520] bg-opacity-95 backdrop-blur-lg mt-4 rounded-xl shadow-xl py-4">
          <ul className="flex flex-col space-y-3 px-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => handleMenuItemClick(item.id)}
                  className={clsx(
                    "w-full text-left py-3 px-4 rounded-lg transition-colors duration-300",
                    activeSection === item.id
                      ? "bg-[#8245ec] bg-opacity-20 text-[#a97cff]"
                      : "text-gray-300 hover:bg-[#8245ec] hover:bg-opacity-10 hover:text-white"
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-center space-x-6 mt-6 pt-4 border-t border-gray-800 border-opacity-50">
            <a
              href="https://github.com/Taimoor9211"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-300 hover:text-white transition-colors duration-300 hover:bg-[#8245ec] hover:bg-opacity-20 rounded-full"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/taimoor-goraya-97878a201/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-300 hover:text-white transition-colors duration-300 hover:bg-[#8245ec] hover:bg-opacity-20 rounded-full"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;