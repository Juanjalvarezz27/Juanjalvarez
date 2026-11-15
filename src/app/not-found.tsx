import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Header from '@/src/components/landing/Header';
import Footer from '@/src/components/landing/Footer';
import { Container, Button, Eyebrow } from '@/src/components/ui';

// Página 404 personalizada con el sistema de diseño Kinetic Editorial
export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg text-ink selection:bg-accent selection:text-white font-sans relative w-full overflow-x-hidden antialiased flex flex-col justify-between">
      <Header />

      <main className="pt-32 sm:pt-44 pb-20 sm:pb-32 my-auto">
        <Container>
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            
            <Eyebrow text="Error 404 · Ruta no encontrada" rotateStar={true} className="mb-6" />

            <span className="font-display font-bold text-display-xl text-muted/30 select-none leading-none mb-2">
              404
            </span>

            <h1 className="font-display font-semibold text-display-md tracking-[-0.04em] text-ink leading-tight mb-4">
              Página no encontrada
            </h1>

            <p className="text-body-lg text-ink-soft font-normal leading-relaxed mb-8">
              La dirección que buscas no existe o ha sido reestructurada. Puedes regresar al portafolio para continuar explorando.
            </p>

            <Link href="/#inicio">
              <Button variant="primary" icon={<ArrowLeft className="w-4 h-4" />}>
                Volver al inicio
              </Button>
            </Link>

          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
