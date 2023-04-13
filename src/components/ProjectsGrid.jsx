import { motion } from "framer-motion";


const ProjectsGrid = ({filteredProjects}) => {

  return(
    filteredProjects.map(project => (

      <motion.div className="image-card"
                  key={project.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{duration: 0.3 }}>

        <img src={project.images[0]}
             alt={project.title} />
        <h2>{project.title}</h2>

      </motion.div>

    ))
  )
}

export default ProjectsGrid