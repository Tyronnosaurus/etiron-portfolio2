import { React, useState } from 'react'
import AnimatedText from './AnimatedText'
import ProfilePic from '../assets/me.jpg'



export const HeroSection = () => {

  const [showQuestion, setShowQuestion] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [questionAlreadyAnswered, setQuestionAlreadyAnswered] = useState(false)


  // Open the security question to download resume (if it hasn't been solved already)
  const handleOpenQuestion = () => {
    if (!questionAlreadyAnswered)
      setShowQuestion(true);
    else
      handleResumeDownload();
  };

  // Track answer written by user
  const handleAnswerChange = (event) => {
    setUserAnswer(event.target.value);
  };


  // Check if the user's answer is correct
  const handleCheckAnswer = () => {  
    if (userAnswer === '4') {
      handleResumeDownload();
      setShowQuestion(false);
      setQuestionAlreadyAnswered(true);
    } else {
      alert('Incorrect answer. Please try again.');
    }
  };

  // Download resume
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');  // To open in new tab
    link.href = '/resume/Resume Eduard Tiron.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="bg-light dark:bg-dark
                    p-8 md:p-12 lg:p-16 xl:p-24">

      <div className='items-center flex flex-col lg:flex-row'>
        
        {/* Picture */}
        <div className='w-[70%] lg:w-1/2 mx-10'>
          <img src={ProfilePic} alt="portrait"
                className='h-auto inline-block lg:w-full border-2' />
        </div>


        {/* Description */}
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


          {/* Buttons */}
          <div className='flex items-center mt-2 self-center lg:self-start'>

            <a href="mailto:Eduard.Tiron@gmail.com" target="_blank" rel="noreferrer"
               className='flex items-center rounded-lg font-semibold
                          p-2 px-4 md:p-2.5 md:px-6 mr-2
                          text-sm md:text-base
                          first-letter: bg-dark text-light hover:bg-light hover:text-dark
                          border-2 border-solid border-dark hover:border-dark
                          dark:bg-light dark:text-dark dark:border-light dark:hover:bg-dark dark:hover:text-light'>
              Email me
            </a>

            <button href="/" target="_blank" rel="noreferrer"
              className='flex items-center rounded-lg font-semibold
                         p-2 px-4 md:p-2.5 md:px-6
                         text-sm md:text-base
                         bg-dark text-light hover:bg-light hover:text-dark
                         border-2 border-solid border-dark hover:border-dark
                         dark:bg-light dark:text-dark dark:border-light dark:hover:bg-dark dark:hover:text-light'
              onClick={handleOpenQuestion}>
              Resume
            </button>

            {showQuestion && (
              <div className='flex flex-col items-center p-2'>
                <label>What is 2+2?</label>
                <input className='w-5' type="text" value={userAnswer} onChange={handleAnswerChange} />
                <button className='font-bold' onClick={handleCheckAnswer}>Download</button>
              </div>
            )}



          </div>

        </div>
      </div>

    </div>
  )

}
