import ContactoHero from "../../components/contacto/ContactoHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Juan Alvarez",
  description: "Canales directos para el desarrollo de tus sistemas y soluciones tecnológicas.",
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-brand-blue">
      <ContactoHero />
    </main>
  );
}