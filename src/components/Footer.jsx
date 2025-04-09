import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-xl font-bold">Umang Dhandhukiya</h1>

        <div className="flex gap-6">
          <a href="https://github.com/UmangDhandhukiya" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/umang-dhandhukiya05092004/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <Linkedin size={24} />
          </a>
          <a href="umangdhandhukiya97@gmail.com" className="hover:text-gray-400">
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-gray-400">
        © 2025 Umang_./ All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
