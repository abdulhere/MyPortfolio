import React from 'react';
import { CERTIFICATIONS, EDUCATION } from '../constants';
import { Award, GraduationCap, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Certifications Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
             <div className="p-3 bg-primary-100 rounded-full text-primary-600">
                <Award className="w-8 h-8" />
             </div>
             <div>
               <h2 className="text-3xl font-display font-bold text-slate-900">Certifications</h2>
               <p className="text-slate-500">Professional credentials and continuous learning.</p>
             </div>
          </div>
          
          <div className="grid gap-4">
            {CERTIFICATIONS.map((cert, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start transition-transform hover:scale-[1.01]"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{cert.name}</h3>
                  {cert.issuer && <p className="text-slate-500 text-sm mt-1">{cert.issuer}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
             <div className="p-3 bg-primary-100 rounded-full text-primary-600">
                <GraduationCap className="w-8 h-8" />
             </div>
             <div>
               <h2 className="text-3xl font-display font-bold text-slate-900">Education</h2>
               <p className="text-slate-500">Academic background.</p>
             </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-full -mr-10 -mt-10 opacity-50"></div>
            <h3 className="text-xl font-bold text-slate-900 relative z-10">{EDUCATION.degree}</h3>
            <p className="text-primary-600 text-lg font-medium mt-1 relative z-10">{EDUCATION.institution}</p>
            <p className="text-slate-500 mt-4 inline-block px-3 py-1 bg-slate-100 rounded-md text-sm font-medium">
              {EDUCATION.year}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Certifications;
