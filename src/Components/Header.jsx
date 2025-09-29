import React from 'react'
import Logo from '../assets/logo1.png'
import Menue from '../assets/Hamburger.svg'
import { useState } from 'react'
import Cross from '../assets/cancel.svg'

const Header = () => {
    const [open, setOpen] = useState(false)

    const toggel = () => {
        setOpen(!open)

    }

    return (
        <>
            <div className='text-white flex justify-between items-center   relative bg-transparent mt-5 ml-4 mr-4'>
                <div className='z-10'>
                    <img src={Logo} alt="" className='w-[40px]   ' />
                    {/* <div className='blur-xl w-50 rouded-full z-[-1] h-30 bg-[#221239] absolute top-0 left-6 pl-[26px] mt-[-15px] pt-[30px] pr-[26px] pb-[20px]'></div> */}


                </div>
                <div className='flex gap-10'>
                    <button className='bg-gradient-to-r from-[#7343d3] to-[#1e0e38] hover:from-[#1e0e38] hover:to-[#7343d3]  p-2 w-[100px] rounded-full font-bold cursor-pointer' >Hire Me!</button>
                    <button onClick={toggel} className="cursor-pointer screen500:w-[45px] w-[35px] screen500:h-[45px] h-[35px] flex flex-col justify-center items-center screen500:gap-[5px] gap-[4px] bg-primary rounded-full shadow-[1px_1px_3px_0px_#b3b3b3] backdrop-blur-sm"><img src={Menue} alt="" /></button>
                </div>


            </div>
            {open && (
                <div className='fixed  md:w-[50%] w-screen z-50 top-0  backdrop-blur-sm p-6 bg-transparent flex justify-center h-screen '>
                    <div className='absolute right-6 top-2 '>
                        <img  src={Cross} alt="" onClick={()=>setOpen(false)} className='cursor-pointer' />
                    </div>
                    <div className=''>
                        <ul className='flex flex-col text-white justify-center mt-20 gap-6 text-center'>
                            <li className='text-4xl'>About</li>
                            <li className='text-4xl'>Skills</li>
                            <li className='text-4xl'>Experience</li>
                            <li className='text-4xl'>Porfolio</li>
                            <li className='text-4xl'>Achievements</li>
                            <li className='text-4xl'>Certification</li>
                            <li className='text-4xl'>Contact</li>



                            



                        </ul>
                    </div>



                </div>


            )}
        </>


    )
}

export default Header
