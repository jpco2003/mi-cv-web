import React from 'react';
import { Database, Server, Code2, HeartHandshake, Library, Search, FileText, ScanEye } from 'lucide-react';
import { Reveal } from './Reveal';
import { translations } from '../translations';

export const Projects = ({ lang }) => {
  const t = translations[lang].projects;

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-16 text-white flex items-center justify-center gap-3">
        <Code2 className="text-blue-500" /> {t.title}
      </h2>

      <div className="grid md:grid-cols-1 gap-12">

        {/* PROYECTO 1: TESIS */}
        <Reveal>
          <div className="relative group rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all duration-500">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            
            <div className="relative p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 text-blue-400 text-xs font-bold border border-blue-800 mb-6">
                  {t.items[0].badge}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {t.items[0].title1}<span className="text-blue-500">{t.items[0].title2}</span>{t.items[0].title3}<span className="text-blue-500">{t.items[0].title4}</span>
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {t.items[0].description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Zoho Deluge', 'API REST', 'SAP ERP', 'Scrum'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700">{tag}</span>
                  ))}
                </div>
              </div>
              
              <div className="h-full min-h-[200px] bg-gray-900/50 rounded-xl border border-gray-800 p-6 flex flex-col justify-center space-y-4">
                 <div className="flex justify-between items-center text-gray-400 text-sm font-mono">
                    <span>SAP ERP</span>
                    <span className="text-xs text-green-500">● {lang === 'es' ? 'Conectado' : 'Connected'}</span>
                    <span>Zoho Cloud</span>
                 </div>
                 <div className="relative h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                   <div className="absolute top-0 left-0 h-full bg-blue-600 w-2/3 animate-[pulse_2s_infinite]"></div>
                 </div>
                 <div className="flex items-center gap-2 text-xs text-blue-400 bg-blue-900/20 p-2 rounded border border-blue-900/50">
                    <Database size={14}/>
                    <span>{lang === 'es' ? 'Sincronizando Stock...' : 'Syncing Stock...'}</span>
                 </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* PROYECTO 2: CÁRITAS */}
        <Reveal>
          <div className="relative group rounded-2xl bg-[#0f0f0f] border border-gray-800 overflow-hidden hover:border-red-500/50 transition-all duration-500">
            <div className="relative p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/20 text-red-400 text-xs font-bold border border-red-900/50 mb-6">
                  <HeartHandshake size={14} /> {t.items[1].badge}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t.items[1].title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {t.items[1].description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {['JavaScript Vanilla', 'Zoho Embedded', 'Zoho Deluge'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700">{tag}</span>
                  ))}
                </div>
                <div className="mt-6">
                  <a href="https://github.com/jpco2003/zoho-booking-widget" target="_blank" rel="noreferrer" className="text-red-400 hover:text-red-300 text-sm font-bold flex items-center gap-2 underline transition-colors">
                    {t.viewCode} <Code2 size={16} />
                  </a>
                </div>
              </div>
              <div className="relative bg-white/5 rounded-lg p-6 border border-gray-700 font-mono text-sm shadow-2xl">
                  <div className="flex items-center justify-between mb-4 border-b border-gray-700 pb-2">
                      <span className="text-white font-bold text-xs md:text-sm">{lang === 'es' ? 'Agendamiento Cáritas' : 'Caritas Scheduling'}</span>
                  </div>
                  <div className="space-y-3">
                      <div className="flex gap-2">
                          <div className="w-1/2 bg-gray-900 p-2 rounded border border-gray-600 text-xs text-center text-white">{lang === 'es' ? 'Lunes 12' : 'Monday 12'}</div>
                          <div className="w-1/2 bg-green-900/30 text-green-400 p-2 rounded border border-green-800 font-bold text-center text-xs">09:00 AM</div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* PROYECTO 3: ISMAC */}
        <Reveal>
          <div className="relative group rounded-2xl bg-[#0f0f0f] border border-gray-800 overflow-hidden hover:border-purple-500/50 transition-all duration-500">
            <div className="relative p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/20 text-purple-400 text-xs font-bold border border-purple-900/50 mb-6">
                  <Library size={14} /> {t.items[2].badge}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t.items[2].title} <span className="text-purple-500">ISMAC</span>
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {t.items[2].description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Python', 'Flask', 'MySQL', 'Bootstrap'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700">{tag}</span>
                  ))}
                </div>
                <div className="mt-6">
                  <a href="https://github.com/jpco2003/ISMAC" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 text-sm font-bold flex items-center gap-2 underline transition-colors">
                    {t.viewCode} <Code2 size={16} />
                  </a>
                </div>
              </div>
              <div className="relative bg-white/5 rounded-lg border border-gray-700 overflow-hidden shadow-2xl">
                  <div className="bg-gray-900 px-4 py-2 border-b border-gray-700 flex items-center gap-2">
                     <div className="text-[10px] text-gray-400 font-mono">localhost:5000/repositorio</div>
                  </div>
                  <div className="p-6 font-sans">
                      <div className="flex gap-2 mb-4">
                         <div className="flex-1 bg-gray-800 border border-gray-600 rounded px-3 py-1.5 text-xs text-gray-400 flex items-center gap-2"><Search size={12}/> {lang === 'es' ? 'Buscar por autor...' : 'Search by author...'}</div>
                      </div>
                      <div className="space-y-2">
                         <div className="flex items-center gap-3 p-2 bg-gray-800/50 rounded border border-gray-700/50">
                            <div className="p-1.5 bg-red-900/30 rounded text-red-400"><FileText size={14}/></div>
                            <div><div className="text-xs font-bold text-gray-200">{lang === 'es' ? 'Sistema de Inventario.pdf' : 'Inventory System.pdf'}</div></div>
                         </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* PROYECTO 4: EYE TRACKING */}
        <Reveal>
          <div className="relative group rounded-2xl bg-[#0f0f0f] border border-gray-800 overflow-hidden hover:border-orange-500/50 transition-all duration-500">
            <div className="relative p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-900/20 text-orange-400 text-xs font-bold border border-orange-900/50 mb-6">
                  <ScanEye size={14} /> {t.items[3].badge}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t.items[3].title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {t.items[3].description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {['JavaScript', 'WebGazer.js', 'Heatmap.js', 'UX Research'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700">{tag}</span>
                  ))}
                </div>
                <div className="mt-6">
                  <a href="https://github.com/jpco2003/EYETracking" target="_blank" rel="noreferrer" className="text-orange-400 hover:text-orange-300 text-sm font-bold flex items-center gap-2 underline transition-colors">
                    {t.viewCode} <Code2 size={16} />
                  </a>
                </div>
              </div>
              <div className="relative bg-white/5 rounded-lg border border-gray-700 overflow-hidden shadow-2xl h-64 flex flex-col">
                  <div className="flex-1 bg-gray-800 relative p-6 flex flex-col items-center justify-center text-center">
                      <div className="px-4 py-1.5 bg-blue-600 rounded text-[10px] text-white">{lang === 'es' ? 'Registrarse' : 'Sign Up'}</div>
                      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-24 h-24 bg-red-500/40 blur-xl rounded-full"></div>
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-yellow-500/50 blur-lg rounded-full animate-pulse"></div>
                  </div>
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};