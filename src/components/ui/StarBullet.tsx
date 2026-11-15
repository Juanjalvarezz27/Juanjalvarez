import React from 'react';

interface StarBulletProps {
  size?: number;
  className?: string;
  rotate?: boolean;
}

// Icono SVG de estrella de 8 puntas con rotación continua opcional
export default function StarBullet({
  size = 14,
  className = '',
  rotate = false,
}: StarBulletProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-accent shrink-0 ${rotate ? 'animate-[spin_20s_linear_infinite]' : ''} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M12 0L13.8 8.2L22 10L13.8 11.8L12 20L10.2 11.8L2 10L10.2 8.2L12 0Z"
        fill="currentColor"
      />
      <path
        d="M12 3.5L14.7 9.3L20.5 12L14.7 14.7L12 20.5L9.3 14.7L3.5 12L9.3 9.3L12 3.5Z"
        fill="currentColor"
        opacity="0.45"
      />
    </svg>
  );
}
