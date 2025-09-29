import React from 'react'

const About = () => {
    return (
        <div className='flex flex-col mt-6 '>
            <div className='text-center mt-6 mb-8'>
                <span className='uppercase md:text-8xl text-6xl font-bold text-white opacity-12 z-0'>Resume</span>
                <h2 id='heading' className='text-white md:mt-[-68px] mt-[-50px] md:text-5xl text-4xl uppercase'>About <span className='text-[#683cbd]'>Me</span> </h2>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
                {/* left col */}
                <div>
                    <div>
                        <h1 className=' bg-clip-text text-transparent font-bold text-2xl bg-gradient-to-r from-[#7749d5] to-[#d1c7e0]'>Personal Infos</h1>
                    </div>
                    <div className='flex justify-between gap-6 mt-6 w-[100%] flex-wrap   '>
                        <div className='flex gap-2 md:w-[46%] w-[100%] '>
                            <label className='text-gray-400'>First Name: </label>
                            <p className='text-white'>Muhammad</p>
                        </div>
                        <div className='flex gap-2 md:w-[46%] w-[100%] '>
                            <label className='text-gray-400'>Last Name: </label>
                            <p className='text-white'>Fassam</p>
                        </div>
                        <div className='flex gap-2 md:w-[46%] w-[100%]'>
                            <label className='text-gray-400'>Resident: </label>
                            <p className='text-white'>Pakistan</p>
                        </div>
                        <div className='flex gap-2 md:w-[46%] w-[100%]'>
                            <label className='text-gray-400'>Freelance: </label>
                            <p className='text-white'>Available</p>
                        </div>

                        <div className='flex gap-2 md:w-[46%] w-[100%]'>
                            <label className='text-gray-400'>Phone:</label>
                            <a className='text-white  underline' href="tel:+923362823914">+92 314 2351286</a>
                        </div>
                        <div className='flex gap-2 md:w-[46%] w-[100%]'>
                            <label className='text-gray-400'>Whatsapp</label>
                            <a className='text-white  underline' href="https://wa.me/923142351286">+92 314 2351286</a>
                        </div>
                        <div className='flex gap-2 w-[100%]'>
                            <label className='text-gray-400'>Email: </label>
                            <a className='text-white underline' href="mailto:muhammadfassam4@gmail.com">muhammadfassam4@gmail.com</a>
                        </div>


                    </div>
                </div>
                {/* Right Col */}
                <div className='text-white '>
                Hi, I’m Muhammad Fassam, a passionate Frontend Developer currently pursuing my Intermediate studies. I’m self-taught through YouTube and online resources, focusing on building modern, responsive, and user-friendly web applications. I enjoy learning new technologies and continuously improving my skills to grow as a developer.
                </div>

            </div>


        </div>
    )
}

export default About
