import React from 'react'
import Port1 from '../assets/portfolio.png'
import Share from '../assets/share.svg'
import Techlinks from '../assets/Techlinks.png'
import Arrow from '../assets/arrow.svg'

const Projects = () => {
    return (
        <div>
            <div className='text-center mt-6 mb-8'>
                <span className='uppercase md:text-7xl text-6xl font-bold text-white opacity-12 p-6 z-0'>Project</span>
                <h2 id='heading' className='text-white md:mt-[-55px] mt-[-50px] md:text-4xl text-4xl uppercase'>My <span className='text-[#683cbd]'>Porfolio</span> </h2>
            </div>
            <div data-aos="zoom-out" className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                <div className='border-18 rounded-2xl relative border-[#190d29] '>
                    <img src={Port1} alt="" />
                    <a target='_blank' href='https://nazarbrothers.pk/'><span className='absolute text-white top-0 right-0  p-2 bg-[#190d29da]  backdrop-blur-md'> <img src={Share} alt="" /></span></a>
                    <div className='flex justify-between items-center rounded-tl-2xl absolute bottom-0 bg-gradient-to-r from-[#827cdf] to-[#360d8a] p-2 w-[100%]'>
                        <div className='ml-4'>
                            <h2 className='text-2xl text-white font-bold'>Nazar Brothers</h2>
                            <p className='text-[#dbd6d6fb]'>WordPress, Ecommerce</p>
                        </div>
                        <div>
                            <a href="https://nazarbrothers.pk/"><img src={Arrow} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className='border-18 rounded-2xl relative border-[#190d29] group'>
                    <img src={Techlinks} alt="" />
                    <a target='_blank' href='https://techlinks.pk/'><span className='absolute text-white top-0 right-0  p-2 bg-[#190d29da]  backdrop-blur-md'> <img src={Share} alt="" /></span></a>
                    <div className='hidden group-hover:flex justify-between items-center rounded-tl-2xl absolute bottom-0 bg-gradient-to-r from-[#827cdf] to-[#360d8a] p-2 w-[100%]'>
                        <div className='ml-4'>
                            <h2 className='text-2xl text-white font-bold'>Nazar Brothers</h2>
                            <p className='text-[#dbd6d6fb]'>WordPress, Ecommerce</p>
                        </div>
                        <div>
                            <a href="https://nazarbrothers.pk/"><img src={Arrow} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects
