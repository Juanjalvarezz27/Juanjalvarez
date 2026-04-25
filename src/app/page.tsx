import Hero from "./components/landing/Hero";

export default function LandingPage() {
  return (
    <main className="w-full">
      {/* SECCIÓN 1: HERO */}
      <Hero />

      {/* Las siguientes secciones irán aquí abajo */}
      <section className="min-h-screen bg-brand-dark flex items-center justify-center">
        <h2 className="font-anton text-5xl text-white uppercase italic">
          [ Próximamente: Sección Sobre Mí ]
        </h2>
      </section>
    </main>
  );
}