import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, Instagram, Send, CheckCircle2 } from 'lucide-react';

export const ContactView = () => {
  const [status, setStatus] = useState(''); 

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('enviando');
    const formData = new FormData(event.target);

    // Tu llave de Web3Forms
    formData.append("access_key", "79979634-d3f0-4509-8962-60642751d8ea");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus('exito');
        event.target.reset(); 
        setTimeout(() => setStatus(''), 5000); 
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 animate-in fade-in duration-500">
      <h2 className="text-3xl font-bold text-center text-white mb-12">Trabajemos Juntos</h2>
      
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* COLUMNA IZQUIERDA: FORMULARIO DE CONTACTO */}
        <div className="bg-[#111] p-8 rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
          
          <h3 className="text-2xl font-bold text-white mb-6">Envíame un mensaje</h3>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Tu Nombre</label>
              <input 
                type="text" 
                name="name" 
                required 
                className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="Ej. Carlos Mendoza"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Tu Correo Electrónico</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="carlos@empresa.com"
              />
            </div>

            {/* --- NUEVO CAMPO DE TELÉFONO --- */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Tu Teléfono (Opcional)</label>
              <input 
                type="tel" 
                name="phone" 
                className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="Ej. +593 99 123 4567"
              />
            </div>
            {/* ------------------------------- */}
            
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
              <textarea 
                name="message" 
                required 
                rows="4"
                className="w-full bg-gray-900 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                placeholder="Hola Juan Pablo, me interesa tu perfil para un proyecto de..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'enviando'}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-bold py-3 rounded-xl transition-all hover:scale-[1.02] active:scale-95"
            >
              {status === 'enviando' ? 'Enviando...' : (
                <>Enviar Mensaje <Send size={18} /></>
              )}
            </button>

            {status === 'exito' && (
              <div className="flex items-center justify-center gap-2 text-green-400 bg-green-900/20 p-3 rounded-lg border border-green-900 mt-4">
                <CheckCircle2 size={18} /> ¡Mensaje enviado con éxito! Te responderé pronto.
              </div>
            )}
            {status === 'error' && (
              <div className="text-red-400 text-sm text-center mt-2">
                Hubo un problema. Por favor, intenta enviarme un correo directamente.
              </div>
            )}
          </form>
        </div>

        {/* COLUMNA DERECHA: INFO Y REDES */}
        <div className="space-y-8">
          
          <div className="bg-[#111] p-8 rounded-3xl border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Mail className="text-blue-500" /> Contacto Directo
            </h3>
            <div className="space-y-6">
              <a href="mailto:jpcarrion19@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group">
                <div className="p-3 bg-gray-900 rounded-xl group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-colors"><Mail size={20} /></div>
                <div>
                  <p className="text-sm text-gray-500">Correo Electrónico</p>
                  <p className="font-medium text-white">jpcarrion19@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="p-3 bg-gray-900 rounded-xl"><Phone size={20} /></div>
                <div>
                  <p className="text-sm text-gray-500">Teléfono / WhatsApp</p>
                  <p className="font-medium text-white">+593 99 482 5836</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="p-3 bg-gray-900 rounded-xl"><MapPin size={20} /></div>
                <div>
                  <p className="text-sm text-gray-500">Ubicación</p>
                  <p className="font-medium text-white">Quito, Ecuador</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#111] p-8 rounded-3xl border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-6">Mis Redes</h3>
            <div className="grid grid-cols-5 gap-3">
              <SocialBtn href="https://linkedin.com/in/juan-pablo-carrion-41048121b/" icon={<Linkedin size={22} />} color="hover:bg-blue-600 hover:text-white hover:border-blue-500" />
              <SocialBtn href="https://github.com/jpco2003" icon={<Github size={22} />} color="hover:bg-gray-700 hover:text-white hover:border-gray-500" />
              <SocialBtn href="https://www.instagram.com/juanpablocarriion/" icon={<Instagram size={22} />} color="hover:bg-pink-600 hover:text-white hover:border-pink-500" />
              <SocialBtn href="https://www.facebook.com/juanpablo.carrion.16" icon={<Facebook size={22} />} color="hover:bg-blue-800 hover:text-white hover:border-blue-700" />
              <SocialBtn href="https://twitter.com/JuanPabloCO18" icon={<Twitter size={22} />} color="hover:bg-sky-500 hover:text-white hover:border-sky-500" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const SocialBtn = ({ href, icon, color }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center p-4 bg-gray-900 rounded-xl border border-gray-800 text-gray-400 transition-all duration-300 ${color} hover:-translate-y-1`}>
    {icon}
  </a>
);