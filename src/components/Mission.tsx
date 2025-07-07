import React from 'react';
import { Cloud, Satellite, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Mission = () => {
  const missions = [
    {
      name: 'INSAT-3DR',
      description: "INSAT or the Indian National Satellite System is a series of multipurpose Geo-stationary satellites launched by ISRO to satisfy the telecommunications, broadcasting, meteorology, and search and rescue needs of India.",
      highlights: [
        'Ground receiving system to receive data',
        'Data Reception (DR) system to generate raw data (L0) files',
        'Data Processing (DP) system to process L0 data and produce L1B data files (Calibrated and Geo located)',
        'Product generation and Dissemination system'
      ],
      image: 'https://www.eoportal.org/api/cms/documents/d/eoportal/insat3dr_auto11-jpeg',
      status: 'Active',
      link: 'https://www.mosdac.gov.in/insat-3dr'
    },
    {
      name: 'INSAT-3D',
      description: "INSAT or the Indian National Satellite System is a series of multipurpose Geo-stationary satellites launched by ISRO to satisfy the telecommunications, broadcasting, meteorology, and search and rescue needs of India.",
      highlights: [
        'Ground receiving system to receive data',
        'Data Reception (DR) system to generate raw data (L0) files',
        'Data Processing (DP) system to process L0 data and produce L1B data files (Calibrated and Geo located)',
        'Product generation and Dissemination system'
      ],
      image: 'https://img.jagranjosh.com/images/2024/February/222024/What-is-INSAT-3DS-Satellite.webp',
      status: 'Active',
      link: 'https://www.mosdac.gov.in/insat-3d'
    },
    {
      name: 'INSAT-3DS',
      description: "INSAT or the Indian National Satellite System is a series of multipurpose Geo-stationary satellites launched by ISRO to satisfy the telecommunications, broadcasting, meteorology, and search and rescue needs of India.",
      highlights: [
        'Ground receiving system to receive data',
        'Data Reception (DR) system to generate raw data (L0) files',
        'Data Processing (DP) system to process L0 data and produce L1B data files (Calibrated and Geo located)',
        'Product generation and Dissemination system'
      ],
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202402/insat-3ds-satellite-082331536-1x1_0.jpg?VersionId=FbOnGpXYtMHevNVrKiopl7boDLtZZv1b',
      status: 'Active',
      link: 'https://www.mosdac.gov.in/insat-3ds'
    }
  ];

  return (
    <section id="mission" className="section-padding relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">Our Missions</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto rounded-full mb-6"></div>
          
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {missions.map((mission, index) => (
            <div key={index} className="glass-card p-8 md:p-12 hover-lift animate-fade-in-up">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-4">
                    <Satellite className="w-8 h-8 text-sky-400 mr-3 animate-float" />
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      mission.status === 'Active' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {mission.status}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-sky-400 mb-4">{mission.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{mission.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-sky-300 mb-4">Mission Highlights</h4>
                    <div className="space-y-3">
                      {mission.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start">
                          <ArrowRight className="w-5 h-5 text-sky-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to={mission.link} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25">
                      Visit Mission Page
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                <div className="relative">
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <img 
                      src={mission.image} 
                      alt={mission.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
