import React, { useState, useEffect } from 'react';
import ProfileImage from '../../assets/profile2.png'; // Replace with your actual image path

// Simple typing effect component
const TypingEffect = ({ texts, speed = 100, eraseSpeed = 50, pause = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    let timeout;

    if (isTyping) {
      if (currentText.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), pause);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, eraseSpeed);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isTyping, texts, speed, eraseSpeed, pause]);

  return (
    <span>
      {currentText}
      <span className="animate-pulse text-purple-400">|</span>
    </span>
  );
};

// Simple tilt effect component
const TiltCard = ({ children, className = "" }) => {
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      className={`transition-transform duration-300 ease-out ${className}`}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Create a placeholder image
  const createPlaceholderImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');
    
    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 400, 400);
    gradient.addColorStop(0, '#8245ec');
    gradient.addColorStop(1, '#a855f7');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 400);
    
    // Add some geometric shapes for visual interest
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.beginPath();
    ctx.arc(200, 200, 150, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.beginPath();
    ctx.arc(200, 200, 80, 0, Math.PI * 2);
    ctx.fill();
    
    return canvas.toDataURL();
  };

  const placeholderImage = createPlaceholderImage();

  return (
    <section
      id="about"
      className="min-h-screen py-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 font-sans relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto pt-16 md:pt-24 lg:pt-32">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 lg:gap-16">
          
          {/* Left Side - Content */}
          <div className={`w-full lg:w-3/5 text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Greeting with stagger animation */}
            <div className="space-y-2 mb-6">
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{animationDelay: '0.2s'}}>
                Hi, I am
              </h1>
              
              <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{animationDelay: '0.4s'}}>
                Taimoor Fayyaz
              </h2>
            </div>

            {/* Typing Effect Section */}
            <div className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                 style={{animationDelay: '0.6s'}}>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight min-h-[1.5em] md:min-h-[2em]">
                <span className="text-white">I am a </span>
                <span className="text-purple-400 font-bold">
                  <TypingEffect
                    texts={[
                      'Frontend Developer',
                      'App Developer', 
                      'UI/UX Designer',
                      'Full Stack Developer',
                      'Problem Solver'
                    ]}
                    speed={100}
                    eraseSpeed={50}
                    pause={2000}
                  />
                </span>
              </h3>
            </div>

            {/* Description */}
            <div className={`mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                 style={{animationDelay: '0.8s'}}>
              <p className="text-base sm:text-lg md:text-xl lg:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I am a passionate full-stack developer with over{' '}
                <span className="text-purple-400 font-semibold">2 years of experience</span>{' '}
                in building scalable web applications. Skilled in both front-end and back-end development, 
                I specialize in the{' '}
                <span className="text-purple-400 font-semibold">MERN stack</span>{' '}
                and other modern technologies to create seamless user experiences and efficient solutions.
              </p>
            </div>

            {/* CTA Button with enhanced styling */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                 style={{animationDelay: '1s'}}>
              <a
                href="https://drive.google.com/file/d/140KNZlNh2Fcb6hgMYjYa7H88IPNuQdNl/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-500 ease-out rounded-full overflow-hidden hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #8245ec 0%, #a855f7 50%, #8245ec 100%)',
                  boxShadow: '0 0 30px rgba(130, 69, 236, 0.4), 0 0 60px rgba(130, 69, 236, 0.2), 0 0 100px rgba(130, 69, 236, 0.1)',
                }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>DOWNLOAD CV</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
                
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 opacity-75 blur-md group-hover:blur-lg transition-all duration-300"></div>
              </a>
            </div>

            {/* Additional info or stats */}
            <div className={`mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                 style={{animationDelay: '1.2s'}}>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-purple-400">2+</div>
                <div className="text-sm md:text-base text-gray-400">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-purple-400">20+</div>
                <div className="text-sm md:text-base text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left col-span-2 md:col-span-1">
                <div className="text-2xl md:text-3xl font-bold text-purple-400">∞</div>
                <div className="text-sm md:text-base text-gray-400">Coffee Consumed</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image Container */}
          <div className={`w-full lg:w-2/5 flex justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
               style={{animationDelay: '0.4s'}}>
            <div className="relative">
              
              {/* Floating elements around image */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500/30 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
              <div className="absolute -top-2 -right-6 w-4 h-4 bg-indigo-500/40 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-3 -left-2 w-6 h-6 bg-purple-400/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute -bottom-4 -right-4 w-5 h-5 bg-indigo-400/30 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>

              <TiltCard className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 opacity-30 blur-2xl scale-110 animate-pulse"></div>
                
                {/* Main image container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                  
                  {/* Border with gradient */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 p-1 shadow-2xl shadow-purple-500/50">
                    <div className="w-full h-full rounded-full bg-slate-900 p-2">
                      <img
                        src={ProfileImage} // Replace with your actual image path
                        alt="Taimoor Fayyaz"
                        className="w-full h-full rounded-full object-cover hover:scale-105 transition-transform duration-500"
                        style={{
                          filter: 'brightness(1.1) contrast(1.1)',
                          boxShadow: 'inset 0 0 50px rgba(130, 69, 236, 0.2)'
                        }}
                      />
                    </div>
                  </div>

                  {/* Rotating border effect */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-400/40 animate-spin"></div>
                  <div className="absolute inset-4 rounded-full border border-dotted border-indigo-400/30 animate-ping"></div>
                </div>
              </TiltCard>

              {/* Background decoration */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 left-10 w-20 h-20 bg-purple-600/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-600/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;