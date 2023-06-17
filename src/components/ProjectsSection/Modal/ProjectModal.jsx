import React from 'react'
import ControlledCarousel from '../Carousel/ControlledCarousel';
import Modal from 'react-modal';
import { CloseX } from '../../Icons';



const ProjectModal = ({modalData, show, handleClose}) => {

    return (

        <Modal isOpen={show}
               onRequestClose={handleClose}
               onClick={handleClose}
               className="absolute left-0 right-0 mx-auto top-16 w-[80%] max-w-[700px]
                          border border-darkx rounded-xl outline-none
                          p-5 overflow-auto
                          bg-light"
               overlayClassName="fixed inset-0 bg-dark bg-opacity-60">
            

            <button className="absolute top-0 right-0" onClick={handleClose}>
                <CloseX />
            </button>

            <h2>{modalData.title}</h2>
            
            {/* <ControlledCarousel images={modalData.images} /> */}
            <img src={modalData.images[0]} alt={"Project"} className="m-auto h-[350px] object-contain"/>
                
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
