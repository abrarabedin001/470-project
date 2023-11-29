'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import H1 from './ui/H1'

const TestimonialV2 = () => {
  const slides = [
    {
      quote:
        'TaskFlow has been a game-changer for our marketing team. Its intuitive interface has streamlined our workflow significantly. Now, tracking tasks has become very easy and smooth in our task management process.',
      author: 'Sarah Thompson',
      title: 'Marketing Manager',
      imageSrc: '/Testimonials/Testimonial 1.png',
    },
    {
      quote:
        'TaskFlows impact on our design projects has been remarkable. Its user-friendly design help us to focus more on the creative process. The platforms responsiveness has improved collaboration, making it an essential tool for our UX design team.',
      author: 'Chris Reynolds',
      title: 'UX Designer',
      imageSrc: '/Testimonials/Testimonial 2.png',
    },
    {
      quote:
        'TaskFlow has become the backbone of our project management strategy. The seamless integration with our project management tools provides real-time updates on bug resolutions. This has been instrumental in ensuring on-time project delivery, enhancing overall project efficiency.',
      author: 'Amanda Rodriguez',
      title: 'Project Manager',
      imageSrc: '/Testimonials/Testimonial 3.png',
    },
    {
      quote:
        'TaskFlow has transformed our development teams performance. The collaboration feature has significantly improved our work process. Its now our go-to platform for task management, ensuring a smoother and more organized development cycle.',
      author: 'Michael Carter',
      title: 'Software Developer',
      imageSrc: '/Testimonials/Testimonial 4.png',
    },
    {
      quote:
        'TaskFlow has revolutionized how we approach projects. The organized task tracking system and robust communication tools have elevated the quality of our work culture. It has made the project management process more efficient and collaborative.',
      author: 'Linda Chang',
      title: 'Quality Assurance Tester',
      imageSrc: '/Testimonials/Testimonial 5.png',
    },
    {
      quote:
        'TaskFlow has been a lifesaver for our support team. This task management platform has simplified our tasks, allowing us to quickly track every task progress. This efficiency has translated to reduced downtime for our product and improved overall support service.',
      author: 'Ethan Patel',
      title: 'IT Support Specialist',
      imageSrc: '/Testimonials/Testimonial 6.png',
    },
    {
      quote:
        'TaskFlow has significantly improved my user experience. Knowing that reported issues are addressed promptly creates a sense of reliability and trust. The platform ensures a seamless experience, making me feel more confident and satisfied as a user.',
      author: 'Olivia Davis',
      title: 'Software Developer',
      imageSrc: '/Testimonials/Testimonial 7.png',
    },
    // Add more slides as needed
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [exitingSlide, setExitingSlide] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setExitingSlide(currentSlide)
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [currentSlide])

  const handleTransitionEnd = () => {
    setExitingSlide(null)
  }

  return (
    <div className="slideshow-container w-full flex justify-center mt-20">
      <H1 className="text-center pb-10 lg:pb-36">
        What Our Customers Are Saying
      </H1>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`text-white slide flex flex-col md:w-[600px] md:h-[400px] lg:w-[700px] lg:h-[400px] rounded-xl my-32  ${
            index === currentSlide
              ? 'active-slide'
              : index === exitingSlide
              ? 'exiting-slide'
              : ''
          }`}
          onTransitionEnd={handleTransitionEnd}
        >
          <div className="slide-content">
            <div className="image-container">
              <div className="image-wrapper">
                <Image
                  src={slide.imageSrc}
                  alt="testimonials"
                  width={114}
                  height={114}
                  style={{ borderRadius: '50%' }}
                />
              </div>
            </div>
            <div className="">
              <div className="quote tracking-wide text-black dark:text-white">{slide.quote}</div>
              <div className=" font-bold mt-5 tracking-wider text-black dark:text-white">
                {slide.author}
              </div>
              <div className="title text-white">{slide.title}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default TestimonialV2
