import { projects } from '../data';
import { VscGithubAlt } from 'react-icons/vsc';
import { AiOutlineEye } from 'react-icons/ai';
import { ReactNode } from 'react';

const Projects = () => {
  return (
    <div className="bg-center md:bg-left bg-cover bg-no-repeat bg-[#0B1120] h-full w-full " style={{
    backgroundImage: 'linear-gradient(268deg, rgba(204, 0, 187, 0.25) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(271deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.25) 100%)'
    }}>
        <div className="absolute z-10 inset-0 bg-[url('./assets/bg3.svg')]  [mask-image:linear-gradient(80deg,white,rgba(255,255,255,0))] bg-top"/>
        <div className="bg-slate-900 h-[4rem] w-full absolute left-0 right-0 top-0 z-30 rotate-180" style={{clipPath: 'polygon(0 10%, 0% 100%, 100% 100%)'}}/>

        <div className='relative z-20 w-full max-w-[1200px] py-20 px-3 md:px-6 mx-auto text-white' id="projects">
           
            <p className='text-[#FF0077] text-lg font-semibold uppercase mb-3 text-left sm:text-center' data-aos="fade-right">Projects</p>
            <h1 className="text-white text-3xl lg:text-4xl font-bold text-left sm:text-center" data-aos="fade-right" data-aos-delay="150">My projects.</h1>

            <div className="grid grid-cols-gridProjects gap-16 mt-16">
                {projects?.map((project,id) => (
                    <div data-aos="fade-up"
                    data-aos-anchor-placement="top-center" key={id}>
                        <div className='mb-10'>
                            <img src={project?.imageUrl} alt="" className='w-full max-w-full block object-cover rounded-lg' />
                        </div>
                        <div className='w-full text-left'>

                            <h1 className="text-white text-3xl lg:text-4xl font-bold">{project?.title}</h1>

                            <div className='mt-4 w-full'>
                                {project?.techs.map((tech,id) => (
                                    <div className='inline-block' key={id}>
                                        {pills(tech)}
                                    </div>
                                ))}
                            </div>

                            <p className='mt-5 text-slate-400 text-sm lg:text-base font-medium'>{project?.content}</p>

                            {project?.testAccount && 
                                <div className='text-slate-400 font-medium text-sm lg:text-base'>
                                    <p>{project?.testAccount?.email}</p>
                                    <p>{project?.testAccount?.password}</p>
                                </div>
                            }

                            <div className='mt-4 flex items-center'>
                                <a href={project?.liveDemoLink} target= "_blank" className='bg-[#FF0077] text-white py-2 px-4 rounded-full mr-2 flex items-center justify-center flex-nowrap max-w-max font-medium text-sm sm:text-base'><AiOutlineEye size="25"/> <span className='ml-1'>View Site</span></a>

                                <a href={project?.githubLink} target= "_blank" className='bg-[#FF0077]/10 text-[#FF0077] py-2 px-4 rounded-full flex items-center justify-center flex-nowrap max-w-max font-medium text-sm sm:text-base'><VscGithubAlt size="20"/><span className='ml-2'>Code</span></a>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

        </div>

    </div>
  )
}

export default Projects

type TechType = {
    tech: ReactNode
}

const pills = (tech: TechType) => {
    
    switch(tech?.tech){
        case 'React JS':
            return <p className='text-cyan-600 bg-cyan-400/10 py-1 px-2 rounded-full mr-2 mb-2 break-normal inline-block  text-sm font-medium'>{tech?.tech}</p>
      
        case 'Tailwind CSS':
            return <p className='text-sky-600 bg-sky-400/10 py-1 px-2 rounded-full mr-2 mb-2 break-normal inline-block  text-sm font-medium'>{tech?.tech}</p>

        case 'Module.CSS':
            return <p className='text-lime-600 bg-lime-400/10 py-1 px-2 rounded-full mr-2 mb-2 break-normal inline-block  text-sm font-medium'>{tech?.tech}</p>

        case 'React Query':
            return <p className='text-rose-600 bg-rose-400/10 py-1 px-2 rounded-full mr-2 mb-2 break-normal inline-block  text-sm font-medium'>{tech?.tech}</p>

        case 'Redux':
            return <p className='text-violet-600 bg-violet-400/10 py-1 px-2 rounded-full mr-2 mb-2 break-normal inline-block  text-sm font-medium'>{tech?.tech}</p>

        case 'MongoDB':
            return <p className='text-green-600 bg-green-400/10 py-1 px-2 rounded-full mr-2 mb-2 break-normal inline-block  text-sm font-medium'>{tech?.tech}</p>

        case 'PostgreSQL':
            return <p className='text-blue-600 bg-blue-400/10 py-1 px-2 rounded-full mr-2 mb-2 break-normal inline-block  text-sm font-medium'>{tech?.tech}</p>

        case 'Express JS':
            return  <p className='text-teal-600 bg-teal-400/10 py-1 px-2 rounded-full mr-2 mb-2 break-normal inline-block  text-sm font-medium'>{tech?.tech}</p>

        case 'Node JS':
            return <p className='text-emerald-600 bg-emerald-400/10 py-1 px-2 rounded-full mr-2 mb-2 break-normal inline-block  text-sm font-medium'>{tech?.tech}</p>

        case 'Socket.io':
            return <p className='text-yellow-600 bg-yellow-400/10 py-1 px-2 rounded-full mr-2 mb-2 break-normal inline-block  text-sm font-medium'>{tech?.tech}</p>

        case 'CSS':
            return <p className='text-lime-600 bg-lime-400/10 py-1 px-2 rounded-full mr-2 mb-2 break-normal inline-block  text-sm lfont-medium'>{tech?.tech}</p>
    }
}