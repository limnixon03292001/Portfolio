import React from 'react'
import { skills } from '../data'
import reactLogo from '../assets/react.svg';
import reactQuery from '../assets/reactQuery.svg';
import redux from '../assets/redux.svg';
import tsLogo from '../assets/tsLogo.svg';
import tailwindcss from '../assets/tailwindcss.svg';
import mongodb from '../assets/mongodb.svg';
import nodejs from '../assets/nodejs.svg';
import expressjs from '../assets/expressjs.svg';
import postman from '../assets/postman.svg';
import postgresql from '../assets/postgresql.png';
import NixonLim from './NixonLim';

const Skills = () => {
  return (
    <div className="overflow-hidden relative ">
         
        <div className='bg-slate-900 relative py-8 z-20' id="skills">
        {/* <NixonLim style={'w-auto h-full absolute top-0 bottom-0 left-0'}/> */}
        {/* <NixonLim style={'w-auto h-full absolute top-0 bottom-0 right-0 rotate-90'}/> */}
            <div className='z-20 h-full w-full max-w-[1000px] m-auto px-6 '>
                <p className='text-[#FF0077] text-lg font-semibold uppercase mb-3 sm:text-center' data-aos="fade-right">Skills</p>
                {/* Here are some of the technologies I frequently use. */}
                <h1 className="text-white text-3xl lg:text-4xl font-bold sm:text-center" data-aos="fade-right" data-aos-delay="150">My Tech Stack.</h1>

                <div className='mt-10 z-20 text-center w-full grid grid-cols-3 sm:grid-cols-gridSkills gap-5 justify-center gap-y-3'>
                    {/* {skills?.map((skill,id) => (
                        <div key={id} data-aos="zoom-out-up" className="py-2 z-20" data-aos-delay={`${id * 100}`}>
                            <img src={skill.svgUrl} alt="" className='h-11 w-11 sm:w-[56px] sm:h-[56px] m-auto'
                            style={{filter: `drop-shadow(0 0 17px ${skill?.color})`}}/>
                            <p className='text-slate-400 mt-3 text-sm md:text-base sm:text-center'>{skill.title}</p>
                        </div>
                    ))} */}
                     <div data-aos="zoom-out-up" className="py-2 z-20 sm:col-start-2 sm:col-span-3">
                        <img src={reactLogo} alt="" className='h-11 w-11 sm:w-[56px] sm:h-[56px] m-auto'
                        style={{filter: `drop-shadow(0 0 17px rgb(0, 216, 255))`}}/>
                        <p className='text-slate-400 mt-3 text-sm md:text-sm sm:text-center'>React JS</p>
                    </div>
                    <div data-aos="zoom-out-up" className="py-2 z-20 sm:col-start-2 sm:col-end-2"  >
                        <img src={reactQuery} alt="" className='h-11 w-11 sm:w-[56px] sm:h-[56px] m-auto'
                        style={{filter: `drop-shadow(0 0 17px rgb(255, 65, 84)`}}/>
                        <p className='text-slate-400 mt-3 text-sm md:text-sm sm:text-center'>React Query</p>
                    </div>
                    <div data-aos="zoom-out-up" className="py-2 z-20 sm:col-start-3 sm:col-end-4"  >
                        <img src={redux} alt="" className='h-11 w-11 sm:w-[56px] sm:h-[56px] m-auto'
                        style={{filter: `drop-shadow(0 0 17px violet)`}}/>
                        <p className='text-slate-400 mt-3 text-sm md:text-sm sm:text-center'>Redux</p>
                    </div>
                    <div data-aos="zoom-out-up" className="py-2 z-20 sm:col-start-4 sm:col-end-5"  >
                        <img src={tsLogo} alt="" className='h-11 w-11 sm:w-[56px] sm:h-[56px] m-auto'
                        style={{filter: `drop-shadow(0 0 17px rgb(13, 129, 207))`}}/>
                        <p className='text-slate-400 mt-3 text-sm md:text-sm sm:text-center'>Typescript</p>
                    </div>
                    <div data-aos="zoom-out-up" className="py-2 z-20 sm:col-start-1 sm:col-end-2"  >
                        <img src={tailwindcss} alt="" className='h-11 w-11 sm:w-[56px] sm:h-[56px] m-auto'
                        style={{filter: `drop-shadow(0 0 17px rgb(56, 189, 248))`}}/>
                        <p className='text-slate-400 mt-3 text-sm md:text-sm sm:text-center'>Tailwind CSS</p>
                    </div>
                    <div data-aos="zoom-out-up" className="py-2 z-20"  >
                        <img src={postgresql} alt="" className='wh-11 w-11 sm:w-[56px] sm:h-[56px] m-auto'
                        style={{filter: `drop-shadow(0 0 17px rgb(51, 103, 145))`}}/>
                        <p className='text-slate-400 mt-3 text-sm md:text-sm sm:text-center'>PostgreSQL</p>
                    </div>
                    <div data-aos="zoom-out-up" className="py-2 z-20"  >
                        <img src={mongodb} alt="" className='h-11 w-11 sm:w-[56px] sm:h-[56px] m-auto'
                        style={{filter: `drop-shadow(0 0 17px rgb(0, 237, 100))`}}/>
                        <p className='text-slate-400 mt-3 text-sm md:text-sm sm:text-center'>MongoDB</p>
                    </div>
                    <div data-aos="zoom-out-up" className="py-2 z-20"  >
                        <img src={nodejs} alt="" className='h-11 w-11 sm:w-[56px] sm:h-[56px] m-auto'
                        style={{filter: `drop-shadow(0 0 17px rgb(83, 158, 67))`}}/>
                        <p className='text-slate-400 mt-3 text-sm md:text-sm sm:text-center'>Node JS</p>
                    </div>
                    <div data-aos="zoom-out-up" className="py-2 z-20"  >
                        <img src={expressjs} alt="" className='h-11 w-11 sm:w-[56px] sm:h-[56px] m-auto'
                        style={{filter: `drop-shadow(0 0 17px white)`}}/>
                        <p className='text-slate-400 mt-3 text-sm md:text-sm sm:text-center'>Express JS</p>
                    </div>
                    <div data-aos="zoom-out-up" className="py-2 z-20 sm:col-start-3 sm:cols-end-4"  >
                        <img src={postman} alt="" className='h-11 w-11 sm:w-[56px] sm:h-[56px] m-auto'
                        style={{filter: `drop-shadow(0 0 17px rgb(255, 108, 55))`}}/>
                        <p className='text-slate-400 mt-3 text-sm md:text-sm sm:text-center'>Postman</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills