import React from 'react'

const Experience = () => {
    return (
        <div className='text-white mt-10 '>
            <h2 className='text-center text-4xl bg-clip-text bg-gradient-to-r from-[#360d8a] text-transparent to-[#ffffff] font-bold'>My Experience</h2>
            <div data-aos="zoom-in-up" className='hover:bg-gradient-to-r from-[#360d8a]  transition-all delay-1000  p-6 mt-6 grid md:grid-cols-2 grid-cols-1 bg-[#190d29] rounded-2xl group'>
                <div  className='  flex flex-col gap-2  '>
                    <h4 className='text-[#7343d3] text-xl font-bold group-hover:text-white'>9/2025-Present</h4>
                    <p className='text-gray-400'>1 Month</p>
                    <h2 className='text-2xl font-bold'>Wordpress Doveloper</h2>
                    <p className='text-gray-400'>TECHLINKS SERVICES</p>
                </div>
                <div className=''>
                    <ul className='list-disc'>
                        <li>Design, develop, and customize WordPress themes and plugins.</li>
                        <li>Maintain, update, and optimize websites for speed and performance.</li>
                        <li>Implement responsive, SEO-friendly, and secure web solutions.</li>
                        <li>Collaborate with designers and teams to deliver client requirements.</li>
                        <li>Troubleshoot and fix bugs, errors, and compatibility issues.</li>

                    </ul>


                </div>
            </div>


        </div>
    )
}

export default Experience
