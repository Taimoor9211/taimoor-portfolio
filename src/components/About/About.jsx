import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.png';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-2"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 md:gap-8 lg:gap-12">
  {/* Left Side */}
  <div className="w-full md:w-[55%] lg:w-1/2 text-center md:text-left mt-6 md:mt-0">
  {/* Greeting */}
  <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2 leading-tight">
    Hi, I am
  </h1>
  {/* Name */}
  <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 leading-tight">
    Taimoor Fayyaz
  </h2>
  {/* Skills Heading with Typing Effect */}
  <h3 className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4 text-[#8245ec] leading-tight min-h-[1.5em]">
    <span className="text-white">I am a </span>
    <ReactTypingEffect
      text={[
        'Frontend Developer',
        'App Developer',
        'UI/UX Designer',
        'Coder',
      ]}
      speed={100}
      eraseSpeed={50}
      typingDelay={500}
      eraseDelay={2000}
      cursorRenderer={(cursor) => (
        <span className="text-[#8245ec]">{cursor}</span>
      )}
    />
  </h3>
  {/* About Me Paragraph */}
  <p className="text-sm xs:text-base sm:text-lg md:text-base lg:text-lg text-gray-400 mb-6 md:mb-8 lg:mb-10 mt-4 md:mt-6 lg:mt-8 leading-relaxed">
    I am a full-stack developer with over 2 years of experience in
    building scalable web applications. Skilled in both front-end and
    back-end development, I specialize in the MERN stack and other
    modern technologies to create seamless user experiences and
    efficient solutions.
  </p>
  {/* Resume Button */}
  <a
    href="https://drive.google.com/file/d/140KNZlNh2Fcb6hgMYjYa7H88IPNuQdNl/view"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block text-white py-2 px-6 sm:py-3 sm:px-8 rounded-full mt-3 md:mt-5 text-base sm:text-lg font-bold transition duration-300 transform hover:scale-105"
    style={{
      background: 'linear-gradient(90deg, #8245ec, #a855f7)',
      boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
    }}
  >
    DOWNLOAD CV
  </a>
</div>
  
  {/* Right Side - Image Container */}
  <div className="w-full md:w-[45%] lg:w-1/2 flex justify-center">
    <Tilt
      className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
      <img
        src={profileImage}
        alt="Taimoor Fayyaz"
        className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
      />
    </Tilt>
  </div>
</div>
    </section>
  );
};

export default About;
