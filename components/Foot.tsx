import React from 'react'
import PrimaryButton from './ui/PrimaryButton'
import Link from 'next/link'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

export default function Foot() {
  return (
    <div className="w-full h-full left-0 bottom-0  flex justify-center mt-36 text-gray-700 dark:text-white">
      <div className="max-w-[1440px] w-full">
        <div className="w-full  hidden lg:block  ">
          <div className="flex flex-row p-10 justify-between w-full  ">
            <div className=" text-zinc-800 dark:text-white text-base font-medium leading-normal py-5">
              © 2020 Wirefigma
            </div>
            <div className="flex flex-col justify-center">
              <div className=" px-5 py-[13px]  rounded-[5px] justify-center items-start gap-5 inline-flex ">
                <Link
                  href={'/'}
                  className="text-gray-700 dark:text-white text-base font-medium leading-normal"
                >
                  Contact
                </Link>
                <Link
                  href={'/'}
                  className="text-gray-700 dark:text-white text-base font-medium leading-normal"
                >
                  Privacy
                </Link>
                <Link
                  href={'/'}
                  className="text-gray-700 dark:text-white text-base font-medium leading-normal"
                >
                  Terms of Service
                </Link>
                <Link
                  href={'/'}
                  className="text-gray-700 dark:text-white text-base font-medium leading-normal"
                >
                  Faq
                </Link>
              </div>
              <div className=" pb-7 justify-center items-center gap-2.5 inline-flex py-5">
                <PrimaryButton className="text-lg font-bold leading-7 p-3">
                  Get Started
                </PrimaryButton>
              </div>
            </div>

            <div className=" h-7 justify-start items-center gap-5 inline-flex py-5">
              <div className="flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="text-[#9C1CF3]/70 text-2xl font-normal">
                  <AiFillLinkedin />
                </div>
              </div>

              <div className="flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="text-[#9C1CF3]/70 text-2xl font-normal">
                  <BsFacebook />{' '}
                </div>
              </div>
              <div className="flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="text-[#9C1CF3]/70 text-2xl font-normal">
                  <AiFillInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-white w-full mt-36 flex flex-col justify-center lg:hidden">
          <div className="flex flex-row p-10 justify-between w-full">
            <div className="flex flex-col">
              <div className=" px-5 py-[13px]  rounded-[5px] justify-center items-start gap-5 inline-flex flex-col  ">
                <Link
                  href={'/'}
                  className="text-gray-700 dark:text-white text-base font-medium leading-normal"
                >
                  Faq
                </Link>
                <Link
                  href={'/'}
                  className="text-gray-700 dark:text-white text-base font-medium leading-normal"
                >
                  Contact
                </Link>
                <Link
                  href={'/'}
                  className="text-gray-700 dark:text-white text-base font-medium leading-normal"
                >
                  Privacy
                </Link>
                <Link
                  href={'/'}
                  className="text-gray-700 dark:text-white text-base font-medium leading-normal"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            <div className="flex flex-col">
              <div className=" h-7 justify-start items-center gap-5 inline-flex py-5">
                <div className="flex-col justify-start items-center gap-2.5 inline-flex">
                  <div className="text-[#9C1CF3]/70 text-2xl font-normal">
                    <AiFillLinkedin />
                  </div>
                </div>

                <div className="flex-col justify-start items-center gap-2.5 inline-flex">
                  <div className="text-[#9C1CF3]/70 text-2xl font-normal">
                    <BsFacebook />{' '}
                  </div>
                </div>
                <div className="flex-col justify-start items-center gap-2.5 inline-flex">
                  <div className="text-[#9C1CF3]/70 text-2xl font-normal">
                    <AiFillInstagram />
                  </div>
                </div>
              </div>
              <div className=" pb-7 justify-center items-center gap-2.5 inline-flex py-5">
                <button className="group relative px-4 overflow-hidden rounded-lg button_bg_grad text-lg border-2 border-transparent hover:border-[#9C1CF3] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transform active:scale-75 transition-transform">
                  <span className="relative text-white group-hover:text-[#9C1CF3] tracking-wider">
                    Get Started
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className=" text-zinc-800 dark:text-white text-base text-center font-medium leading-normal py-5">
            © 2023 BugSmasher.ai
          </div>
        </div>
      </div>
    </div>
  )
}
