import React, { useState } from 'react';
import { Satellite } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const navItems = [
    { id: '/', label: 'Home', href: '/' },
    { id: '/about', label: 'About Us', href: '/about' },
    { id: '/mission', label: 'Mission', href: '/mission' },
    { id: '/portals', label: 'Portals', href: '/portals' },
    { id: '/news', label: 'Recent News', href: '/news' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 mt-4 rounded-2xl">
      <nav className="container mx-auto px-6 py-4 ml-3">
        <div className="flex items-center justify-between">
          {/* Left Logos Section */}
          <div className="flex items-center space-x-6 ">
            <div className="flex items-center space-x-4 ">
              {/* First logo image */}
              <img
                src="https://www.mmpsrpc.in/static/media/ksv.c6540b125992f5167fc7.png"
                alt="Logo 1"
                className="w-auto h-16 rounded-lg object-cover"
              />

              {/* Second logo image */}
              <img
                src="https://indiadesignsystem.bombaydc.com/assets/india-designs/display/ISRO/color.svg"
                alt="Logo 2"
                className="w-auto h-16  rounded-lg object-cover "
              />
            </div>

            {/* Main Logo - Clickable to go home */}
            <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="relative">
                
              </div>
              <div>
                <h1 className="text-4xl font-bold text-glow">Cloud Motion Predecitor</h1>
                <p className="text-xs text-sky-300"></p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                onClick={() => setActiveTab(item.id)}
                className={`text-sm font-medium transition-all duration-300 hover:text-sky-300 ${
                  location.pathname === item.id 
                    ? 'text-sky-400 border-b-2 border-sky-400' 
                    : 'text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
