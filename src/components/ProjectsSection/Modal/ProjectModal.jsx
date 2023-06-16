import React from 'react'
import ControlledCarousel from '../Carousel/ControlledCarousel';
import Modal from 'react-modal';


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





const ProjectModal = ({modalData, show, handleClose}) => {

    return (

        <Modal isOpen={show}
               onRequestClose={handleClose}
               style={customStyles}
               onClick={handleClose} >

            <h2>{modalData.title}</h2>
                                
            {/* <ControlledCarousel images={modalData.images} /> */}
            <img src={modalData.images[0]} alt={"Project"} className="m-auto"/>
                
            <div className="description" dangerouslySetInnerHTML={{__html: modalData.description}} />

            <div className="modal-contents">
                {modalData.github_link && <a href={modalData.github_link} className="btn btn-primary" target="_blank" rel="noreferrer"> Github </a>}
                {modalData.live_link   && <a href={modalData.live_link}   className="btn btn-primary" target="_blank" rel="noreferrer"> Live </a>}
            </div>

            <div className="tags">{"Tags: " + modalData.tags.join(', ')}</div>

            <button className="border" onClick={handleClose}>close</button>

        </Modal>

    );
}

export default ProjectModal
