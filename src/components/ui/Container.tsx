import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

// Contenedor responsivo: máx 1320px (<1920px), 1440px (≥1920px), 1600px (≥2560px)
export default function Container({
  children,
  className = '',
  as: Component = 'div',
  ...props
}: ContainerProps) {
  return (
    <Component 
      className={`w-full max-w-[1320px] 3xl:max-w-[1440px] [@media(min-width:2560px)]:max-w-[1600px] mx-auto px-5 md:px-10 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
