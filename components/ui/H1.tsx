import React from 'react';

export default function H1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={
        'text-3xl lg:text-5xl font-semibold  leading-8 lg:leading-[4rem] ' +
        className
      }
    >
      {children}
    </h2>
  );
}
