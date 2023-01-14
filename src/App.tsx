import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Toaster } from 'react-hot-toast'

AOS.init({
  once: true,
  offset: 200,
});

function App() {

  return (
    <div className='font-fontMain antialiased overflow-hidden'>
      <div className="h-full relative bg-gray-50">
        <Navbar/>

        <div className="relative w-full h-full">
          <div className="bg-cover bg-no-repeat bg-[#0B1120] h-full w-full" style={{
          backgroundImage: 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.25) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.25) 100%)'
          }}>
            <div className="absolute z-10 inset-0 bg-[url('./assets/bg-hero-4.png')] [mask-image:linear-gradient(360deg,white,rgba(255,255,255,0))] bg-top"/>
              <Hero/>
              <AboutMe/>
          </div>
        </div>

        <div className="z-10" >
          <Skills/>
        </div>

        <div className='relative w-full h-full'>
          <Projects/>
        </div>

        <div>
          <Contact/>
        </div>

      </div>

      {/* Toast */}
      <Toaster
        position="bottom-center"
        reverseOrder={false}
      />
      {/* Toast End */}
    </div>
  )
}

export default App
