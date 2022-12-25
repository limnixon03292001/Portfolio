import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className=' h-full w-full pt-24'>
        <div className='min-h-[520px] w-full h-full flex flex-col items-start sm:items-center justify-center px-6 text-left sm:text-center relative z-30'>
            <p className='text-[#FF0077] text-2xl font-semibold'>Hello!</p>
            <h1 className="text-white text-[44px] sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight "  data-aos="fade-up">I'm Nixon Lim.</h1>
            <p className='text-slate-100 mt-3 text-base font-medium md:text-lg'>React JS Developer</p>

            <div>
                <p className='text-slate-400 mt-6 sm:text-md lg:text-lg w-full max-w-[400px] font-medium md:text-lg self-center'>
                    I love turning web design into a functional website using React JS.
                </p>
            </div>
           
            <div className='mt-6'>
                <a href="https://github.com/limnixon03292001" target="_blank" className='text-white rounded-full p-2 inline-block'>
                    <FaGithub size="29"/>
                </a>
                <a href="https://www.facebook.com/limnixon03292001" target="_blank" className='text-white rounded-full p-2  inline-block'>
                    <FaFacebook size="29"/>
                </a>
                <a href="https://www.linkedin.com/in/nixon-lim-7a433023b/" target="_blank" className='text-white rounded-full p-2  inline-block'>
                    <FaLinkedin size="29"/>
                </a>
            </div>
            <div className='mt-6'>
                <svg xmlns="http://www.w3.org/2000/svg" className="m-auto animate-bounce h-10 w-10 text-[#FF0077]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>
            </div>
            
            {/* <lottie-player
                data-aos="fade-left"
                autoplay
                loop
                mode="normal"
                background="transparent"
                src="https://assets1.lottiefiles.com/packages/lf20_bqmgf5tx.json"
                class="astro1Hero"
            /> */}
        </div>
    </div>
  )
}

export default Hero