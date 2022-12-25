import React from 'react'
import nixon from '../assets/nixon.jpg'

const AboutMe = () => {
  return (
    <div className='mt-20 text-left sm:text-center relative' id="aboutMe">
        <div className='pb-20 h-full w-full max-w-[1200px] m-auto px-6 z-30' data-aos="fade-up">
            <p className='text-[#FF0077] text-lg font-semibold uppercase mb-3'>About me</p>
            <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight ">Let me introduce myself.</h1>
            <p className='text-slate-400 mt-6 text-sm lg:text-base font-medium w-full max-w-[800px] m-auto leading-relaxed sm:text-justify'>Hello! I'm Nixon Lim, an aspiring Front-End Developer who loves to develop and turn web design in to a beautiful and functional website. During my years of learning Web Development, I've built some of my dream projects and every step and minute of the process was so fun! Most of the time, I work on Front-End Development since I enjoy turning a web design into a functional website. I also have some knowledge and experience on Back-End Development, where I used NodeJS, ExpressJS, and MongoDB. 
                As an aspiring Front end Developer, I love learning new things, and explore more technologies that I could use in to my future projects.
            </p>
            <div className='mt-6 flex gap-3 items-center max-w-fit sm:mt-6 sm:m-auto'>
                <div className=''>
                    <img src={nixon} alt="" className='w-[52px] h-[52px] md:w-[64px] md:h-[64px] m-auto rounded-full object-cover' />
                </div>
                
                <div className='text-left'>
                    <h2 className='text-white font-semibold text-base md:text-lg'>Nixon Lim</h2>
                    <p className='text-slate-400 text-xs md:text-sm'>Front-End/React JS Developer</p>
                </div>
            </div>
        </div>
        <div className="bg-slate-900 h-[4rem] w-full absolute left-0 right-0 bottom-0 z-30 rotate-100" style={{clipPath: 'polygon(0 10%, 0% 100%, 100% 100%)'}}/>
    </div>
  )
}

export default AboutMe