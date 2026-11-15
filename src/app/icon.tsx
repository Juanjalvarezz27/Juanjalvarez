import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

// Generador del favicon con el monograma JA del sistema de diseño
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0B0B0C',
          borderRadius: '9px',
          color: '#FFFFFF',
          fontWeight: 800,
          fontSize: '15px',
          fontFamily: 'sans-serif',
          letterSpacing: '-0.05em',
        }}
      >
        JA
      </div>
    ),
    {
      ...size,
    }
  );
}
