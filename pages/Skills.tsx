import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { Monitor, Cpu, Terminal, Database, Layout, Cloud, Bot, ClipboardCheck, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  Cpu,
  Terminal,
  Database,
  Layout,
  Cloud,
  Bot,
  ClipboardCheck
};

const Skills: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Technical Expertise</h2>
          <h3 className="mt-2 text-3xl font-display font-extrabold text-slate-900 sm:text-4xl">Tools & Technologies</h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            A comprehensive toolkit built over 4+ years of solving complex QA challenges, now enhanced with GenAI capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category) => {
            const Icon = iconMap[category.icon] || Terminal;
            
            return (
              <div 
                key={category.name}
                className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 transition-all duration-300 hover:shadow-lg hover:border-primary-200"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-primary-100 to-transparent rounded-full opacity-0 group-hover:opacity-50 transition-opacity blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-110 bg-white text-primary-600 group-hover:text-primary-700">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h4 className="ml-4 text-xl font-bold text-slate-900">{category.name}</h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm transition-colors bg-white text-slate-700 border-slate-200 group-hover:border-primary-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;