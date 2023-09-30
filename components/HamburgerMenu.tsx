'use client';

import Link from 'next/link';
import { useState } from 'react'; // import state
import PrimaryButton from './ui/PrimaryButton';
import { SolutionsForMobile } from './ui/SolutionsForMobile';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  const clicked = () => {
    const a = () => {
      setIsNavOpen((prev) => !prev);
    };
    setTimeout(a, 500);
  };

  return (
    <div className="flex items-center justify-end py-4  lg:hidden">
      <nav>
        <section className=" flex lg:hidden overflow-auto">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            {' '}
            {/* // toggle class based on isNavOpen state */}
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-700"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className=" my-8 uppercase">
                <Link
                  onClick={() => setTimeout(clicked, 500)}
                  href={'https://clever-core-landing.vercel.app/#features'}
                  className="text-black text-base font-medium leading-normal"
                >
                  Features
                </Link>
              </li>

              <li className=" my-8 uppercase text-center ">
                <SolutionsForMobile />
              </li>
              <li className=" my-8 uppercase">
                <Link
                  onClick={() => setTimeout(clicked, 500)}
                  href={'/resources'}
                  className="text-black text-base font-medium leading-normal"
                >
                  Resources
                </Link>
              </li>
              <li className=" my-8 uppercase">
                <Link
                  onClick={() => setTimeout(clicked, 500)}
                  href={'/pricing'}
                  className="text-black text-base font-medium leading-normal"
                >
                  Pricing
                </Link>
              </li>

              <li className=" my-8 uppercase">
                <PrimaryButton className="p-5 w-[100px]">Login</PrimaryButton>
              </li>
            </ul>
          </div>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        overflow: scroll;
      }
    `}</style>
    </div>
  );
}
