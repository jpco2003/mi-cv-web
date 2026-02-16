import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export const ContactView = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 animate-in fade-in duration-500">
      <h2 className="text-3xl font-bold text-center text-white mb-12">Contacto & Redes</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Tarjeta de Contacto Directo */}
        <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 hover:border-blue-500 transition-colors">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Mail className="text-blue-500" /> Información Directa
          </h3>
          <div className="space-y-6">
            <a href="mailto:jpcarrion19@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
              <div className="p-3 bg-gray-900 rounded-lg"><Mail size={20} /></div>
              <div>
                <p className="text-sm text-gray-500">Correo Electrónico</p>
                <p className="font-medium">jpcarrion19@gmail.com</p>
              </div>
            </a>
            <div className="flex items-center gap-4 text-gray-400">
              <div className="p-3 bg-gray-900 rounded-lg"><Phone size={20} /></div>
              <div>
                <p className="text-sm text-gray-500">Teléfono / WhatsApp</p>
                <p className="font-medium">+593 99 482 5836</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
              <div className="p-3 bg-gray-900 rounded-lg"><MapPin size={20} /></div>
              <div>
                <p className="text-sm text-gray-500">Ubicación</p>
                <p className="font-medium">Quito, Ecuador</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tarjeta de Redes Sociales */}
        <div className="bg-[#111] p-8 rounded-2xl border border-gray-800 hover:border-pink-500 transition-colors">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Instagram className="text-pink-500" /> Redes Sociales
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <SocialBtn href="https://linkedin.com/in/juan-pablo-carrion-41048121b/" icon={<Linkedin size={20} />} label="LinkedIn" color="hover:text-blue-500 hover:border-blue-500" />
            <SocialBtn href="https://github.com/jpco2003" icon={<Github size={20} />} label="GitHub" color="hover:text-white hover:border-white" />
            <SocialBtn href="https://www.instagram.com/juanpablocarriion/" icon={<Instagram size={20} />} label="Instagram" color="hover:text-pink-500 hover:border-pink-500" />
            <SocialBtn href="https://www.facebook.com/juanpablo.carrion.16" icon={<Facebook size={20} />} label="Facebook" color="hover:text-blue-600 hover:border-blue-600" />
            <SocialBtn href="https://twitter.com/JuanPabloCO18" icon={<Twitter size={20} />} label="Twitter / X" color="hover:text-sky-500 hover:border-sky-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialBtn = ({ href, icon, label, color }) => (
  <a href={href} target="_blank" className={`flex flex-col items-center justify-center gap-2 p-4 bg-gray-900/50 rounded-xl border border-gray-800 transition-all ${color} group`}>
    <div className="text-gray-400 group-hover:scale-110 transition-transform">{icon}</div>
    <span className="text-sm font-medium text-gray-400 group-hover:text-inherit">{label}</span>
  </a>
);