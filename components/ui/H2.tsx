import React from 'react';

export default function H2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={
        'text-3xl lg:text-5xl font-bold  leading-8 lg:leading-[4rem] ' +
        className
      }
    >
      {children}
    </div>
  );
}
