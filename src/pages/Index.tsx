
import Header from '@/components/Header';
import Hero from '@/components/Hero';

import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black satellite-bg">
      <Header />
      <main>
        <Hero />
        <section className="section-padding">
          <div className="container mx-auto">
            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
