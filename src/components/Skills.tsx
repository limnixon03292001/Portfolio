import React from 'react'
import { skills } from '../data'

const Skills = () => {
  return (
    <div className="overflow-hidden ">
        
        <div className='bg-slate-900 relative py-14 z-20' id="skills">
            <div className='z-20 h-full w-full max-w-[1000px] m-auto px-6 '>
                <p className='text-[#FF0077] text-lg font-semibold uppercase mb-3 sm:text-center' data-aos="fade-right">Skills</p>
                {/* Here are some of the technologies I frequently use. */}
                <h1 className="text-white text-3xl lg:text-4xl font-bold sm:text-center" data-aos="fade-right" data-aos-delay="150">My Tech Stack.</h1>

                <div className='mt-10 z-20 text-center grid grid-cols-3 md:grid-cols-gridSkills gap-y-3 md:gap-4 lg:gap-9'>
                    {skills?.map((skill,id) => (
                        <div key={id} data-aos="zoom-out-up" className="py-2 z-20" data-aos-delay={`${id * 100}`}>
                            <img src={skill.svgUrl} alt="" className='h-11 w-11 sm:w-[56px] sm:h-[56px] m-auto'
                            style={{filter: `drop-shadow(0 0 17px ${skill?.color})`}}/>
                            <p className='text-slate-400 mt-3 text-sm md:text-base sm:text-center'>{skill.title}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills