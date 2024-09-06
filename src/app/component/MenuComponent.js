import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MenuComponent = () => {
  const text=useRef(null)

  useEffect(()=>{
    gsap.to(
      text.current,{
        backgroundPosition:'100% 100%',
        duration:5,
        repeat:-1,
        ease:'linear',
        backgroundSize:'300% 300%' 
      }
    )
  })

  return (
    <div className='fixed opacity-80 w-full h-[10vh] z-[999] flex pr-20' >
      <div className='w-[50%] h-[10vh] flex items-center pl-24 '>
        <div
          ref={text}
          style={{
            fontSize:'3rem',
            fontWeight:'bold',
            background: 'linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            backgroundClip:'text',
            color:'transparent',
          }}
        >FLOWLINE</div>
      </div>
      <div className='w-[50%] font-semibold h-[10vh] flex items-center justify-end text-xl space-x-4 text-white'>
        <div>Why</div>
        <div>Models</div>
        <div>Accessories</div>
        <button className='border-2 rounded-3xl w-[6vw] h-[2vw]'>Rent</button>
        <button className='border-2 rounded-3xl w-[8.4vw] h-[2vw]'>Configure</button>
      </div>
    </div>
  );
}

export default MenuComponent;
