import React from 'react'
import Image from 'next/image'
import H2 from './ui/H2'
import H1 from './ui/H1'

export default function Testimonial() {
  return (
    <div className="w-screen m-auto text-center flex flex-col justify-center mt-10 lg:mt-36 ">
      <H1 className="text-center pb-10 lg:pb-36">
        Getting Started with Bug Smasher is Easy!
      </H1>
      {/* <H1 className=" w-full text-center my-10 px-5  lg:mt-36 ">
        What Our Customers Are Saying
      </H1> */}
      <div className=" moving-div-container ">
        <div className="text-left flex flex-row justify-center items-center space-y-10 lg:space-y-0 mt-10 lg:mt-36 moving-div">
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 3.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 13
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 2.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 2
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 3.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 3
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 2.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 4
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 3.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 13
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 2.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 2
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 3.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 3
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 2.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 4
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 3.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 13
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 2.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 2
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 3.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 3
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 2.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 4
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 3.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 13
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 2.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 2
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 3.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 3
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 2.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 4
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 3.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 13
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 2.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 2
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 3.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 3
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 2.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 4
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 3.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 13
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 2.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 2
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 3.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 3
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 2.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 4
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 3.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 13
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 2.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 2
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 3.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 3
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 2.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 4
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 3.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 13
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 2.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 2
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 3.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 3
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] min-w-[350px] h-[566px] px-5 lg:px-10 py-5 rounded-[10px] flex-col justify-start items-center gap-[29px] inline-flex mx-5 glassmorphism">
            <div className="w-[114px] h-[114px] bg-violet-100 bg-opacity-30 rounded-full">
              <Image
                src={'/Testimonials/Ellipse 2.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “Reprehenderit esse labore id veniam ut veniam non ex
                adipisicing amet ullamco dolor proident. Exercitation velit ea
                incididunt sit qui do ipsum fugiat laboris minim nostrud dolor
                qui.”
              </div>
              <div className=" flex-col justify-start items-start flex w-full">
                <div className=" text-black text-[25px] font-bold float-left">
                  John Doe 4
                </div>
                <div className=" text-black text-lg font-medium leading-7">
                  UX Designer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
