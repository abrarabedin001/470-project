import React from 'react';

export default function P({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`  text-md lg:text-lg font-semi-bold leading-7 text-gray-700 ${className}`}
    >
      {children}
    </div>
  );
}
