import React from 'react';
import { Cloud, Satellite, ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* About Our Project */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card p-8 md:p-12 text-center hover-lift">
            <h3 className="text-3xl md:text-4xl font-bold text-sky-400 mb-6">About Our Project</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              The <strong>ST-LDM project</strong> brings together the power of advanced deep learning and satellite data to accurately forecast atmospheric developments using INSAT imagery.
            </p>

            <div className="text-left max-w-3xl mx-auto space-y-4 text-gray-300 text-base leading-relaxed">
              <ul className="list-none space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-sky-400 w-5 h-5 mt-1 mr-3" />
                  <span><strong>3D UNet architecture</strong> for learning both spatial and temporal cloud dynamics.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-sky-400 w-5 h-5 mt-1 mr-3" />
                  <span><strong>Latent diffusion modeling</strong> for generating high-fidelity and accurate forecasts.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-sky-400 w-5 h-5 mt-1 mr-3" />
                  <span><strong>Spectral conditioning</strong> on INSAT channels – <em>VIS, IR, SWIR, WV</em> – for multispectral analysis.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-sky-400 w-5 h-5 mt-1 mr-3" />
                  <span><strong>Minute-level temporal embeddings</strong> to capture and forecast cloud motion evolution.</span>
                </li>
              </ul>

              <p className="mt-6">
                We train our model using aligned sequences of historical satellite images, enabling it to produce realistic future frames that preserve cloud structures, motion patterns, and intensity variations.
              </p>

              <p>
                The system includes a user-friendly web interface allowing users to:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Upload satellite image sequences</li>
                <li>Visualize predicted vs actual cloud developments</li>
                <li>Access performance metrics like <strong>SSIM</strong>, <strong>PSNR</strong>, and <strong>MAE</strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Overview & Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project Overview */}
          <div className="glass-card p-8 hover-lift animate-fade-in-up">
            <div className="flex items-center mb-6">
              <Cloud className="w-8 h-8 text-sky-400 mr-3 animate-float" />
              <h3 className="text-2xl font-bold text-sky-400">Project Overview</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We are building a state-of-the-art cloud motion forecasting system using a Conditional Spatio-Temporal Latent Diffusion Model (ST-LDM), tailored for multi-channel INSAT-3D/3DR/3DS satellite data.
              Our model uses generative AI to forecast atmospheric developments for the next 1–3 hours with exceptional accuracy.
              This aids in nowcasting, early disaster mitigation, and agricultural planning in weather-sensitive regions.
            </p>
          </div>

          {/* Our Mission */}
          <div className="glass-card p-8 hover-lift animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center mb-6">
              <Satellite className="w-8 h-8 text-sky-400 mr-3 animate-float" style={{ animationDelay: '1s' }} />
              <h3 className="text-2xl font-bold text-sky-400">Our Mission</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our mission is to bridge the gap between Earth observation and AI by creating tools that enable fast, explainable, and reliable weather forecasting.
              We aim to empower meteorologists, disaster responders, and farmers through real-time, open-access forecasting technology rooted in deep learning and remote sensing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
