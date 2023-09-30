import React from 'react';

export default function PrimaryButton({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <button className="group relative h-12 px-4 overflow-hidden rounded-lg button_bg_grad text-lg border-2 border-transparent hover:border-[#9C1CF3] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transform active:scale-75 transition-transform">
      {/* <div className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-in group-hover:w-full"></div> */}
      <span className="relative text-white group-hover:text-[#9C1CF3] tracking-wider">
        {children}
      </span>
    </button>
    // <button className={'bg-[#EEECFB] rounded ' + className}>{children}</button>
    // bg-[#9C1CF3]/70   <-- old one
  );
}
