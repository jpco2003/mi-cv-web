import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            JP
          </h3>
          <p className="text-gray-500 text-sm mt-1">
            Construyendo soluciones digitales desde Quito, Ecuador.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/jpco2003" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
          <a href="mailto:jpcarrion19@gmail.com" className="text-gray-400 hover:text-red-400 transition-colors"><Mail size={20} /></a>
          <a href="https://twitter.com/JuanPabloCO18" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
        </div>

        <div className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Juan Pablo Carrión.
        </div>
      </div>
    </footer>
  );
};