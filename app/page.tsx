import HeroSection from "../components/HeroSection";

import GettingStartedWithCleverCore from "../components/GettingStartedWithCleverCore";
import TestimonialV2 from "../components/TestimonialV2";

import Testimonial from "../components/Testimonial";
import WhyChoseCleverCore from "../components/WhatIsCleverCore";


export default function Home() {
  return (
    <main className="w-full  flex flex-col justify-center items-center overflow-hidden">
    <HeroSection />
    <WhyChoseCleverCore />
    <GettingStartedWithCleverCore />
    <TestimonialV2 />
  </main>
  )
}
