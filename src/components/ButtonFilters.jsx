import { useState } from "react"
import { tags } from "../data/tags"


const ButtonFilters = ({projects, setFilteredProjects}) => {

  const [activeFilter, setActiveFilter] = useState(0);


  const handleClickFilter = (id, name) => {
    setActiveFilter(id);
    const filteredProjects = projects.filter(project => project.tags.includes(name));

    if(id===0)  setFilteredProjects(projects);
    else        setFilteredProjects(filteredProjects);
  }


  return (
    <div className="button-wrapper">

      {tags.map(item => (
        <button key={item.id}
                className={(activeFilter===item.id) ? "active" : undefined}
                onClick={() => handleClickFilter(item.id, item.name)}>
          {item.name}
        </button>
      ))}

    </div>
  )
}

export default ButtonFilters