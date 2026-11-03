import React, { useState, useEffect, useMemo } from 'react';
import { Navbar } from './components/ui/Navbar';
import { Footer } from './components/ui/Footer';
import { CookieConsent } from './components/ui/CookieConsent';
import { AdSlot } from './components/ui/AdSlot';
import { HeroSection } from './components/features/HeroSection';
import { FilterBar } from './components/features/FilterBar';
import { CourseCard } from './components/features/CourseCard';
import { CourseDetail } from './components/features/CourseDetail';
import { GuidesView } from './components/features/GuidesView';
import { GuideDetail } from './components/features/GuideDetail';
import { LegalView } from './components/features/LegalView';
import { COURSES_DATA } from './data/courses';
import { GUIDES_DATA } from './data/guides';
import type { ActiveView } from './types';
import { BellRing, ArrowRight, Check } from 'lucide-react';

export function App() {
  const [currentView, setCurrentView] = useState<ActiveView>({ type: 'home' });
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProvider, setSelectedProvider] = useState('all');
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [subscriberEmail, setSubscriberEmail] = useState('');

  // Scroll to top on page transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  // Filtered courses based on search, category and provider
  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter(course => {
      const matchesSearch = 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = 
        selectedCategory === 'all' || course.category === selectedCategory;

      const matchesProvider = 
        selectedProvider === 'all' || course.provider === selectedProvider;

      return matchesSearch && matchesCategory && matchesProvider;
    });
  }, [searchQuery, selectedCategory, selectedProvider]);

  const handleNavigate = (view: ActiveView) => {
    if (view.type === 'category') {
      setSelectedCategory(view.categoryName);
      setCurrentView({ type: 'home' });
    } else {
      setCurrentView(view);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (subscriberEmail) {
      setEmailSubscribed(true);
      setSubscriberEmail('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Top Navigation */}
      <Navbar currentView={currentView} onNavigate={handleNavigate} />

      {/* Main Content Body */}
      <main className="flex-1">
        {/* VIEW 1: HOME */}
        {currentView.type === 'home' && (
          <div>
            <HeroSection 
              onExploreCourses={() => {
                const el = document.getElementById('catalogo-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              onNavigateGuides={() => setCurrentView({ type: 'guides' })}
            />

            <div id="catalogo-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              
              {/* Strategic AdSense Leaderboard Placement */}
              <AdSlot format="banner" slotId="home-top-leaderboard" />

              {/* Course Filters */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    Catálogo de Cursos Oficiales Acreditados
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Mostrando {filteredCourses.length} de {COURSES_DATA.length} convocatorias verificadas
                  </p>
                </div>
              </div>

              <FilterBar 
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                selectedProvider={selectedProvider}
                onSelectProvider={setSelectedProvider}
              />

              {/* Course Cards Grid */}
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course, index) => (
                    <React.Fragment key={course.id}>
                      <CourseCard 
                        course={course}
                        onSelect={(c) => setCurrentView({ type: 'course', courseSlug: c.slug })}
                      />
                      {/* Insert in-feed ad after every 4 courses for high viewability without clutter */}
                      {index === 3 && (
                        <div className="md:col-span-2 lg:col-span-3">
                          <AdSlot format="banner" slotId="home-in-feed-banner" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
                  <p className="text-sm font-semibold text-slate-700">No se encontraron cursos con ese criterio de búsqueda</p>
                  <p className="text-xs text-slate-400 mt-1">Prueba a restablecer los filtros para ver todas las convocatorias disponibles.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setSelectedProvider('all');
                    }}
                    className="mt-4 px-4 py-2 bg-blue-50 text-blue-700 text-xs font-semibold rounded-lg hover:bg-blue-100"
                  >
                    Restablecer Filtros
                  </button>
                </div>
              )}

              {/* Featured Guides Callout Section for SEO & Interlinking */}
              <div className="mt-20 pt-12 border-t border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                  <div>
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                      Guías de Ayuda Oficial
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight mt-2">
                      Aprende a Eximirte de Cuotas y Obtener Diplomas Físicos
                    </h3>
                  </div>
                  <button
                    onClick={() => setCurrentView({ type: 'guides' })}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 self-start sm:self-auto"
                  >
                    Ver todas las guías ({GUIDES_DATA.length}) <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {GUIDES_DATA.map(guide => (
                    <div 
                      key={guide.id}
                      onClick={() => setCurrentView({ type: 'guide', guideSlug: guide.slug })}
                      className="group bg-white p-5 rounded-2xl border border-slate-200/90 hover:border-blue-400 hover:shadow-md cursor-pointer transition-all flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                          {guide.category} • {guide.readTime}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                          {guide.title}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          {guide.excerpt}
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-blue-600 mt-4 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        Leer guía completa →
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter / Convocatorias Alert Box */}
              <div className="mt-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    <BellRing className="w-3.5 h-3.5" />
                    <span>Avisos de Nuevas Becas y Convocatorias</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    Recibe los nuevos cursos de Google y Harvard antes de que se agoten las plazas
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    Te enviamos una notificación semanal exclusivamente cuando se abran convocatorias gratuitas oficiales con plazas limitadas. Cero spam.
                  </p>
                </div>

                <div className="w-full md:w-auto flex-shrink-0">
                  {emailSubscribed ? (
                    <div className="p-4 bg-emerald-500/20 border border-emerald-400/30 rounded-2xl text-emerald-300 text-xs font-semibold flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>¡Suscrito con éxito! Te avisaremos al instante.</span>
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                      <input 
                        type="email"
                        required
                        value={subscriberEmail}
                        onChange={(e) => setSubscriberEmail(e.target.value)}
                        placeholder="Introduce tu correo electrónico..."
                        className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <button 
                        type="submit"
                        className="btn-press px-5 py-3 bg-blue-500 hover:bg-blue-400 text-white text-xs sm:text-sm font-bold rounded-xl whitespace-nowrap shadow-md"
                      >
                        Activar Alertas
                      </button>
                    </form>
                  )}
                  <p className="text-[11px] text-slate-400 mt-2">
                    Cumplimos con el RGPD. Puedes darte de baja en cualquier momento con un clic.
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* VIEW 2: COURSE DETAIL */}
        {currentView.type === 'course' && (() => {
          const course = COURSES_DATA.find(c => c.slug === currentView.courseSlug) || COURSES_DATA[0];
          return (
            <CourseDetail 
              course={course}
              onBack={() => setCurrentView({ type: 'home' })}
              onSelectCourse={(c) => setCurrentView({ type: 'course', courseSlug: c.slug })}
              allCourses={COURSES_DATA}
            />
          );
        })()}

        {/* VIEW 3: GUIDES DIRECTORY */}
        {currentView.type === 'guides' && (
          <GuidesView 
            onSelectGuide={(g) => setCurrentView({ type: 'guide', guideSlug: g.slug })}
          />
        )}

        {/* VIEW 4: SINGLE GUIDE DETAIL */}
        {currentView.type === 'guide' && (() => {
          const guide = GUIDES_DATA.find(g => g.slug === currentView.guideSlug) || GUIDES_DATA[0];
          return (
            <GuideDetail 
              guide={guide}
              onBack={() => setCurrentView({ type: 'guides' })}
              onSelectCourse={(c) => setCurrentView({ type: 'course', courseSlug: c.slug })}
              allCourses={COURSES_DATA}
            />
          );
        })()}

        {/* VIEW 5: LEGAL PAGES */}
        {currentView.type === 'legal' && (
          <LegalView pageKey={currentView.page} />
        )}
      </main>

      {/* Footer with Mandatory Legal Links */}
      <Footer onNavigate={handleNavigate} />

      {/* GDPR & Google AdSense Certified CMP Banner */}
      <CookieConsent />

    </div>
  );
}

export default App;
