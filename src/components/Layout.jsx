import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="flex flex-col min-h-screen">
      <Topbar toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
      <div className="flex-1 flex pt-[4.75rem] w-full">
        <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        <main className="flex-1 lg:ml-[16rem] w-full lg:max-w-[calc(100vw-16rem)] flex flex-col main-content" id="app-content">
          <AnimatePresence mode="wait">
            <div key={location.pathname} className="flex-1 w-full flex flex-col">
              <Outlet />
            </div>
          </AnimatePresence>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
