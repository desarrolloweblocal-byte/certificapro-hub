import React, { useState, useEffect } from 'react';
import { ShieldCheck, Settings, Check } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [adsEnabled, setAdsEnabled] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem('certificapro_cookie_consent');
    if (!consent) {
      // Delay slightly for smooth page entry
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('certificapro_cookie_consent', JSON.stringify({
      necessary: true,
      analytics: true,
      advertising: true,
      date: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem('certificapro_cookie_consent', JSON.stringify({
      necessary: true,
      analytics: false,
      advertising: false,
      date: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('certificapro_cookie_consent', JSON.stringify({
      necessary: true,
      analytics: analyticsEnabled,
      advertising: adsEnabled,
      date: new Date().toISOString()
    }));
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Consentimiento de cookies y privacidad"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xl rounded-2xl p-5 text-slate-800 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
    >
      <div className="flex items-start gap-3">
        <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl flex-shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h2 className="text-sm font-bold text-slate-900 tracking-tight">
            Transparencia y Privacidad (RGPD)
          </h2>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            Utilizamos cookies técnicas y tecnologías publicitarias de socios como Google AdSense para financiar nuestro catálogo de formación gratuita y ofrecer anuncios personalizados.
          </p>

          {showSettings && (
            <div className="mt-3.5 space-y-2 border-t border-slate-100 pt-3">
              <label className="flex items-center justify-between text-xs text-slate-700">
                <span className="font-medium">Cookies Técnicas</span>
                <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-semibold">Siempre Activas</span>
              </label>

              <label className="flex items-center justify-between text-xs text-slate-700 cursor-pointer">
                <span>Analíticas (Métricas anónimas)</span>
                <input 
                  type="checkbox" 
                  checked={analyticsEnabled} 
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  aria-label="Permitir cookies analíticas"
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4" 
                />
              </label>

              <label className="flex items-center justify-between text-xs text-slate-700 cursor-pointer">
                <span>Publicidad Google AdSense</span>
                <input 
                  type="checkbox" 
                  checked={adsEnabled} 
                  onChange={(e) => setAdsEnabled(e.target.checked)}
                  aria-label="Permitir cookies de publicidad personalizada"
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-4 h-4" 
                />
              </label>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {!showSettings ? (
              <>
                <button
                  onClick={handleAcceptAll}
                  className="btn-press flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm"
                >
                  <Check className="w-3.5 h-3.5" />
                  Aceptar Todo
                </button>
                <button
                  onClick={handleRejectNonEssential}
                  className="btn-press px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg"
                >
                  Rechazar no esenciales
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
                  title="Configurar opciones"
                  aria-label="Configurar opciones de cookies"
                >
                  <Settings className="w-4 h-4" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleSavePreferences}
                  className="btn-press flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg"
                >
                  Guardar Preferencias
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="px-3 py-2 bg-slate-100 text-slate-600 text-xs rounded-lg"
                >
                  Volver
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};
