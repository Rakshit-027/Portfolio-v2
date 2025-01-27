import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Code, User, Briefcase, Mail, Home, Menu, X } from "lucide-react";
import ShinyText from "../pages/ShinyText";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/about", icon: User, label: "About" },
    { to: "/projects", icon: Code, label: "Projects" },
    { to: "/experience", icon: Briefcase, label: "Experience" },
    { to: "/contact", icon: Mail, label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-inherit to-gray-800 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-gradient text-2xl font-bold">
            <ShinyText text="Rakshit Waghmare" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {links.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                className="relative px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-2">
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <Icon size={16} />
                  </motion.div>
                  <span>{label}</span>
                </div>
                {location.pathname === to && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none transition-all duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800 shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map(({ to, icon: Icon, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={closeMenu}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300
                    ${
                      location.pathname === to
                        ? "text-white bg-gradient-to-r from-pink-500 to-purple-500"
                        : "text-gray-300 hover:text-white hover:bg-gray-700"
                    }`}
                >
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <Icon size={20} />
                  </motion.div>
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;