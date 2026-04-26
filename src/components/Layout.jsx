import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Topbar />
      <div className="flex-1 flex pt-[76px] relative w-full overflow-hidden">
        <Sidebar />
        <main className="flex-1 lg:ml-64 relative min-h-[calc(100vh-160px)]" id="app-content">
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
