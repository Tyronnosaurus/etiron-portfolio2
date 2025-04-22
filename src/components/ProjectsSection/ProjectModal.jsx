import React from 'react'

import Modal from 'react-modal';
import './ProjectModal.css';

import ControlledCarousel from './ControlledCarousel';

import { CloseX } from '../Icons';
import { GithubIcon } from '../Icons';



const LinkButton = ({href, text}) => {
    return(
        <a href={href} target="_blank" rel="noreferrer"
           className="border rounded-md
                      p-2 px-4 md:p-2.5 md:px-6
                      text-sm md:text-base
                      bg-dark text-light hover:bg-light hover:text-dark" >
            {text}
        </a>
    )
}


// The modal's CSS is quite tricky (regardless of using either inline css, css file or Tailwind)
// Read this for useful info:
// https://reactcommunity.org/react-modal/styles/
// https://reactcommunity.org/react-modal/styles/classes/
// https://reactcommunity.org/react-modal/

const ProjectModal = ({modalData, show, handleClose}) => {

    return (

        <Modal isOpen={show}
               onRequestClose={handleClose}
               onClick={handleClose}
               className="absolute left-0 right-0 mx-auto top-16 w-[80%] max-w-[1200px] max-h-[90%]
                          border border-dark rounded-xl outline-none
                          p-5 overflow-y-auto 
                          bg-light"
               overlayClassName="fixed inset-0 bg-dark bg-opacity-60 " >

            

            <button className="absolute top-0 right-0" onClick={handleClose}>
                <CloseX />
            </button>

            <h2 className="text-3xl pb-4 px-6">{modalData.title}</h2>
            
            <ControlledCarousel images={modalData.images} />
            
            {/* The text is provided as HTML to allow for more flexibility in formatting. Since I'm writing it myself (not a 3rd party), I can assume that it is safe to use. */}
            <div className="description text-left" dangerouslySetInnerHTML={{__html: modalData.description}} />

            <div className="flex flex-row gap-10 justify-center py-2">
                {modalData.github_link &&
                    <a href={modalData.github_link} target="_blank" rel="noreferrer">
                        <GithubIcon />
                    </a>
                }

                {modalData.live_link   &&
                    <LinkButton href={modalData.live_link} text="See live" />
                }
            </div>

            <div className="tags">{"Tags: " + modalData.tags.join(', ')}</div>


        </Modal>

    );
}

export default ProjectModal
