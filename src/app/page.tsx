import Hero from "./components/landing/Hero";
import About from "./components/landing/About";
import Benefits from "./components/landing/Benefits";

export default function LandingPage() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Benefits />
    </main>
  );
}