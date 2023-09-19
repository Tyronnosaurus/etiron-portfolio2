import React from 'react'
import AnimatedText from './AnimatedText'
import ProfilePic from '../assets/me.jpg'



export const HeroSection = () => {

  return (
    <div className="bg-light dark:bg-dark
                    p-8 md:p-12 lg:p-16 xl:p-24">

      <div className='items-center flex flex-col lg:flex-row'>
          
        <div className='w-[70%] lg:w-1/2 mx-10'>
          <img src={ProfilePic} alt="portrait"
                className='h-auto inline-block lg:w-full border-2' />
        </div>




        <div className='flex flex-col items-center self-center w-full lg:w-1/2'>
          
          <p className='my-4 font-medium w-full
                        text-xs md:text-sm lg:text-base
                        text-center lg:text-left'>
            Hello, I'm
          </p>

          <AnimatedText text="Eduard Tiron"
                        className='!text-center lg:!text-left
                                  !text-3xl md:!text-5xl lg:!text-6xl xl:!text-5xl' />
          
          <p className='my-4 font-medium w-full
                        text-xs md:text-sm lg:text-base
                        text-center lg:text-left'>
            Full-stack Developer | Mechatronics engineer
          </p>

          <p className='my-4 font-medium  w-full
                        text-xs md:text-sm lg:text-base
                        text-center lg:text-left'>
            As a skilled, self-driven full-stack developer and mechatronics engineer, I am dedicated to turning ideas into innovative web applications. 
            Explore my latest projects, showcasing my expertise in React.js and web development.
          </p>

          {/* <p className='my-4 font-medium
                        text-xs md:text-sm lg:text-base
                        text-center lg:text-left'>
            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
            Explore my latest projects and articles, showcasing my expertise in React.js and web development.
          </p> */}

          {/* <p className='my-4 font-medium
                        text-xs md:text-sm lg:text-base
                        text-center lg:text-left'>
            I'm an engineer with an MSc in Automation and an MSc in Mechatronics. I also hold a title in Project Management (CAPM). I have done 200+ hours of voluntary classes in mechanics, machining, welding, pneumatics and CNC, plus 1000s of hours self-learning electronics, programming, web development and data science.

            Over the span of my career I have done four internships at different positions related to the industry sector. I have also worked as a Systems & Process Auditor at PwC (mostly analysing IT security and business processes). I am currently the main programmer for a plastic injection machine that uses ultrasound fusion technology. I am also participating in a few projects for the research centre Eurecat.

            A great percentage of my free time is spent developing projects in many different areas: electronics, programming, web development, 3D printing...
          </p> */}

          {/* Buttons */}
          <div className='flex items-center mt-2 self-center lg:self-start'>

            <a href="/" target="_blank" rel="noreferrer"
              className='flex items-center rounded-lg font-semibold
                         p-2 px-4 md:p-2.5 md:px-6
                         text-sm md:text-base
                         bg-dark text-light hover:bg-light hover:text-dark
                         border-2 border-solid border-dark hover:border-dark
                         dark:bg-light dark:text-dark dark:border-light dark:hover:bg-dark dark:hover:text-light'>
              Resume
            </a>

            <a href="mailto:abcd@gmail.com" target="_blank" rel="noreferrer"
              className='font-medium capitalize underline text-dark dark:text-light
                         ml-2 xs:ml-4
                         text-sm md:text-base'>
              Email me
            </a>

          </div>

        </div>
      </div>

    </div>
  )

}
