'use client'
import {React,useEffect} from 'react'
import { ReactLenis, useLenis } from 'lenis/react'
import Lenis from '@studio-freight/lenis';
import Hero from './component/Hero'
import MenuComponent from './component/MenuComponent'
import AfterHero from './component/AfterHero';
const page = () => {
  useEffect(()=>{
    const lenis=new Lenis({
      
      duration:2,
      direction:'vertical',
      smooth: true,
      easing:(t)=>Math.min(1,1.001-Math.pow(2,-10*t)),
      gestureDirection:'vertical',
      smoothTouch:false,
      scrub:10,
    })
    function raf(time){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return()=>{
      lenis.destroy()
    }
  })
  return (
    <div id='smooth-wrapper' className='bg-black h-screen'>
      <div id='smooth-content'>
        <MenuComponent/>
        <Hero/>
        <AfterHero/>
      </div>
    </div>
  )
}

export default page