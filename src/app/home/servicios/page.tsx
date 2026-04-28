import ServiciosHero from "../../components/servicios/ServiciosHero";
import { Metadata } from "next";
import SistemasDetalle from "../../components/servicios/SistemasDetalle";
import PaginasDetalle from "../../components/servicios/PaginasDetalle";
import SolucionesDetalle from "../../components/servicios/SolucionesDetalle";

export const metadata: Metadata = {
  title: "Servicios | Juan Alvarez",
  description: "Desarrollo de Sistemas Web, Páginas y Soluciones Digitales por Juan Alvarez.",
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServiciosHero />
      <SistemasDetalle />
      <PaginasDetalle/>
      <SolucionesDetalle/>
    </main>
  );
}