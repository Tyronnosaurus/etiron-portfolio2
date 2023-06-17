import React from 'react'
import ControlledCarousel from '../Carousel/ControlledCarousel';
import Modal from 'react-modal';
import { CloseX } from '../../Icons';

import CloseIcon from '../../../assets/icons/Close.png'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',

      width: "800px",
      maxHeight: "80%"
    },
    overlay: {
        background: "rgba(1, 1, 1, 0.6)",
    }
  };



// const CloseIcon = () => {
//   return (
//     <div className="flex flex-col justify-center items-center border">
//         <span className="bg-dark block h-0.5 w-4 rounded-sm  rotate-45  translate-y-1"/>
//         <span className="bg-dark block h-0.5 w-4 rounded-sm -rotate-45 -translate-y-1"/>
//     </div>
//   )
// }



const ProjectModal = ({modalData, show, handleClose}) => {

    return (

        <Modal isOpen={show}
               onRequestClose={handleClose}
               style={customStyles}
               onClick={handleClose} 
               className="">
            

            <button className="absolute top-4 right-4" onClick={handleClose}>
                <CloseX />
            </button>

            <h2>{modalData.title}</h2>
                
            {/* <ControlledCarousel images={modalData.images} /> */}
            <img src={modalData.images[0]} alt={"Project"} className="m-auto"/>
                
            <div className="description" dangerouslySetInnerHTML={{__html: modalData.description}} />

            <div className="modal-contents">
                {modalData.github_link && <a href={modalData.github_link} className="btn btn-primary" target="_blank" rel="noreferrer"> Github </a>}
                {modalData.live_link   && <a href={modalData.live_link}   className="btn btn-primary" target="_blank" rel="noreferrer"> Live </a>}
            </div>

            <div className="tags">{"Tags: " + modalData.tags.join(', ')}</div>


        </Modal>

    );
}

export default ProjectModal
