export type ProviderType = 'Google' | 'Harvard' | 'Microsoft' | 'IBM' | 'Fundación Telefónica' | 'Santander Open Academy';

export type CourseCategory = 'Inteligencia Artificial' | 'Programación y Web' | 'Ciberseguridad' | 'Marketing y Negocios' | 'Gestión y Liderazgo';

export interface Course {
  id: string;
  slug: string;
  title: string;
  provider: ProviderType;
  providerLogoText: string;
  category: CourseCategory;
  duration: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  certificate: 'Oficial Gratuito' | 'Auditoría Gratuita' | 'Diploma Digital Verificado';
  rating: number;
  reviewsCount: number;
  studentsCount: string;
  summary: string;
  description: string;
  imageUrl: string;
  modules: string[];
  prerequisites: string;
  officialEnrollUrl: string;
  badge?: string;
  updatedAt: string;
}

export interface ArticleGuide {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  authorRole: string;
  publishedDate: string;
  heroImage: string;
  content: {
    heading: string;
    body: string;
    keyPoints?: string[];
  }[];
  relatedCourseIds: string[];
}

export type ActiveView = 
  | { type: 'home' }
  | { type: 'course'; courseSlug: string }
  | { type: 'guides' }
  | { type: 'guide'; guideSlug: string }
  | { type: 'category'; categoryName: CourseCategory }
  | { type: 'legal'; page: 'privacy' | 'terms' | 'cookies' | 'about' | 'contact' };
