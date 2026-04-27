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
    <>
      <Topbar toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} />
      <div className="flex-1 flex pt-[4.75rem] relative w-full overflow-hidden">
        <Sidebar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        <main className="flex-1 lg:ml-64 relative min-h-[calc(100vh-10rem)]" id="app-content">
          <AnimatePresence mode="wait">
            <div key={location.pathname} className="w-full h-full absolute inset-0">
              <Outlet />
            </div>
          </AnimatePresence>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
