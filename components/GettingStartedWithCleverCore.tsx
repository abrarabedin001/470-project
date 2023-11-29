'use client'
import React, { useRef, useEffect } from 'react'
import H2 from './ui/H2'
import H3 from './ui/H3'
import Image from 'next/image'
import H1 from './ui/H1'
import { motion, useInView, useAnimation } from 'framer-motion'
import PrimaryButton from './ui/PrimaryButton'
export default function GettingStartedWithCleverCore() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const refL1 = useRef(null)
  const refL2 = useRef(null)
  const refL3 = useRef(null)
  const refL4 = useRef(null)

  const inView1 = useInView(ref1, { once: true })
  const inView2 = useInView(ref2, { once: true })
  const inView3 = useInView(ref3, { once: true })
  const inView4 = useInView(ref4, { once: true })
  const inViewL1 = useInView(refL1, { once: true })
  const inViewL2 = useInView(refL2, { once: true })
  const inViewL3 = useInView(refL3, { once: true })
  const inViewL4 = useInView(refL4, { once: true })

  const mainControls1 = useAnimation()
  const mainControls2 = useAnimation()
  const mainControls3 = useAnimation()
  const mainControls4 = useAnimation()
  const mainControlsL1 = useAnimation()
  const mainControlsL2 = useAnimation()
  const mainControlsL3 = useAnimation()
  const mainControlsL4 = useAnimation()

  const leftVarients = {
    hidden: {
      opacity: 0,
      x: -50, // Slide from left
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  }

  const rightVarients = {
    hidden: {
      opacity: 0,
      x: 50, // Slide from right
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  }

  useEffect(() => {
    if (inView1) {
      mainControls1.start('visible')
    }
    if (inView2) {
      mainControls2.start('visible')
    }
    if (inView3) {
      mainControls3.start('visible')
    }
    if (inView4) {
      mainControls4.start('visible')
    }

    // Lg screen
    if (inViewL1) {
      mainControls1.start('visible')
    }
    if (inViewL2) {
      mainControls2.start('visible')
    }
    if (inViewL3) {
      mainControls3.start('visible')
    }
    if (inViewL4) {
      mainControls4.start('visible')
    }
  }, [
    inView1,
    inView2,
    inView3,
    inView4,
    inViewL1,
    inViewL2,
    inViewL3,
    inViewL4,
  ])
  return (
    <div className="container flex flex-col justify-center items-center mx-auto w-full h-full mt-10 lg:mt-36 ">
      <H1 className="text-center pb-10 lg:pb-18">
        Getting Started with Work Flow is Easy!
      </H1>
      <PrimaryButton className=" w-[250px] mb-10">Try Now</PrimaryButton>
      {/* for large screens */}
      <div className="relative hidden lg:flex flex-wrap  p-10 h-full ">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-[10%] lg:left-[50%] hidden lg:block"></div>
        {/* <!-- right timeline --> */}
        <div className="mb-8 flex justify-center lg:justify-between items-center w-full right-timeline">
          <div className="order-1 lg:w-5/12 hidden lg:block"></div>
          <div className="z-20  items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden lg:flex">
            <h1 className="mx-auto font-semibold text-lg text-white ">1</h1>
          </div>
          <motion.div
            initial="hidden"
            ref={refL1}
            animate={mainControls1}
            variants={rightVarients}
            className=" order-1 bg-blue-400/20 rounded-lg shadow-xl w-[250px] h-[512px] md:w-[300px] lg:w-5/12 px-6 py-4 flex flex-col lg:flex-row "
          >
            <div className="lg:w-[50%] p-8 border-r-sky-700 flex justify-center items-center">
              <Image
                src={'/a1.svg'}
                width={600}
                height={600}
                className="max-w-[600px] max-h-[600px] "
                alt="Secure Login"
              ></Image>
            </div>
            <div className="text-center lg:w-[50%] lg:text-left p-8 grid items-center  ">
              <div>
                <p className="font-bold">Step One</p>
                <H3 className="p-0 ">Account Creation</H3>
                <p className="text-white">Secure, personalized signup in a few steps.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* <!-- left timeline --> */}
        <div className="mb-8 flex justify-center lg:justify-between lg:flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 lg:w-5/12"></div>
          <div className="z-20  items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden lg:flex">
            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
          </div>
          <motion.div
            initial="hidden"
            ref={refL2}
            animate={mainControls1}
            variants={leftVarients}
            className="order-1 bg-red-400/20 rounded-lg shadow-xl w-[250px] h-[512px] md:w-[300px] lg:w-5/12 px-6 py-4 flex flex-col lg:flex-row-reverse"
          >
            <div className="lg:w-[50%] p-8 border-r-sky-700 flex justify-center items-center">
              <Image
                src={'/b1.svg'}
                width={600}
                height={600}
                className="max-w-[600px] max-h-[600px] float-left"
                alt="Import Data"
              ></Image>
            </div>
            <div className="text-center lg:w-[50%] lg:text-left p-8 grid items-center  ">
              <div>
                <p className="font-bold">Step Two</p>
                <H3 className="p-0 ">Team Creation</H3>
                <p className="text-white">
                Form project teams for smooth collaboration.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* <!-- right timeline --> */}
        <div className="mb-8 flex justify-center lg:justify-between items-center w-full right-timeline">
          <div className="order-1 lg:w-5/12 hidden lg:block "></div>
          <div className="z-20  items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden lg:flex">
            <h1 className="mx-auto font-semibold text-lg text-white ">3</h1>
          </div>
          <motion.div
            initial="hidden"
            ref={refL3}
            animate={mainControls1}
            variants={rightVarients}
            className="order-1 bg-blue-400/20 rounded-lg shadow-xl w-[250px] h-[512px] md:w-[300px] lg:w-5/12 px-6 py-4 flex flex-col lg:flex-row "
          >
            <div className="lg:w-[50%] p-8 border-r-sky-700 flex justify-center items-center">
              <Image
                src={'/c1.svg'}
                width={600}
                height={600}
                className="max-w-[600px] max-h-[600px] float-right"
                alt="Make Calls"
              ></Image>
            </div>

            <div className="text-center lg:w-[50%] lg:text-left p-8 grid items-center  ">
              <div>
                <p className="font-bold">Step Three</p>
                <H3 className="p-0 ">Member Invitation</H3>
                <p className="text-white">
                Invite team members via email or direct links.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* <!-- left timeline --> */}
        <div className="mb-8 flex justify-center lg:justify-between lg:flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 lg:w-5/12"></div>
          <div className="z-20  items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden lg:flex">
            <h1 className="mx-auto text-white font-semibold text-lg ">4</h1>
          </div>
          <motion.div
            initial="hidden"
            ref={refL4}
            animate={mainControls1}
            variants={leftVarients}
            className="order-1 bg-red-400/20 rounded-lg shadow-xl w-[250px] h-[512px] md:w-[300px] lg:w-5/12 px-6 py-4 flex flex-col lg:flex-row-reverse"
          >
            <div className="lg:w-[50%] p-8 border-r-sky-700 flex justify-center items-center">
              <Image
                src={'/d1.svg'}
                width={600}
                height={600}
                className="max-w-[600px] max-h-[600px] float-left"
                alt="Analyze & Act"
              ></Image>
            </div>
            <div className="text-center lg:w-[50%] lg:text-left p-3 grid items-center  ">
              <div>
                <p className="font-bold">Step Four</p>
                <H3 className="p-0 ">Task Assignment</H3>
                <p className="text-white">
                Assign tasks and prioritize for a seamless workflow.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* for medium and small screens */}
      <div className="relative flex flex-col  items-center justify-center  p-10 h-full lg:hidden">
        <div className="m-2 flex flex-col md:space-x-5 md:flex-row justify-center items-center">
          <div className="mb-8 flex justify-center lg:justify-between items-center w-full right-timeline">
            <div className="order-1 lg:w-5/12 hidden lg:block"></div>
            <div className="z-20  items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden lg:flex">
              <h1 className="mx-auto font-semibold text-lg text-white ">1</h1>
            </div>
            <motion.div
              initial="hidden"
              ref={ref1}
              animate={mainControls1}
              variants={rightVarients}
              className=" order-1 bg-blue-400/20 rounded-lg shadow-xl w-[250px] h-[512px] md:w-[300px] lg:w-5/12 px-6 py-4 flex flex-col lg:flex-row "
            >
              <div className="lg:w-[50%] p-8 border-r-sky-700 flex justify-center items-center">
                <Image
                  src={'/CTA/Object/Secure_login.png'}
                  width={184}
                  height={224}
                  className="max-w-[224px] max-h-[224px] "
                  alt="Secure Login"
                ></Image>
              </div>
              <div className="text-center lg:w-[50%] lg:text-left p-8 grid items-center  ">
                <div>
                  <p className="font-bold">Step One</p>
                  <H3 className="p-0 ">Get Started</H3>
                  <p className="text-white">
                    Create Your Account In Minutes
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-center lg:justify-between lg:flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 lg:w-5/12"></div>
            <div className="z-20  items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden lg:flex">
              <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
            </div>
            <motion.div
              initial="hidden"
              ref={ref2}
              animate={mainControls1}
              variants={leftVarients}
              className="order-1 bg-red-400/20 rounded-lg shadow-xl w-[250px] h-[512px] md:w-[300px] lg:w-5/12 px-6 py-4 flex flex-col lg:flex-row-reverse"
            >
              <div className="lg:w-[50%] p-8 border-r-sky-700 flex justify-center items-center">
                <Image
                  src={'/CTA/Object/Other 09.png'}
                  width={224}
                  height={224}
                  className="max-w-[224px] max-h-[224px] float-left"
                  alt="Import Data"
                ></Image>
              </div>
              <div className="text-center lg:w-[50%] lg:text-left p-8 grid items-center  ">
                <div>
                  <p className="font-bold">Step Two</p>
                  <H3 className="p-0 ">Import Data</H3>
                  <p className="text-gray-700">
                    Sync your existing CRM or start fresh
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="m-2 flex flex-col md:space-x-5 md:flex-row justify-center items-center">
          <div className="mb-8 flex justify-center lg:justify-between items-center w-full right-timeline">
            <div className="order-1 lg:w-5/12 hidden lg:block "></div>
            <div className="z-20  items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden lg:flex">
              <h1 className="mx-auto font-semibold text-lg text-white ">3</h1>
            </div>
            <motion.div
              initial="hidden"
              ref={ref3}
              animate={mainControls1}
              variants={rightVarients}
              className="order-1 bg-blue-400/20 rounded-lg shadow-xl w-[250px] h-[512px] md:w-[300px] lg:w-5/12 px-6 py-4 flex flex-col lg:flex-row "
            >
              <div className="lg:w-[50%] p-8 border-r-sky-700 flex justify-center items-center">
                <Image
                  src={'/CTA/Object/Make_call.png'}
                  width={224}
                  height={224}
                  className="max-w-[224px] max-h-[224px] float-right"
                  alt="Make Calls"
                ></Image>
              </div>

              <div className="text-center lg:w-[50%] lg:text-left p-8 grid items-center  ">
                <div>
                  <p className="font-bold">Step Three</p>
                  <H3 className="p-0 ">Make Calls</H3>
                  <p className="text-gray-700">
                    Use Bug Smasher&apos; interface to manage your calls
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* <!-- left timeline --> */}
          <div className="mb-8 flex justify-center lg:justify-between lg:flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 lg:w-5/12"></div>
            <div className="z-20  items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden lg:flex">
              <h1 className="mx-auto text-white font-semibold text-lg ">4</h1>
            </div>
            <motion.div
              initial="hidden"
              ref={ref4}
              animate={mainControls1}
              variants={leftVarients}
              className="order-1 bg-red-400/20 rounded-lg shadow-xl w-[250px] h-[512px] md:w-[300px] lg:w-5/12 px-6 py-4 flex flex-col lg:flex-row-reverse"
            >
              <div className="lg:w-[50%] p-8 border-r-sky-700 flex justify-center items-center">
                <Image
                  src={'/CTA/Object/Other 11.png'}
                  width={224}
                  height={224}
                  className="max-w-[224px] max-h-[224px] float-left"
                  alt="Analyze & Act"
                ></Image>
              </div>
              <div className="text-center lg:w-[50%] lg:text-left p-3 grid items-center  ">
                <div>
                  <p className="font-bold">Step Four</p>
                  <H3 className="p-0 ">Analyze & Act</H3>
                  <p className="text-gray-700">
                    Leverage AI insights to improve your sales
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* <!-- right timeline --> */}
      </div>
    </div>
  )
}
