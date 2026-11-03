import React from 'react';
import { Award, Shield, FileText, Cookie, Mail, Info, Heart } from 'lucide-react';
import type { ActiveView } from '../../types';

interface FooterProps {
  onNavigate: (view: ActiveView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand info */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                <Award className="w-4 h-4" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">Certifica<span className="text-blue-500">Pro</span></span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Plataforma independiente dedicada a localizar, verificar y difundir convocatorias oficiales de cursos 100% gratuitos con certificado avalado por instituciones académicas e industrias tecnológicas.
            </p>
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-1.5">
              <span>Hecho con rigor para estudiantes</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            </div>
          </div>

          {/* Quick links to categories */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Categorías Principales
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'category', categoryName: 'Inteligencia Artificial' })}
                  className="hover:text-white transition-colors"
                >
                  Cursos de Inteligencia Artificial
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'category', categoryName: 'Programación y Web' })}
                  className="hover:text-white transition-colors"
                >
                  Programación y Desarrollo de Software
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'category', categoryName: 'Ciberseguridad' })}
                  className="hover:text-white transition-colors"
                >
                  Ciberseguridad y Redes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'category', categoryName: 'Marketing y Negocios' })}
                  className="hover:text-white transition-colors"
                >
                  Marketing Digital y Comercio
                </button>
              </li>
            </ul>
          </div>

          {/* Guides and resources */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Guías de Acreditación
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'guide', guideSlug: 'como-conseguir-certificados-oficiales-google-gratis' })}
                  className="hover:text-white transition-colors text-left"
                >
                  Cómo obtener Certificados de Google
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'guide', guideSlug: 'harvard-cs50-gratis-como-inscribirse-diploma' })}
                  className="hover:text-white transition-colors text-left"
                >
                  Diploma Gratuito CS50 de Harvard
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'guide', guideSlug: 'certificaciones-ciberseguridad-mas-demandadas-sin-experiencia' })}
                  className="hover:text-white transition-colors text-left"
                >
                  Certificaciones de Ciberseguridad
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'guides' })}
                  className="hover:text-blue-400 text-blue-400 transition-colors font-medium"
                >
                  Ver todas las guías →
                </button>
              </li>
            </ul>
          </div>

          {/* Obligatory Legal Pages for AdSense Compliance */}
          <div>
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-4">
              Transparencia y Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'legal', page: 'privacy' })}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5 text-slate-400" />
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'legal', page: 'terms' })}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-400" />
                  Aviso Legal y Condiciones
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'legal', page: 'cookies' })}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Cookie className="w-3.5 h-3.5 text-slate-400" />
                  Política de Cookies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'legal', page: 'about' })}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Info className="w-3.5 h-3.5 text-slate-400" />
                  Sobre Nosotros (Misión)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate({ type: 'legal', page: 'contact' })}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  Contacto y Soporte
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer and copyright */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} CertificaPro. Todos los derechos reservados. Portal divulgativo independiente. Las marcas registradas (Google, Harvard, Microsoft, IBM) pertenecen a sus respectivos propietarios.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>RGPD & ePrivacy Compliant</span>
            <span>•</span>
            <span>Google AdSense Approved Standard</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
