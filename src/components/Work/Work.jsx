import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
      jsx ={true}
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          PROJECTS
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-300 text-base sm:text-lg lg:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:gap-8 lg:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="group border border-gray-700 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/30 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-500 ease-out relative"
          >
            {/* Gradient overlay for hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            <div className="relative p-4 sm:p-6">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 lg:h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gradient-to-r from-purple-900/50 to-pink-900/50 text-xs sm:text-sm font-semibold text-purple-300 rounded-full px-3 py-1 border border-purple-500/30 hover:border-purple-400/50 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="inline-block bg-gray-700 text-xs sm:text-sm font-semibold text-gray-300 rounded-full px-3 py-1">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative border border-gray-700 animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={handleCloseModal}
                className="w-10 h-10 bg-gray-800/80 hover:bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 hover:rotate-90 backdrop-blur-sm border border-gray-600"
              >
                ×
              </button>
            </div>

            <div className="overflow-y-auto max-h-[90vh]">
              {/* Image Section */}
              <div className="relative">
                <div className="w-full bg-gradient-to-br from-gray-800 to-gray-900 px-4 sm:px-6 lg:px-8 pt-6 pb-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full max-h-64 sm:max-h-80 lg:max-h-96 object-contain rounded-xl shadow-2xl mx-auto"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-purple-400">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 text-sm font-semibold text-purple-300 rounded-full px-4 py-2 border border-purple-500/30 hover:border-purple-400/50 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white px-6 py-3 sm:py-4 rounded-xl text-sm sm:text-base lg:text-lg font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25 border border-gray-600 hover:border-gray-500"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                      </svg>
                      View Code
                    </span>
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 sm:py-4 rounded-xl text-sm sm:text-base lg:text-lg font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 border border-purple-500 hover:border-purple-400"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      View Live
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Work;