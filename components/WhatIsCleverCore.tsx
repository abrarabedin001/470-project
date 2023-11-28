'use client'
import React, { useRef, useEffect } from 'react'
import H1 from './ui/H1'
import H3 from './ui/H3'
import Image from 'next/image'
import P from './ui/P'
import H2 from './ui/H2'
import PrimaryButton from './ui/PrimaryButton'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function WhyChoseBugSmasher() {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const ref5 = useRef(null)
  const ref6 = useRef(null)
  const ref7 = useRef(null)
  const ref8 = useRef(null)
  const ref9 = useRef(null)
  const ref10 = useRef(null)
  const inView1 = useInView(ref1, { once: true })
  const inView2 = useInView(ref2, { once: true })
  const inView3 = useInView(ref3, { once: true })
  const inView4 = useInView(ref4, { once: true })
  const inView5 = useInView(ref5, { once: true })
  const inView6 = useInView(ref6, { once: true })
  const inView7 = useInView(ref7, { once: true })
  const inView8 = useInView(ref8, { once: true })
  const inView9 = useInView(ref9, { once: true })
  const inView10 = useInView(ref10, { once: true })
  const mainControls1 = useAnimation()
  const mainControls2 = useAnimation()
  const mainControls3 = useAnimation()
  const mainControls4 = useAnimation()
  const mainControls5 = useAnimation()
  const mainControls6 = useAnimation()
  const mainControls7 = useAnimation()
  const mainControls8 = useAnimation()

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
    if (inView5) {
      mainControls5.start('visible')
    }
    if (inView6) {
      mainControls6.start('visible')
    }
    if (inView7) {
      mainControls7.start('visible')
    }
    if (inView8) {
      mainControls8.start('visible')
    }
  }, [inView1, inView2, inView3, inView4, inView5, inView6, inView7, inView8])

  return (
    <div className="container lg:p-8 text-center pt-16 lg:mt-36 flex flex-col ">
      <H2 className="lg:mb-36">Why choose Work Flow?</H2>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[250px] lg:w-full  flex justify-center flex-col  lg:flex-row  mt-20 space-y-10 lg:space-y-0 md:w-full md:gap-6 md:flex-row md:space-y-0">
          <motion.div
            ref={ref1}
            className=" lg:p-5 min-w-[250px] min-h-[250px] md:w-[50%] lg:w-[50%]   "
            initial="hidden"
            animate={mainControls1}
            variants={leftVarients}
          >
            <Image
            src="/1-2.svg"
            alt="bug_smasher"
            width={500}
            height={700}
            className=" h-auto w-[1000px] "
          />
          </motion.div>

          <motion.div
            className="md:w-[50%] lg:w-[50%] text-left lg:p-10"
            ref={ref2}
            initial="hidden"
            animate={mainControls2}
            variants={rightVarients}
          >
            <H2 className=" mb-10 lg:text-3xl font-semibold">
                Maximize Team Productivity
            </H2>{' '}
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
              Simplify team workload with intuitive and efficient task management.
              </P>
            </div>
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
              Boost productivity by automating repetitive processes and reducing manual effort.
              </P>
            </div>
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
              Easily focus on what matters most with effective task prioritization features.
              </P>
            </div>
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
              Enhance teamwork through streamlined communication.
              </P>
            </div>
            <div className="w-[250px] md:w-[300px] lg:w-full flex justify-center lg:justify-start md:justify-start">
              <PrimaryButton className="mt-5">Start Streamlining</PrimaryButton>
            </div>
          </motion.div>
        </div>
        <div className="w-[250px] lg:w-full  flex justify-center  lg:flex-row  mt-20 space-y-10 lg:space-y-0 flex-col-reverse md:w-full md:gap-6 md:flex-row md:space-y-0">
          <motion.div
            className="md:w-[50%] lg:w-[50%] text-left py-10 lg:p-10"
            ref={ref3}
            initial="hidden"
            animate={mainControls3}
            variants={leftVarients}
          >
            <H2 className=" mb-10 lg:text-3xl font-semibold ">
              Dynamic Team Collaboration
            </H2>{' '}
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
                 Easily create teams to facilitate collaboration on various projects or aspects of the business
              </P>
            </div>{' '}
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
                Assign specific roles to team members, defining responsibilities and access levels for effective project management
              </P>
            </div>{' '}
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
                Enable real-time communication through live chat features supporting group conversations
              </P>
            </div>{' '}
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
              Enhance overall project coordination by providing tools for team creation, role assignment, and seamless communication
              </P>
            </div>
            <div className="w-[250px] md:w-[300px] lg:w-full flex justify-center lg:justify-start md:justify-start">
              <PrimaryButton className="mt-5">Build Teams Now</PrimaryButton>
            </div>
          </motion.div>
          <motion.div
            className="p-5 min-w-[250px]   min-h-[250px] md:w-[50%] lg:w-[50%]  "
            ref={ref4}
            initial="hidden"
            animate={mainControls4}
            variants={rightVarients}
          >
            <Image
            src="/1-3.svg"
            alt="bug_smasher"
            width={500}
            height={700}
            className=" h-auto w-[1000px] "
          />
          </motion.div>
        </div>

        <div className="w-[250px] lg:w-full  flex justify-center flex-col lg:flex-row  mt-20 space-y-10 lg:space-y-0 md:w-full md:gap-6 md:flex-row md:space-y-0">
          <motion.div
            className="p-5 min-w-[250px]   min-h-[250px] md:w-[50%] lg:w-[50%]  "
            ref={ref5}
            initial="hidden"
            animate={mainControls5}
            variants={leftVarients}
          >
            <Image
            src="/1-4.svg"
            alt="bug_smasher"
            width={500}
            height={700}
            className=" h-auto w-[1000px] "
          />
          </motion.div>
          <motion.div
            className="md:w-[50%] lg:w-[50%] text-left lg:p-10"
            ref={ref6}
            initial="hidden"
            animate={mainControls6}
            variants={rightVarients}
          >
            <H2 className=" mb-10 lg:text-3xl font-semibold">
              Real-Time Collaboration Hub
            </H2>{' '}
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
              Facilitate team communication through group chat, ensuring flexibility in discussions
              </P>
            </div>
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
              Integrate real-time performance metrics directly into the collaboration hub for immediate insights
              </P>
              </div>{' '}
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
              Keep team members informed with a notification system for new messages, ensuring timely responses and updates
              </P>
              </div>{' '}
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
              Create a hub that enhances real-time collaboration, bringing together communication and performance metrics
              </P>
            </div>
            <div className="w-[250px] md:w-[300px] lg:w-full flex justify-center lg:justify-start md:justify-start">
              <PrimaryButton className="mt-5">Join the Hub</PrimaryButton>
            </div>
          </motion.div>
        </div>


  
        <div className="w-[250px] lg:w-full  flex justify-center flex-col-reverse lg:flex-row  mt-20 space-y-10 lg:space-y-0 md:w-full md:gap-6 md:flex-row md:space-y-0">
          <motion.div
            className="md:w-[50%] lg:w-[50%] text-left py-10 lg:p-10"
            ref={ref7}
            initial="hidden"
            animate={mainControls7}
            variants={leftVarients}
          >
            <H2 className=" mb-10 lg:text-3xl font-semibold">
              Seamless Growth and Connectivity
            </H2>{' '}
            <div className="flex">
              ✔
              <P className="pb-5 pl-5 ">
              Effortlessly scale your operations as your team and projects evolve.
              </P>
            </div>
            <div className="flex">
              ✔
              <P className="pb-5 pl-5 ">
              Integrate seamlessly with your preferred tools, enhancing overall functionality.
              </P>
            </div>
            <div className="flex">
              ✔
              <P className="pb-5 pl-5 ">
              Customize and extend capabilities to perfectly align with your unique needs.
              </P>
            </div>
            <div className="w-[250px] md:w-[300px] lg:w-full flex justify-center lg:justify-start md:justify-start">
              <PrimaryButton className="mt-5">Connect Effortlessly</PrimaryButton>
            </div>
          </motion.div>
          <motion.div
            className="p-5 min-w-[250px]   min-h-[250px] md:w-[50%] lg:w-[50%]  "
            ref={ref8}
            initial="hidden"
            animate={mainControls8}
            variants={rightVarients}
          >
            <Image
            src="/1-5.svg"
            alt="bug_smasher"
            width={500}
            height={700}
            className=" h-auto w-[1000px] "
          />
          </motion.div>
        </div>

        <div className="w-[250px] lg:w-full  flex justify-center flex-col lg:flex-row  mt-20 space-y-10 lg:space-y-0 md:w-full md:gap-6 md:flex-row md:space-y-0">
          <motion.div
            className="p-5 min-w-[250px]   min-h-[250px] md:w-[50%] lg:w-[50%]   "
            ref={ref9}
            initial="hidden"
            animate={mainControls5}
            variants={leftVarients}
          >
            <Image
            src="/1-6.svg"
            alt="bug_smasher"
            width={500}
            height={700}
            className=" h-auto w-[1000px] "
          />
          </motion.div>
          <motion.div
            className="md:w-[50%] lg:w-[50%] text-left lg:p-10"
            ref={ref10}
            initial="hidden"
            animate={mainControls6}
            variants={rightVarients}
          >
            <H2 className=" mb-10 lg:text-3xl font-semibold">
              Secure and User-Friendly Platform
            </H2>{' '}
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
              Strengthen security with user-friendly Multi-Factor Authentication options, enhancing account protection
              </P>
            </div>
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
                Personalize user roles and permissions for a secure platform experience
              </P>
              </div>{' '}
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
                Enable users to manage profiles and reset passwords, prioritizing security and user control
              </P>
              </div>{' '}
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
              Provide options for manual logout and automatic session expiry, ensuring user account security
              </P>
            </div>
            <div className="w-[250px] md:w-[300px] lg:w-full flex justify-center lg:justify-start md:justify-start">
              <PrimaryButton className="mt-5">Explore Secure Experience</PrimaryButton>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
