import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
<div className="text-center mb-6 md:mb-8 lg:mb-10">
  <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
  <div className="w-20 xs:w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
  <p className="text-gray-400 mt-3 xs:mt-4 text-base sm:text-lg font-semibold max-w-3xl mx-auto px-2">
    A collection of my technical skills and expertise honed through various projects and experiences
  </p>
</div>

{/* Skill Categories */}
<div className="flex flex-wrap gap-4 md:gap-5 lg:gap-6 py-6 md:py-8 lg:py-10 justify-center">
  {SkillsInfo.map((category) => (
    <div
      key={category.title}
      className="bg-gray-900 backdrop-blur-md px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8 w-full xs:w-[95%] sm:w-[85%] md:w-[48%] lg:w-[45%] rounded-2xl border border-white 
      shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
    >
      <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-gray-400 mb-4 md:mb-6 text-center">
        {category.title}
      </h3>

      {/* Skill Items - Responsive grid */}
      <Tilt
        key={category.title}
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        perspective={1000}
        scale={1.05}
        transitionSpeed={1000}
        gyroscope={true}
        className="w-full"
      >
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 gap-2 xs:gap-3 sm:gap-4 w-full">
          {category.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col xs:flex-row items-center justify-center xs:justify-start space-y-1 xs:space-y-0 xs:space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-3 text-center"
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex-shrink-0"
              />
              <span className="text-xs xs:text-xs sm:text-sm text-gray-300 whitespace-nowrap overflow-hidden text-ellipsis max-w-[80px] xs:max-w-[90px] sm:max-w-full">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </Tilt>
    </div>
  ))}
</div>
  </section>
);

export default Skills;