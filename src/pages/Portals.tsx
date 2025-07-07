
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Portals from '@/components/Portals';

const PortalsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black satellite-bg">
      <Header />
      <main className="pt-20">
        <Portals />
      </main>
      <Footer />
    </div>
  );
};

export default PortalsPage;
