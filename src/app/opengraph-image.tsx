import { ImageResponse } from 'next/og';

export const alt = 'Juan Álvarez | Ingeniero Full-Stack';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Generador dinámico de imagen Open Graph para previsualizaciones en redes sociales
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#F3F3F1',
          padding: '80px',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Estela cinética en la esquina superior derecha */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '600px',
            height: '400px',
            background: 'linear-gradient(90deg, #E11D12, #FF3D14, #FFB36B)',
            borderRadius: '9999px',
            filter: 'blur(80px)',
            opacity: 0.5,
            transform: 'rotate(-6deg)',
          }}
        />

        {/* Header con monograma JA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              backgroundColor: '#0B0B0C',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '20px',
            }}
          >
            JA
          </div>
          <span style={{ fontSize: '24px', fontWeight: 600, color: '#0B0B0C' }}>
            Juan Álvarez
          </span>
          <span style={{ fontSize: '20px', color: '#8E8E93' }}>
            • Ingeniero Full-Stack
          </span>
        </div>

        {/* Titular monumental editorial */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h1
            style={{
              fontSize: '76px',
              fontWeight: 800,
              color: '#0B0B0C',
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
              margin: 0,
            }}
          >
            Sistemas reales.
          </h1>
          <h1
            style={{
              fontSize: '76px',
              fontWeight: 800,
              color: '#8E8E93',
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
              margin: 0,
            }}
          >
            Negocios autónomos.
          </h1>
        </div>

        {/* Wordmark inferior */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(11, 11, 12, 0.12)',
            paddingTop: '32px',
          }}
        >
          <span style={{ fontSize: '20px', color: '#5A5A5F', fontFamily: 'monospace' }}>
            Next.js 16 • React 19 • Tailwind CSS • TypeScript
          </span>
          <span style={{ fontSize: '20px', color: '#0B0B0C', fontWeight: 700 }}>
            juanalvarez.dev
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
