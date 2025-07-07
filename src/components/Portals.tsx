import React from 'react';
import { Cloud, Satellite, ArrowRight, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portals = () => {
  const portals = [
    {
      title: 'MOSDAC Portal',
      description: 'Meteorological and Oceanographic Satellite Data Archival Centre for accessing weather and ocean data from ISRO satellites.',
      features: [
        'Satellite Data Archive',
      'Weather Products',
      'Oceanographic Parameters',
      'Interactive Maps & Tools'
      ],
      buttonText: 'Access Portal',
      
      gradient: 'from-sky-500 to-blue-600',
      link: 'https://www.mosdac.gov.in/' 
    },
    {
      title: 'MOSDAC Realtime Weather', 
      description: 'Interactive real-time satellite visualizations of cloud motion, rainfall, temperature and other geospatial products over India.',
      features: [
        'Cloud Motion Maps',
      'Rainfall Distribution',
      'Temperature Patterns',
      'Satellite Imagery (India)'
      ],
      buttonText: 'Access Portal',
     
      gradient: 'from-sky-500 to-blue-600',
      link: 'https://mosdac.gov.in/live/index_one.php?url_name=india'
    },
    {
      title: 'ISRO Portal',
      description: 'Access the Indian Space Research Organisation’s missions, data services, and public resources.',
      features: [
        'Satellite Missions',
      'Launch Vehicles',
      'Remote Sensing Data',
      'Space Applications'
      ],
      buttonText: 'Access Portal',
      
      gradient: 'from-sky-500 to-blue-600',
      link: 'https://www.isro.gov.in/' 
    },
    {
      title: 'MoES Official Portal',
      description: 'Centralized platform monitoring weather, ocean, climate, seismology, hazards.',
      features: [
        'Interactive Dashboards', 'Hazard Alerts', 'Climate Monitoring', 'Real-time Updates'
      ],
      buttonText: 'Access Portal',
      
      gradient: 'from-sky-500 to-blue-600',
      link: 'https://www.moes.gov.in/' 
    }
  ];

  return (
    <section id="portals" className="section-padding relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Access Portals</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto rounded-full mb-6"></div>
          
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {portals.map((portal, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover-lift animate-fade-in-up group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 animate-float" style={{ animationDelay: `${index}s` }}>
                  
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {portal.title}
                </h3>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {portal.description}
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-sky-300 mb-4">Key Features:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {portal.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <ArrowRight className="w-4 h-4 text-sky-400 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a 
                href={portal.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className={`w-full bg-gradient-to-r ${portal.gradient} hover:shadow-lg hover:shadow-sky-500/25 text-white font-semibold py-3 rounded-full transition-all duration-300 group`}
                >
                  {portal.buttonText}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portals;
