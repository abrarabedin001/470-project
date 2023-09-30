'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import H1 from './ui/H1';

const TestimonialV2 = () => {
  const slides = [
    {
      quote:
        'Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt sit qui do ipsum fugiat laboris minim nostrud dolor qui.',
      author: 'John Doe 1',
      title: 'UX Designer',
      imageSrc: '/Testimonials/Ellipse 2.png',
    },
    {
      quote:
        'Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt sit qui do ipsum fugiat laboris minim nostrud dolor qui.',
      author: 'John Doe 2',
      title: 'UX Designer',
      imageSrc: '/Testimonials/Ellipse 2.png',
    },
    {
      quote:
        'Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt sit qui do ipsum fugiat laboris minim nostrud dolor qui.',
      author: 'John Doe 3',
      title: 'UX Designer',
      imageSrc: '/Testimonials/Ellipse 2.png',
    },
    {
      quote:
        'Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt sit qui do ipsum fugiat laboris minim nostrud dolor qui.',
      author: 'John Doe 4',
      title: 'UX Designer',
      imageSrc: '/Testimonials/Ellipse 2.png',
    },
    {
      quote:
        'Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt sit qui do ipsum fugiat laboris minim nostrud dolor qui.',
      author: 'John Doe 5',
      title: 'UX Designer',
      imageSrc: '/Testimonials/Ellipse 2.png',
    },
    {
      quote:
        'Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt sit qui do ipsum fugiat laboris minim nostrud dolor qui.',
      author: 'John Doe 6',
      title: 'UX Designer',
      imageSrc: '/Testimonials/Ellipse 2.png',
    },
    {
      quote:
        'Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco dolor proident. Exercitation velit ea incididunt sit qui do ipsum fugiat laboris minim nostrud dolor qui.',
      author: 'John Doe 7',
      title: 'UX Designer',
      imageSrc: '/Testimonials/Ellipse 2.png',
    },
    // Add more slides as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [exitingSlide, setExitingSlide] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setExitingSlide(currentSlide);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleTransitionEnd = () => {
    setExitingSlide(null);
  };

  return (
    <div className="slideshow-container w-full flex justify-center mt-20">
      <H1 className="text-center pb-10 lg:pb-36">
        What Our Customers Are Saying
      </H1>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide flex flex-col md:w-[600px] md:h-[400px] lg:w-[700px] lg:h-[400px] rounded-xl my-32  ${
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
                />
              </div>
            </div>
            <div className="">
              <div className="quote tracking-wide">{slide.quote}</div>
              <div className="author font-bold mt-5 tracking-wider">
                {slide.author}
              </div>
              <div className="title">{slide.title}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TestimonialV2;
