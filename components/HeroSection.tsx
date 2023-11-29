import React from 'react'
import PrimaryButton from './ui/PrimaryButton'
import H1 from './ui/H1'
import P from './ui/P'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="container relative h-screen flex flex-col items-center justify-center mt-16 2xl:mt-0">
      <div className="mx-5  flex flex-col justify-center content-center lg:flex-row h-full  lg:items-center gap-1 max-lg:w-screen">
        <div className="w-full lg:w-1/2 animated-text">
          <div className=" flex flex-col gap-2 items-center lg:items-start text-center lg:text-left max-lg:mx-4 space-y-10 p-5 lg:p-0 ">
            <H1>
            Unlock Efficiency: Optimize Task Management with TaskFlow Mastery
            </H1>
            <P className="tracking-wide">
            Supercharge your team's productivity with Task Flow. Our task management 
            platform revolutionizes workflow efficiency, making task handling a breeze. 
            Elevate your work experience and achieve peak performance effortlessly.{' '}
            </P>
            <div className="lg:space-x-5 space-y-5 lg:space-y-0 flex flex-col justify-center items-center lg:flex-row lg:justify-start">
              <PrimaryButton className="m-0">Get Started</PrimaryButton>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 hidden lg:block h-3/5 animated-image">
          <Image
            src="/1-1.svg"
            alt="bug_smasher"
            width={500}
            height={700}
            className=" h-auto w-[1000px] "
          />
        </div>
      </div>
      <div className="absolute bottom-5 z-10" id="features">
        <Image
          src="scroll-down.svg"
          alt="scroll down"
          height={30}
          width={30}
          className="bounce"
        />
      </div>
    </div>
  )
}
