import React from 'react';
import { ArrowRight, Cloud, Satellite } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col justify-center overflow-hidden cloud-formations weather-pattern cloud-motion-bg">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-32 bg-blue-500/8 rounded-full animate-float weather-animation blur-sm"></div>
        <div className="absolute top-40 right-20 w-48 h-24 bg-cyan-400/8 rounded-full animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-80 h-40 bg-indigo-400/8 rounded-full animate-float blur-sm" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-16 bg-sky-400/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/2 left-1/3 w-40 h-20 bg-blue-300/8 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-6 h-6">
            
          </div>
        </div>
        <div className="absolute top-1/4 left-1/5 w-96 h-48 bg-gradient-to-r from-blue-500/4 to-cyan-400/4 rounded-full animate-pulse blur-md"></div>
        <div className="absolute bottom-1/4 right-1/5 w-80 h-40 bg-gradient-to-l from-indigo-500/4 to-blue-400/4 rounded-full animate-pulse blur-md" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/3 left-1/2 w-2 h-20 bg-gradient-to-b from-sky-400/30 to-transparent rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-16 bg-gradient-to-b from-blue-400/30 to-transparent rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-4 gap-2">
           
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-glow leading-tight  ">
            Cloud Motion
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300">
              Predictor
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Revolutionary AI-powered cloud motion prediction technology providing real-time atmospheric 
            intelligence with precision satellite imagery, advanced meteorological analysis, and predictive modeling 
            for weather forecasting and climate monitoring.
          </p>

          <div className="flex justify-center">
            <Link to="/login">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 group min-w-[200px]"
              >
                Get Started
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
