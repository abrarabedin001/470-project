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
                “BugSmasher has been a game-changer for our marketing team. 
                Its intuitive interface and quick bug resolution have streamlined our 
                workflow significantly. Now, reporting and tracking bugs is not only 
                efficient but has become an integral part of our collaborative process.”
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
              "BugSmashers impact on our design projects has been remarkable. 
              Its user-friendly design simplifies bug reporting, allowing us to 
              focus more on the creative process. The platforms responsiveness 
              has improved collaboration, making it an essential tool for our UX design team."
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
              "BugSmasher has become the backbone of our project management strategy. 
              The seamless integration with our project management tools provides 
              real-time updates on bug resolutions. This has been instrumental in 
              ensuring on-time project delivery, enhancing overall project efficiency."
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
              "BugSmasher has transformed our development process. 
              The detailed bug tracking and collaboration features 
              have significantly improved our workflow. Its now our 
              go-to platform for code releases, ensuring a smoother 
              and more organized development cycle."
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
              "BugSmasher has revolutionized how we approach testing. The organized 
              bug tracking system and robust communication tools have elevated the 
              quality of our software releases. Its made the testing process more 
              efficient and collaborative, positively impacting our QA efforts."
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
              "BugSmasher has been a lifesaver for our support team. 
              The detailed bug reports generated by the platform have 
              simplified our tasks, allowing us to quickly identify and 
              resolve issues. This efficiency has translated to reduced downtime 
              for our users and improved overall support service."
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
              "BugSmasher has significantly improved my user experience. Knowing 
              that reported issues are addressed promptly creates a sense of reliability 
              and trust. The platform ensures a seamless experience, making me feel more 
              confident and satisfied as a user."
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
                src={'/Testimonials/Ellipse 3.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “BugSmasher has been a game-changer for our marketing team. 
                Its intuitive interface and quick bug resolution have streamlined our 
                workflow significantly. Now, reporting and tracking bugs is not only 
                efficient but has become an integral part of our collaborative process.”
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
              "BugSmashers impact on our design projects has been remarkable. 
              Its user-friendly design simplifies bug reporting, allowing us to 
              focus more on the creative process. The platforms responsiveness 
              has improved collaboration, making it an essential tool for our UX design team."
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
              "BugSmasher has become the backbone of our project management strategy. 
              The seamless integration with our project management tools provides 
              real-time updates on bug resolutions. This has been instrumental in 
              ensuring on-time project delivery, enhancing overall project efficiency."
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
              "BugSmasher has transformed our development process. 
              The detailed bug tracking and collaboration features 
              have significantly improved our workflow. Its now our 
              go-to platform for code releases, ensuring a smoother 
              and more organized development cycle."
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
              "BugSmasher has revolutionized how we approach testing. The organized 
              bug tracking system and robust communication tools have elevated the 
              quality of our software releases. Its made the testing process more 
              efficient and collaborative, positively impacting our QA efforts."
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
              "BugSmasher has been a lifesaver for our support team. 
              The detailed bug reports generated by the platform have 
              simplified our tasks, allowing us to quickly identify and 
              resolve issues. This efficiency has translated to reduced downtime 
              for our users and improved overall support service."
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
              "BugSmasher has significantly improved my user experience. Knowing 
              that reported issues are addressed promptly creates a sense of reliability 
              and trust. The platform ensures a seamless experience, making me feel more 
              confident and satisfied as a user."
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
                src={'/Testimonials/Ellipse 3.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “BugSmasher has been a game-changer for our marketing team. 
                Its intuitive interface and quick bug resolution have streamlined our 
                workflow significantly. Now, reporting and tracking bugs is not only 
                efficient but has become an integral part of our collaborative process.”
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
              "BugSmashers impact on our design projects has been remarkable. 
              Its user-friendly design simplifies bug reporting, allowing us to 
              focus more on the creative process. The platforms responsiveness 
              has improved collaboration, making it an essential tool for our UX design team."
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
              "BugSmasher has become the backbone of our project management strategy. 
              The seamless integration with our project management tools provides 
              real-time updates on bug resolutions. This has been instrumental in 
              ensuring on-time project delivery, enhancing overall project efficiency."
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
              "BugSmasher has transformed our development process. 
              The detailed bug tracking and collaboration features 
              have significantly improved our workflow. Its now our 
              go-to platform for code releases, ensuring a smoother 
              and more organized development cycle."
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
              "BugSmasher has revolutionized how we approach testing. The organized 
              bug tracking system and robust communication tools have elevated the 
              quality of our software releases. Its made the testing process more 
              efficient and collaborative, positively impacting our QA efforts."
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
              "BugSmasher has been a lifesaver for our support team. 
              The detailed bug reports generated by the platform have 
              simplified our tasks, allowing us to quickly identify and 
              resolve issues. This efficiency has translated to reduced downtime 
              for our users and improved overall support service."
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
              "BugSmasher has significantly improved my user experience. Knowing 
              that reported issues are addressed promptly creates a sense of reliability 
              and trust. The platform ensures a seamless experience, making me feel more 
              confident and satisfied as a user."
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
                src={'/Testimonials/Ellipse 3.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “BugSmasher has been a game-changer for our marketing team. 
                Its intuitive interface and quick bug resolution have streamlined our 
                workflow significantly. Now, reporting and tracking bugs is not only 
                efficient but has become an integral part of our collaborative process.”
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
              "BugSmashers impact on our design projects has been remarkable. 
              Its user-friendly design simplifies bug reporting, allowing us to 
              focus more on the creative process. The platforms responsiveness 
              has improved collaboration, making it an essential tool for our UX design team."
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
              "BugSmasher has become the backbone of our project management strategy. 
              The seamless integration with our project management tools provides 
              real-time updates on bug resolutions. This has been instrumental in 
              ensuring on-time project delivery, enhancing overall project efficiency."
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
              "BugSmasher has transformed our development process. 
              The detailed bug tracking and collaboration features 
              have significantly improved our workflow. Its now our 
              go-to platform for code releases, ensuring a smoother 
              and more organized development cycle."
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
              "BugSmasher has revolutionized how we approach testing. The organized 
              bug tracking system and robust communication tools have elevated the 
              quality of our software releases. Its made the testing process more 
              efficient and collaborative, positively impacting our QA efforts."
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
              "BugSmasher has been a lifesaver for our support team. 
              The detailed bug reports generated by the platform have 
              simplified our tasks, allowing us to quickly identify and 
              resolve issues. This efficiency has translated to reduced downtime 
              for our users and improved overall support service."
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
              "BugSmasher has significantly improved my user experience. Knowing 
              that reported issues are addressed promptly creates a sense of reliability 
              and trust. The platform ensures a seamless experience, making me feel more 
              confident and satisfied as a user."
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
                src={'/Testimonials/Ellipse 3.png'}
                alt="testimonials"
                width={114}
                height={114}
              ></Image>
            </div>
            <div className="h-[196px] flex-col justify-start items-center gap-10 flex">
              <div className="self-stretch text-black text-lg font-medium leading-7">
                “BugSmasher has been a game-changer for our marketing team. 
                Its intuitive interface and quick bug resolution have streamlined our 
                workflow significantly. Now, reporting and tracking bugs is not only 
                efficient but has become an integral part of our collaborative process.”
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
              "BugSmashers impact on our design projects has been remarkable. 
              Its user-friendly design simplifies bug reporting, allowing us to 
              focus more on the creative process. The platforms responsiveness 
              has improved collaboration, making it an essential tool for our UX design team."
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
              "BugSmasher has become the backbone of our project management strategy. 
              The seamless integration with our project management tools provides 
              real-time updates on bug resolutions. This has been instrumental in 
              ensuring on-time project delivery, enhancing overall project efficiency."
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
              "BugSmasher has transformed our development process. 
              The detailed bug tracking and collaboration features 
              have significantly improved our workflow. Its now our 
              go-to platform for code releases, ensuring a smoother 
              and more organized development cycle."
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
              "BugSmasher has revolutionized how we approach testing. The organized 
              bug tracking system and robust communication tools have elevated the 
              quality of our software releases. Its made the testing process more 
              efficient and collaborative, positively impacting our QA efforts."
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
              "BugSmasher has been a lifesaver for our support team. 
              The detailed bug reports generated by the platform have 
              simplified our tasks, allowing us to quickly identify and 
              resolve issues. This efficiency has translated to reduced downtime 
              for our users and improved overall support service."
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
              "BugSmasher has significantly improved my user experience. Knowing 
              that reported issues are addressed promptly creates a sense of reliability 
              and trust. The platform ensures a seamless experience, making me feel more 
              confident and satisfied as a user."
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



        </div>
      </div>
    </div>
  )
}