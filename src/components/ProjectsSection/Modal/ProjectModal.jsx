import React from 'react'
import ControlledCarousel from '../Carousel/ControlledCarousel';
import { Modal } from 'react-bootstrap';
import './ProjectModal.css'

const ProjectModal = ({modalData, show, handleClose}) => {

    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>

            <Modal.Header closeButton>
                <Modal.Title>{modalData.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <ControlledCarousel images={modalData.images}/>
                
                <div className="description" dangerouslySetInnerHTML={{__html: modalData.description}} />

                <div className="modal-contents">
                    {modalData.github_link && <a href={modalData.github_link} className="btn btn-primary" target="_blank" rel="noreferrer"> Github </a>}
                    {modalData.live_link   && <a href={modalData.live_link}   className="btn btn-primary" target="_blank" rel="noreferrer"> Live </a>}
                </div>

                <div className="tags">{"Tags: " + modalData.tags.join(', ')}</div>
            </Modal.Body>

        </Modal>
    )
}

export default ProjectModal