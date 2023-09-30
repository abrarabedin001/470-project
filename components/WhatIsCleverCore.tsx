'use client';
import React, { useRef, useEffect } from 'react';
import H1 from './ui/H1';
import H3 from './ui/H3';
import Image from 'next/image';
import P from './ui/P';
import H2 from './ui/H2';
import PrimaryButton from './ui/PrimaryButton';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function WhyChoseCleverCore() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);
  const inView1 = useInView(ref1, { once: true });
  const inView2 = useInView(ref2, { once: true });
  const inView3 = useInView(ref3, { once: true });
  const inView4 = useInView(ref4, { once: true });
  const inView5 = useInView(ref5, { once: true });
  const inView6 = useInView(ref6, { once: true });
  const inView7 = useInView(ref7, { once: true });
  const inView8 = useInView(ref8, { once: true });
  const mainControls1 = useAnimation();
  const mainControls2 = useAnimation();
  const mainControls3 = useAnimation();
  const mainControls4 = useAnimation();
  const mainControls5 = useAnimation();
  const mainControls6 = useAnimation();
  const mainControls7 = useAnimation();
  const mainControls8 = useAnimation();

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
  };

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
  };

  useEffect(() => {
    if (inView1) {
      mainControls1.start('visible');
    }
    if (inView2) {
      mainControls2.start('visible');
    }
    if (inView3) {
      mainControls3.start('visible');
    }
    if (inView4) {
      mainControls4.start('visible');
    }
    if (inView5) {
      mainControls5.start('visible');
    }
    if (inView6) {
      mainControls6.start('visible');
    }
    if (inView7) {
      mainControls7.start('visible');
    }
    if (inView8) {
      mainControls8.start('visible');
    }
  }, [inView1, inView2, inView3, inView4, inView5, inView6, inView7, inView8]);

  return (
    <div className="container lg:p-8 text-center pt-16 lg:mt-36 flex flex-col ">
      <H2 className="lg:mb-36">What is CleverCore AI?</H2>
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
              CleverCore AI: Revolutionize Your Voice Communications
            </H2>{' '}
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
                Convert calls & voice notes into text so you never miss a detail
              </P>
            </div>
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
                Receive and call from your unique CleverCore phone number
              </P>
            </div>
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
                Save & share audio files & conversation notes with your team{' '}
              </P>
            </div>
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
                Send call and voice note information throughout your team
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
              Summarize and Simplify with AI
            </H2>{' '}
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
                Automatically summarize call details with AI
              </P>
            </div>{' '}
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
                Key Points will be given for quick reminders on the conversation
              </P>
            </div>{' '}
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
                Receive what to do next suggestions based on call details
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
              Manage and Communicate information easier than ever
            </H2>{' '}
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
                Engage with an intuitive AI Chatbot to effortlessly extract call
                details from various users
              </P>
            </div>
            <div className="flex">
              ✔
              <P className="pb-5 pl-5">
                Store, manage, and access all your voice interactions within
                your CleverCore CRM.
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
              Connect Information and streamline processes
            </H2>{' '}
            <div className="flex">
              ✔
              <P className="pb-5 pl-5 ">
                Integrate CleverCore with your existing infrastructure for a
                smooth and unified experience using API’s
              </P>
            </div>
            <div className="flex">
              ✔
              <P className="pb-5 pl-5 ">
                Set your team up with CleverCore to better support and assist
                their calls and communication
              </P>
            </div>
            <div className="flex">
              ✔
              <P className="pb-5 pl-5 ">
                Ensure every voice interaction, whether professional or
                personal, is meaningful and insightful.
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
  );
}
