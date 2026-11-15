// Modelo de datos para testimonios y prueba social
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
  projectSlug?: string;
}

// Lista de testimonios (vacía hasta incorporar reseñas auditadas)
export const TESTIMONIALS: Testimonial[] = [];
