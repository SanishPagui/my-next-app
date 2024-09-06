import React from 'react'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useLayoutEffect,useRef} from 'react'
import { MotionPathPlugin } from 'gsap/all'
import Spline from '@splinetool/react-spline/next';
gsap.registerPlugin(ScrollTrigger,MotionPathPlugin)
const Hero = () => {
    const ref=useRef(null)
    useLayoutEffect(()=>{
        const element=ref.current
        const timeline=gsap.timeline({
            scrollTrigger:{
                trigger: element,
                start:'top top',
                scrub:10,
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
                end:'',
                scrub:10,
                // markers:true
            }
        })
        tl.fromTo(
            '.txt',
            {y:10},
            {y:-50,duration:1}
        )
        let t2=gsap.timeline({
            scrollTrigger:{
                trigger:'after_txt',
                start:'top top',
                scrub:10,
            }
        })
        t2.fromTo(
            '.after_txt',
            {y:0},
            {y:-80,duration:1}
        )
        gsap.to(".container", {
            scrollTrigger: {
                trigger: ".container",
                start: "top 70%", // when the top of the container hits the viewport
                end: "bottom top",
                scrub: 20, // smooth scrubbing
                toggleActions: "play reverse play reverse",
                markers: true, // Optional, for debugging
            },
            onStart: () => {
                document.querySelector(".container").style.flexDirection = "row";
                gsap.to(".container-button", {
                    duration: 1,
                    ease: "power2.inOut",
                });
            },
            onReverseComplete: () => {
                document.querySelector(".container").style.flexDirection = "column";
                gsap.to(".container-button", {
                    duration: 1,
                    ease: "power2.inOut",
                });
            },
        });
    })
  return (
    <div ref={ref}  className=' w-full h-screen border-t-2 border-black z-50 flex items-center'>
        <div className='absolute w-full h-screen z-0'>
            <Spline
            scene="https://prod.spline.design/F7u-mAtXR4SktgFv/scene.splinecode" 
            width={1920}
            height={1080}
        />
        </div>
        <div className='mt-[11vw] w-full h-screen bg-black'>
            <div className='flex w-[50%] h-[35vw] items-center'>
                <div className='txt pl-20 text-9xl text-white font-sm h-fit flex items-center '>
                    FLOWLINE
                </div>
            </div>
            <div className='after_txt -mt-[10vw] w-[30%] pl-20 text-xl h-fit text-white'>
                More taste and a warmer experience, more beautiful, sleek presentations, more honor for the kitchen work, more satisfied customers and less stress!
            </div>
            <div className=' w-[50%] h-[40%] text-white'>
                <div className="container space-y-4 text-2xl mt-14 w-[70%] flex flex-col items-center justify-center ease-in-out duration-1000">
                    <button className='container-button  border-2 p-1 rounded-2xl w-[13vw] flex items-center justify-center ease-in-out'>
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
                    <button className='container-button border-2 p-1 rounded-2xl w-[10vw] flex items-center justify-center ease-in-out'>
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