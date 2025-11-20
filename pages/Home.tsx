import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, PROFILE_IMAGE_URL } from '../constants';
import { ArrowRight, Download, Mail, MapPin, Phone, Linkedin } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-50 pt-10 pb-12 md:pt-20 md:pb-24">
        {/* Decorative Blobs */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 left-0 -mt-20 -ml-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              {/* <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-xs font-bold tracking-wide uppercase mb-4">
                Available for Opportunities
              </span> */}
              <h1 className="text-4xl tracking-tight font-display font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                <span className="block">Hi, I'm</span>
                <span className="block text-primary-600">{CONTACT_INFO.name}</span>
              </h1>
              <p className="mt-2 text-xl text-slate-500 font-medium">{CONTACT_INFO.role}</p>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                {CONTACT_INFO.summary}
              </p>

              {/* Visa Badge */}
              <div className="mt-6 inline-flex items-center px-4 py-2 rounded-md bg-green-50 border border-green-200 text-green-700 text-sm font-medium">
                <span className="flex h-2 w-2 rounded-full bg-green-600 mr-2"></span>
                {CONTACT_INFO.visa}
              </div>

              {/* Contact Info Grid */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-slate-500">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-primary-500" />
                  {CONTACT_INFO.location}
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-primary-500" />
                  {CONTACT_INFO.email}
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-primary-500" />
                  {CONTACT_INFO.phone}
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-4 h-4 mr-2 text-primary-500" />
                  <a
                    href="https://www.linkedin.com/in/abdulrahuman16/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    linkedin.com/in/abdulrahuman16
                  </a>
                </div>
              </div>

              <div className="mt-10 flex justify-center lg:justify-start gap-4">
                <Link
                  to="/work-history"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-transform hover:-translate-y-1"
                >
                  View Work History
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 border border-slate-300 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-transform hover:-translate-y-1"
                >
                  Download Resume
                  <Download className="ml-2 -mr-1 h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-5 mt-12 lg:mt-0 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600 to-purple-400 rounded-[2rem] transform translate-x-4 translate-y-4 shadow-lg"></div>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4] w-72 md:w-80 lg:w-96 bg-white">
                  <img
                    src={PROFILE_IMAGE_URL}
                    alt={CONTACT_INFO.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats/Highlights */}
      <div className="bg-white py-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            {[
               { label: 'Years Experience', value: '4+' },
               { label: 'Client Engagements', value: '4' },
               { label: 'Regression Pass Rate', value: '95%' },
            ].map((stat) => (
              <div key={stat.label} className="px-4 py-6 bg-slate-50 rounded-xl shadow-sm border border-slate-100">
                <dt className="text-base font-medium text-slate-500">{stat.label}</dt>
                <dd className="mt-2 text-4xl font-extrabold text-primary-600">{stat.value}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;