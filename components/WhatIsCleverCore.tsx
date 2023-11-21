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
  const inView1 = useInView(ref1, { once: true })
  const inView2 = useInView(ref2, { once: true })
  const inView3 = useInView(ref3, { once: true })
  const inView4 = useInView(ref4, { once: true })
  const inView5 = useInView(ref5, { once: true })
  const inView6 = useInView(ref6, { once: true })
  const inView7 = useInView(ref7, { once: true })
  const inView8 = useInView(ref8, { once: true })
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
      <H2 className="lg:mb-36">What is Bug Smasher?</H2>
      <div className="flex flex-col justify-center items-center">
        <div className="w-[250px] lg:w-full  flex justify-center flex-col  lg:flex-row  mt-20 space-y-10 lg:space-y-0 md:w-full md:gap-6 md:flex-row md:space-y-0">
          <motion.div
            ref={ref1}
            className=" lg:p-5 min-w-[250px] min-h-[250px] md:w-[50%] lg:w-[50%]  bg-gray-400 "
            initial="hidden"
            animate={mainControls1}
            variants={leftVarients}
          ></motion.div>

          <motion.div
            className="md:w-[50%] lg:w-[50%] text-left lg:p-10"
            ref={ref2}
            initial="hidden"
            animate={mainControls2}
            variants={rightVarients}
          >
            <H2 className=" mb-10 lg:text-3xl font-semibold">
                Comprehensive Bug Management
            </H2>{' '}
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
              Efficiently log and track bugs with comprehensive details such as severity, description, and screenshots
              </P>
            </div>
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
              Seamlessly integrate bug tracking with task management, allowing for a unified approach to project coordination
              </P>
            </div>
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
              Easily assign bugs to specific team members, fostering collaboration and accountability
              </P>
            </div>
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
              Keep teams informed with status updates, indicating whether a bug is open, in progress, or resolved
              </P>
            </div>
            <div className="w-[250px] md:w-[300px] lg:w-full flex justify-center lg:justify-start md:justify-start">
              <PrimaryButton className="mt-5">Get Started</PrimaryButton>
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
                Enable real-time communication through integrated chat features, supporting both group and private conversations
              </P>
            </div>{' '}
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
              Enhance overall project coordination by providing tools for team creation, role assignment, and seamless communication
              </P>
            </div>
            <div className="w-[250px] md:w-[300px] lg:w-full flex justify-center lg:justify-start md:justify-start">
              <PrimaryButton className="mt-5">Get Started</PrimaryButton>
            </div>
          </motion.div>
          <motion.div
            className="p-5 min-w-[250px]   min-h-[250px] md:w-[50%] lg:w-[50%]  bg-gray-400 "
            ref={ref4}
            initial="hidden"
            animate={mainControls4}
            variants={rightVarients}
          ></motion.div>
        </div>
        <div className="w-[250px] lg:w-full  flex justify-center flex-col lg:flex-row  mt-20 space-y-10 lg:space-y-0 md:w-full md:gap-6 md:flex-row md:space-y-0">
          <motion.div
            className="p-5 min-w-[250px]   min-h-[250px] md:w-[50%] lg:w-[50%]  bg-gray-400 "
            ref={ref5}
            initial="hidden"
            animate={mainControls5}
            variants={leftVarients}
          ></motion.div>
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
              Facilitate team communication through both group and private chat options, ensuring flexibility in discussions
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
              <PrimaryButton className="mt-5">Get Started</PrimaryButton>
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
              Data-driven Decision Making
            </H2>{' '}
            <div className="flex">
              ✔
              <P className="pb-5 pl-5 ">
              Generate custom reports based on specified criteria, providing a tailored view of task completion rates, bug severity distribution, and team member contributions
              </P>
            </div>
            <div className="flex">
              ✔
              <P className="pb-5 pl-5 ">
              Utilize graphs and charts as visualization aids to represent project data, fostering a more insightful analysis
              </P>
            </div>
            <div className="flex">
              ✔
              <P className="pb-5 pl-5 ">
              Leverage robust reporting and analytics tools to make informed decisions based on a deeper understanding of project dynamics
              </P>
            </div>
            <div className="w-[250px] md:w-[300px] lg:w-full flex justify-center lg:justify-start md:justify-start">
              <PrimaryButton className="mt-5">Get Started</PrimaryButton>
            </div>
          </motion.div>
          <motion.div
            className="p-5 min-w-[250px]   min-h-[250px] md:w-[50%] lg:w-[50%]  bg-gray-400 "
            ref={ref8}
            initial="hidden"
            animate={mainControls8}
            variants={rightVarients}
          ></motion.div>
        </div>
      </div>
    </div>
  )
}
