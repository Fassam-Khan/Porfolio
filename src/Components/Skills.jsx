import React from 'react'
import Html from '../assets/html.png'
import CSS from '../assets/css.jpg'
import Javascript from '../assets/javascript.jpg'
import Reactlogo from '../assets/react.png'
import Nextjs from '../assets/nextjs.png'
import Tailwind from '../assets/tailwindcss.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const Skills = () => {
    return (
        <div  className='mt-6  '>
            <div>
                <h2 className='text-center text-4xl bg-clip-text bg-gradient-to-r from-[#7749d5] text-transparent to-[#cbb0f3] font-bold'>My Skills</h2>
            </div>
            <div data-aos="zoom-in" className='flex justify-center items-center gap-6 mt-4 flex-wrap'>
                <div className='flex flex-col '>
                    <div className='text-white hover:bg-[#341c5e] active:bg-[#341c5e]  transition-all delay-100  border flex justify-center items-center border-[#8d4dd3] w-24 rounded-2xl h-24'><img src={Html} alt="" className='w-20 ' /></div>
                    <span className='text-white text-center '> Html</span>
                </div>
                <div className='flex flex-col '>
                    <div className='text-white hover:bg-[#341c5e]  transition-all delay-100  border flex justify-center items-center border-[#8d4dd3] w-24 rounded-2xl h-24 '><img src={CSS} alt="" className='w-20 ' /></div>
                    <span className='text-white text-center '> Css</span>
                </div>
                <div className='flex flex-col '>
                    <div className='text-white hover:bg-[#341c5e]  transition-all delay-100  border flex justify-center items-center border-[#8d4dd3] w-24 rounded-2xl h-24'><img src={Javascript} alt="" className='w-20 ' /></div>
                    <span className='text-white text-center '> Javascript</span>
                </div>
                <div className='flex flex-col '>
                    <div className='text-white hover:bg-[#341c5e]  transition-all delay-100  border flex justify-center items-center border-[#8d4dd3] w-24 rounded-2xl h-24'><img src={Reactlogo} alt="" className='w-20 ' /></div>
                    <span className='text-white text-center '> React</span>
                </div>
                <div className='flex flex-col '>
                    <div className='text-white hover:bg-[#341c5e]  transition-all delay-100  border flex justify-center items-center border-[#8d4dd3] w-24 rounded-2xl h-24'><img src={Nextjs} alt="" className='w-20' /></div>
                    <span className='text-white text-center '> Next Js</span>
                </div>
                <div className='flex flex-col '>
                    <div className='text-white hover:bg-[#341c5e]  transition-all delay-100  border flex justify-center items-center border-[#8d4dd3] w-24 rounded-2xl h-24'><img src={Tailwind} alt="" className='w-20 ' /></div>
                    <span className='text-white text-center '> Tailwind</span>
                </div>
            </div>

        </div>
    )
}

export default Skills
