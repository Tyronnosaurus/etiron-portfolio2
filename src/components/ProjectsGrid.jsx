import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./Modal/ProjectModal";


const ProjectsGrid = ({filteredProjects}) => {

  const [modalShow, setModalShow] = useState(false)
  const [modalData, setModalData] = useState(null);


  const handleClose = () => setModalShow(false);

  const handleShow = (project) => {
    setModalData(project);
    setModalShow(true);
  }


  return(
    <>

      {filteredProjects.map(project => (

        <motion.div className="image-card"
                    key={project.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{duration: 0.3 }}
                    onClick={() => handleShow(project)}>

          <img src={project.images[0]}
               alt={project.title} />
          <h2>{project.title}</h2>

        </motion.div>

      ))}

      {modalData &&
        <ProjectModal show={modalShow} modalData={modalData} handleClose={handleClose} />
      }

    </>
  )
}

export default ProjectsGrid