'use client';

import { siteContent } from '@/config';
import Image from 'next/image';
import { useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

export default function ProjectsSection() {
  const featuredProjects = siteContent.projects.filter(project => project.featured);
  const otherProjects = siteContent.projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation animation="fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Koleksi proyek yang telah saya kerjakan, menampilkan kemampuan dalam pengembangan web full-stack
            </p>
          </div>
        </ScrollAnimation>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured={true} />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Other Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured={false} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    liveUrl?: string;
    sourceUrl?: string;
  };
  featured: boolean;
}

function ProjectCard({ project, featured }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  
  // Function to get emoji based on project title/id
  const getProjectEmoji = (title: string, id: string) => {
    if (title.includes('UangSakti') || id.includes('uang')) return '💰';
    if (title.includes('Movie') || title.includes('Film') || id.includes('movie')) return '🎬';
    if (title.includes('Portfolio') || id.includes('portfolio')) return '🌟';
    if (title.includes('E-commerce') || title.includes('Shop')) return '🛒';
    if (title.includes('Blog') || title.includes('News')) return '📝';
    if (title.includes('Chat') || title.includes('Message')) return '💬';
    if (title.includes('Game') || title.includes('Gaming')) return '🎮';
    if (title.includes('Food') || title.includes('Restaurant')) return '🍕';
    if (title.includes('Travel') || title.includes('Tour')) return '✈️';
    if (title.includes('Education') || title.includes('Learning')) return '📚';
    if (title.includes('Health') || title.includes('Medical')) return '🏥';
    if (title.includes('Finance') || title.includes('Bank')) return '🏦';
    return '💻'; // Default emoji for tech projects
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
      featured ? 'h-full' : ''
    }`}>
      {/* Project Image or Icon Section */}
      {project.image && !imageError ? (
        // With Image - Using regular img for better compatibility
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={() => {
              console.error('Image failed to load:', project.image);
              setImageError(true);
            }}
            onLoad={() => {
              console.log('Image loaded successfully:', project.image);
            }}
          />
        </div>
      ) : (
        // Without Image - Enhanced design with larger icon and gradient
        <div className="relative h-48 bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-100 flex flex-col items-center justify-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 transform rotate-12 scale-150"></div>
          </div>
          
          {/* Project Icon */}
          <div className="relative z-10 text-center">
            <div className="text-7xl mb-2 filter drop-shadow-lg">
              {getProjectEmoji(project.title, project.id)}
            </div>
            <div className="text-sm font-medium text-purple-700 bg-white/80 px-3 py-1 rounded-full">
              {project.technologies[0] || 'Web Project'}
            </div>
          </div>
        </div>
      )}

      {/* Project Content */}
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-900 mb-3">
          {project.title}
        </h4>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-block px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center px-4 py-2 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-purple-600 hover:text-purple-600 transition-all duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
