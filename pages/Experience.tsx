import React from 'react';
import { Link } from 'react-router-dom';
import { IBM_TIMELINE, WORK_HISTORY_SUMMARY } from '../constants';
import { Calendar, ArrowRight } from 'lucide-react';

const WorkHistory: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Employment History</h2>
          <h3 className="mt-2 text-3xl font-display font-extrabold text-slate-900 sm:text-4xl">My Journey at IBM</h3>
        </div>

        {/* Summary Grid */}
        <div className="mb-20">
          <h4 className="text-xl font-bold text-slate-900 mb-6 border-l-4 border-primary-500 pl-4">Core Competencies & Testing Scope</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WORK_HISTORY_SUMMARY.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-primary-200 transition-colors">
                <h5 className="text-lg font-semibold text-primary-700 mb-2">{item.title}</h5>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 md:left-1/2 md:-ml-px"></div>

          <div className="space-y-12">
            {IBM_TIMELINE.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                
                {/* Dot */}
                <div className="absolute left-8 -ml-3 md:left-1/2 md:-ml-3 w-6 h-6 rounded-full border-4 border-white bg-primary-600 shadow-sm z-10"></div>

                {/* Content */}
                <div className="ml-20 md:ml-0 md:w-1/2 md:px-8 w-full">
                  <div className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-200 relative ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                    
                    {/* Arrow for Desktop */}
                    <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-t border-l border-slate-200 transform rotate-45 ${index % 2 === 0 ? '-left-2 border-r-0 border-b-0' : '-right-2 border-l-0 border-t-0 border-r border-b border-slate-200 rotate-[225deg]'}`}></div>

                    <div className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'md:items-end items-start'}`}>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-bold uppercase mb-2">
                        <Calendar className="w-3 h-3 mr-1" />
                        {item.period}
                      </span>
                      <h4 className="text-xl font-bold text-slate-900">{item.role}</h4>
                      <p className="text-sm font-medium text-slate-500 mb-3">IBM &bull; Bengaluru</p>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation to Projects */}
        <div className="mt-20 flex flex-col items-center text-center bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Want to see what I built?</h3>
          <p className="text-slate-500 mb-6">Dive into the specific projects I delivered for PNC, Amadeus, and MetLife.</p>
          <Link
            to="/projects"
            className="group inline-flex items-center px-8 py-4 text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 shadow-lg transition-all duration-200 transform hover:-translate-y-1"
          >
            View Client Projects
            <ArrowRight className="ml-2 -mr-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default WorkHistory;