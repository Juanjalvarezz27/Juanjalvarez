import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

// Contenedor de ancho máximo de 1320px con relleno horizontal fluido
export default function Container({
  children,
  className = '',
  as: Component = 'div',
  ...props
}: ContainerProps) {
  return (
    <Component 
      className={`w-full max-w-[1320px] mx-auto px-5 sm:px-8 md:px-10 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
