import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { Calendar, ChevronDown, CheckCircle2, Building2, ArrowRight, FolderGit2 } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | 'All'>('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Extract unique years from projects
  const years = useMemo(() => {
    const allYears = new Set<number>();
    PROJECTS.forEach(p => {
      const start = p.startYear;
      const end = p.endYear === 'Present' ? new Date().getFullYear() : p.endYear;
      for (let y = start; y <= end; y++) {
        allYears.add(y);
      }
    });
    return Array.from(allYears).sort((a, b) => b - a);
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedYear === 'All') return PROJECTS;
    return PROJECTS.filter(p => {
      const end = p.endYear === 'Present' ? new Date().getFullYear() : p.endYear;
      return selectedYear >= p.startYear && selectedYear <= end;
    });
  }, [selectedYear]);

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Portfolio</h2>
          <h3 className="mt-2 text-3xl font-display font-extrabold text-slate-900 sm:text-4xl">Client Projects</h3>
          <p className="mt-4 text-lg text-slate-500">
            Detailed breakdown of my contributions by client and year.
          </p>
        </div>

        {/* Interactive Controls */}
        <div className="flex flex-col items-center mb-12">
          <div className="relative inline-block text-left w-64">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="inline-flex justify-between w-full rounded-lg border border-slate-300 shadow-sm px-5 py-3 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              {selectedYear === 'All' ? 'Show All Projects' : `Year: ${selectedYear}`}
              <ChevronDown className="-mr-1 ml-2 h-5 w-5" />
            </button>

            {isDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <div className="py-1">
                  <button
                    onClick={() => { setSelectedYear('All'); setIsDropdownOpen(false); }}
                    className={`block w-full text-left px-4 py-2 text-sm ${selectedYear === 'All' ? 'bg-primary-50 text-primary-700' : 'text-slate-700 hover:bg-slate-100'}`}
                  >
                    Show All Projects
                  </button>
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => { setSelectedYear(year); setIsDropdownOpen(false); }}
                      className={`block w-full text-left px-4 py-2 text-sm ${selectedYear === year ? 'bg-primary-50 text-primary-700' : 'text-slate-700 hover:bg-slate-100'}`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Project Cards */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={`${project.client}-${index}`} project={project} />
          ))}
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">No projects found for this year.</p>
            </div>
          )}
        </div>

        {/* Navigation to Skills */}
        <div className="mt-16 flex justify-center">
          <Link
            to="/skills"
            className="group inline-flex items-center px-8 py-4 text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1"
          >
            Explore Technical Skills
            <ArrowRight className="ml-2 -mr-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md hover:border-primary-200">
      <div className="border-b border-slate-100 bg-slate-50/50 px-6 py-5 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Building2 className="w-4 h-4 text-primary-500" />
              <h3 className="text-lg font-bold text-slate-900">{project.client}</h3>
            </div>
            <p className="text-xl text-primary-700 font-semibold">{project.name}</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-600 shadow-sm mb-1">
              <Calendar className="w-4 h-4 mr-2 text-slate-400" />
              {project.period}
            </div>
            <span className="text-sm text-slate-500 font-medium">{project.role}</span>
          </div>
        </div>
      </div>
      
      <div className="px-6 py-6 sm:px-8">
        <div className="mb-6">
          <h4 className="text-sm font-medium text-slate-900 mb-3 uppercase tracking-wider">Key Achievements & Responsibilities</h4>
          <ul className="space-y-3">
            {project.description.map((desc, i) => (
              <li key={i} className="flex items-start text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-slate-100 text-slate-800 border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;