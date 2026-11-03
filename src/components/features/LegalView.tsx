import React, { useState } from 'react';
import { Shield, FileText, Cookie, Info, Mail, Send, CheckCircle } from 'lucide-react';
import { LEGAL_PAGES } from '../../data/legals';

interface LegalViewProps {
  pageKey: 'privacy' | 'terms' | 'cookies' | 'about' | 'contact';
}

export const LegalView: React.FC<LegalViewProps> = ({ pageKey }) => {
  const content = LEGAL_PAGES[pageKey] || LEGAL_PAGES.privacy;
  
  // Contact form state
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getIcon = () => {
    switch (pageKey) {
      case 'privacy': return <Shield className="w-6 h-6 text-blue-600" />;
      case 'terms': return <FileText className="w-6 h-6 text-blue-600" />;
      case 'cookies': return <Cookie className="w-6 h-6 text-blue-600" />;
      case 'about': return <Info className="w-6 h-6 text-blue-600" />;
      case 'contact': return <Mail className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-50 rounded-2xl border border-blue-100">
          {getIcon()}
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {content.title}
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Última revisión legal: {content.lastUpdated}
          </p>
        </div>
      </div>

      {/* Sections */}
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
        {content.sections.map((sec, idx) => (
          <section key={idx} className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-2">
              {sec.heading}
            </h2>
            <div className="whitespace-pre-line text-slate-600 leading-relaxed text-sm">
              {sec.body}
            </div>
          </section>
        ))}

        {/* Interactive Contact Form on Contact Page */}
        {pageKey === 'contact' && (
          <div className="mt-8 pt-8 border-t border-slate-100">
            <h3 className="text-base font-bold text-slate-900 mb-4">
              Envíanos un mensaje directo
            </h3>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-800">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm">Mensaje Enviado con Éxito</h4>
                  <p className="text-xs text-emerald-700 mt-0.5">
                    Gracias por ponerte en contacto. Nuestro equipo responderá en un plazo máximo de 48 horas.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Nombre Completo</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Carlos Martínez"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Correo Electrónico</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nombre@ejemplo.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Asunto</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Consulta sobre curso, reporte de enlace o colaboración"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Mensaje</label>
                  <textarea 
                    rows={4}
                    required 
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escribe tu consulta detallada aquí..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-press inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md shadow-blue-500/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Consulta Oficial</span>
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
