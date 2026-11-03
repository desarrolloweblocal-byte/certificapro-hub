import React from 'react';

interface AdSlotProps {
  format?: 'banner' | 'in-article' | 'square' | 'sticky-mobile';
  className?: string;
  slotId?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({ 
  format = 'in-article', 
  className = '',
  slotId = '1234567890'
}) => {
  // Dimensiones fijas garantizadas para evitar CLS (Cumulative Layout Shift) < 0.1
  const formatStyles = {
    'banner': 'w-full min-h-[120px] md:min-h-[140px] max-w-4xl mx-auto my-6',
    'in-article': 'w-full min-h-[260px] md:min-h-[280px] my-8',
    'square': 'w-full min-h-[250px] max-w-[320px] mx-auto my-4',
    'sticky-mobile': 'fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 min-h-[60px] py-2 px-4 shadow-lg md:hidden'
  };

  return (
    <div 
      className={`ad-slot-box relative transition-all duration-300 p-4 ${formatStyles[format]} ${className}`}
      data-ad-format={format}
      aria-label="Espacio publicitario patrocinado"
    >
      {/* Etiqueta obligatoria según directrices de Google AdSense */}
      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-2 px-2 py-0.5 bg-slate-100 rounded">
        Publicidad Patrocinada
      </span>

      {/* 
        Contenedor nativo de Google AdSense:
        Cuando configures tu código real de AdSense, se activará automáticamente
      */}
      <div className="w-full flex flex-col items-center justify-center text-center">
        <ins 
          className="adsbygoogle"
          style={{ display: 'block', minHeight: '60px', width: '100%' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        
        {/* Marcador de vista previa visual mientras se aprueba la cuenta */}
        <div className="flex flex-col items-center justify-center py-4 px-6 text-slate-500">
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-medium text-slate-600">Espacio Optimizado para Google AdSense</span>
          </div>
          <p className="text-[11px] text-slate-500 max-w-md">
            Ubicación estratégica de alto CTR. Formato adaptable optimizado para no desplazar el contenido del lector.
          </p>
        </div>
      </div>
    </div>
  );
};
