import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Abdul Rahuman S. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
