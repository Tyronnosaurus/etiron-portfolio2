import React from 'react'
import AnimatedText from './AnimatedText'
import ProfilePic from '../assets/developer-pic-1.png'



export const HeroSection = () => {

  return (
    <div className="bg-light dark:bg-dark
                    p-8 md:p-12 lg:p-16 xl:p-24">

      <div className='items-center flex flex-col lg:flex-row'>
          
        <div className='w-[70%] lg:w-1/2'>
          <img src={ProfilePic} alt="portrait"
                className='h-auto inline-block lg:w-full' />
        </div>

        <div className='flex flex-col items-center self-center w-full lg:w-1/2'>
          <AnimatedText text="Turning Vision Into Reality With Code And Design."
                        className='!text-center lg:!text-left
                                  !text-3xl md:!text-5xl lg:!text-6xl xl:!text-5xl' />
          <p className='my-4 font-medium
                        text-xs md:text-sm lg:text-base
                        text-center lg:text-left'>
            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
            Explore my latest projects and articles, showcasing my expertise in React.js and web development.
          </p>


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
