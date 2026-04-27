import Hero from "./components/landing/Hero";
import About from "./components/landing/About"; // Importamos el nuevo componente

export default function LandingPage() {
  return (
    <main className="w-full">
      <Hero />
      <About />
    </main>
  );
}