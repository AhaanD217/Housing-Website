
import React from "react";
import projectData from "../assets/projectData.js"; 

const Projects = () => {
  return (
    <div className="container mx-auto py-4 pt-20 md:px-20 lg:px-32 my-20 w-30" id="Projects">
      {/* Title Section */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-10 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w mx-auto">
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/* Grid of Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">
                {project.title}
              </h2>
              <p className="text-gray-500 text-sm">{project.location}</p>
              <p className="text-gray-700 font-bold">{project.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

