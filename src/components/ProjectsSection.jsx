import './ProjectsSection.css'

import { useState } from "react"
import ButtonFilters from "./ButtonFilters"
import ProjectsGrid from "./ProjectsGrid"

import { data } from "../data/data.jsx"

// Add ids to our data (framer motion won't animate correctly without this)
data.forEach(function (value, i) { 
  data[i].id = i
});


export default function ProjectsSection() {

    const [filteredProjects, setFilteredProjects] = useState(data);

    return (
  
        <div className="app">
  
          <ButtonFilters projects={data} setFilteredProjects={setFilteredProjects} />
  
          <div className="image-container">
            <ProjectsGrid filteredProjects={filteredProjects} />
          </div>
  
        </div>
  
    )
}
