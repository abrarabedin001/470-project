import React from 'react';

export default function H3({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <h2
      style={{ lineHeight: '2rem' }}
      className={
        'text-xl lg:text-3xl font-bold leading-8 lg:leading-[4rem] ' + className
      }
    >
      {children}
    </h2>
  );
}
