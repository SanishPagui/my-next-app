import React from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useLayoutEffect,useRef} from 'react'
import { MotionPathPlugin } from 'gsap/all'
import Spline from '@splinetool/react-spline/next';
gsap.registerPlugin(ScrollTrigger,MotionPathPlugin)
const Hero = () => {
    const ref=useRef(null)
    gsap.matchMedia().add("(min-width:1021px)",()=>{
    useLayoutEffect(()=>{
        const element=ref.current
        const timeline=gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top top',
                end:"top bottom",
                scrub: 1,
                // markers:true
              }
              
        })
        timeline.fromTo(
            element,
            {y:0},
            {y:0 ,duration:1}
        )
        let tl=gsap.timeline({
            scrollTrigger:{
                trigger:'.txt',
                start:'top center',
                end:'top top',
                scrub:5,
                // markers:true
            }
        })
        tl.fromTo(
            '.txt',
            {y:120},
            {y:-200,duration:1}
        )
        let t2=gsap.timeline({
            scrollTrigger:{
                trigger:'after_txt',
                start:'55% 54%',
                end:"55% top",
                scrub:5,
                markers:true
            }
        })
        t2.fromTo(
            '.after_txt',
            {y:0},
            {y:-400,duration:1}
        )
        let b1 = gsap.timeline({
            scrollTrigger: {
              trigger: '.b1',
              start: 'top 74%',
              end:"top 74%",
              scrub:2,

            },
          });
          b1.to('.b1', {
            duration: 1,
            motionPath: {
              path:[{x:-100,y:0},{x:-100,y:10}],
              autoRotate: false,
              alignOrigin: [0.5, 0.5],      
            },
          });
      
          let b2 = gsap.timeline({
            scrollTrigger: {
              trigger: '.b2',
              start: 'top 80%',
              end:"top 80%",
              scrub: 2,
            },
          });
          b2.to('.b2', {
            duration: 1,
            motionPath: {
              path:[{x:150,y:0},{x:150,y:-50}], // Curved path
              autoRotate: false,
              alignOrigin: [0.5, 0.5],
            },
          });
    })
    })
  return (
    <div ref={ref}  className=' w-full h-screen border-t-2 border-black z-50 flex items-center'>
        <div className='absolute w-full h-screen z-0'>
            {/* <Spline
            scene="https://prod.spline.design/F7u-mAtXR4SktgFv/scene.splinecode"
            width={1920}
            height={1080}
            /> */}
        </div>
        <div className='mt-[90vw] w-full h-screen bg-black'>
            <div className='flex w-full h-[10vw] items-center bg-red-500 -translate-x-full'>
                <div className='txt pl-4 text-xl text-white font-sm h-fit flex items-center '>
                    FLOWLINE
                </div>
            </div>
            <div className='h-fit w-full text-3xl mt-[55vw] sm:mt-[25vw] sm:pr-[30vw] sm:pl-[5vw] sm:text-[5.3vw]  text-white pl-5 font-light' >
            Enhance the experience of every dish with this magical serving table
            </div>
            <div className='after_txt mt-[15vw] sm:text-[2.3vw] sm:mt-[7vw] sm:leading-6 sm:pr-[32vw] w-full pl-4 sm:pl-[5vw] pr-[2vw] text-xs h-fit text-white opacity-50'>
                More taste and a warmer experience, more beautiful, sleek presentations, more honor for the kitchen work, more satisfied customers and less stress!
            </div>
            <div className=' w-full h-[40%] text-white'>
                <div className=" sm:pl-[5vw] sm:justify-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-[2vw] text-sm mt-14 sm:mt-[7vw] w-full flex sm:flex-row flex-col items-start justify-center ease-in-out duration-1000">
                    <button className='b1  bg-[#28292A] p-[1.5vw] pl-[4vw] sm:pl-[2vw] pr-[4vw] sm:pr-[2vw] rounded-2xl sm:rounded-3xl w-fit flex items-center justify-center ease-in-out'>
                        Configure Flowline
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 17 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=" rotate-45 ml-2"
                        >
                            <path
                            d="M2.23403 2.59452L2.3027 1.17642C2.33177 0.575968 2.83999 0.126446 3.43616 0.173872L15.8315 1.0901C16.4311 1.13457 16.8923 1.656 16.8602 2.25302L16.2589 14.671C16.2298 15.2714 15.7216 15.7209 15.1254 15.6735L13.7095 15.5685C13.1036 15.5235 12.64 14.9859 12.6822 14.38L13.2278 6.87822L3.61846 15.3777C3.17377 15.771 2.49134 15.7204 2.08779 15.2642L1.11683 14.1664C0.71328 13.7102 0.746376 13.0267 1.19107 12.6334L10.8004 4.13385L3.28815 3.75934C2.67829 3.73013 2.2013 3.20432 2.23403 2.59452Z"
                            fill="#FAFAFA"
                            />
                        </svg>
                    </button>
                    <button className='b2 bg-[#28292A] p-[1.5vw] pl-[4vw] sm:pl-[2vw] pr-[4vw] sm:pr-[2vw] rounded-2xl sm:rounded-3xl w-fit flex items-center justify-center ease-in-out'>
                        Rent Flowline
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 17 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className=" rotate-45 ml-2"
                        >
                            <path
                            d="M2.23403 2.59452L2.3027 1.17642C2.33177 0.575968 2.83999 0.126446 3.43616 0.173872L15.8315 1.0901C16.4311 1.13457 16.8923 1.656 16.8602 2.25302L16.2589 14.671C16.2298 15.2714 15.7216 15.7209 15.1254 15.6735L13.7095 15.5685C13.1036 15.5235 12.64 14.9859 12.6822 14.38L13.2278 6.87822L3.61846 15.3777C3.17377 15.771 2.49134 15.7204 2.08779 15.2642L1.11683 14.1664C0.71328 13.7102 0.746376 13.0267 1.19107 12.6334L10.8004 4.13385L3.28815 3.75934C2.67829 3.73013 2.2013 3.20432 2.23403 2.59452Z"
                            fill="#FAFAFA"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero