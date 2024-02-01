import './ProjectsSection.css'

import { useState } from "react"
import ButtonFilters from "./ButtonFilters"
import ProjectsGrid from "./ProjectsGrid"

// Import projects' data
import { data } from "./data.jsx"
data.forEach( (value, i) => {data[i].id = i} ); // framer-motion won't animate correctly without numeric ids


export default function ProjectsSection() {

    const [filteredProjects, setFilteredProjects] = useState(data);

    return (
  
      <>
        <section id="portfolio">

          <h2 className="text-3xl">Skills & Projects</h2>
          <h5 className="text-xl">My Recent Work</h5>

          
          <ButtonFilters projects={data} setFilteredProjects={setFilteredProjects} />
  
          <div className="image-container">
            <ProjectsGrid filteredProjects={filteredProjects} />
          </div>
  
        </section>
      </>
  
    )
}
