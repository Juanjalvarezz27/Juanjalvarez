// Configuración centralizada de identidad, contacto y enlaces
export const SITE_CONFIG = {
  name: "Juan Álvarez",
  role: "Ingeniero Full-Stack",
  siteUrl: "https://juanalvarez.dev",
  whatsappNumber: "+584129164371",
  whatsappFormatted: "+58 412-9164371",
  email: "jjsalvarezz@gmail.com",
  location: "Trujillo, Venezuela",
  linkedin: "https://www.linkedin.com/in/juan-jose-sarmiento-alvarez-b41734375",
  instagram: "https://www.instagram.com/juanjalvarez/",
};

// Generador de enlace directo a WhatsApp con mensaje codificado
export function getWhatsAppUrl(message: string): string {
  const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
