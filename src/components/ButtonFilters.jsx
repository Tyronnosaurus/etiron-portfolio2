import { useEffect, useState } from "react"


const ButtonFilter = ({name, activeFilter, handleClickFilter}) => {
  return(
      <button className={(activeFilter===name) ? "active" : undefined}
              onClick={() => handleClickFilter(name)}>
          {name}
      </button>
  )
}



const ButtonFilters = ({projects, setFilteredProjects}) => {

  const [activeFilter, setActiveFilter] = useState(0);


  const handleClickFilter = (name) => {
    setActiveFilter(name);
    const filteredProjects = projects.filter(project => project.tags.includes(name));

    if (name==="All") setFilteredProjects(projects);
    else              setFilteredProjects(filteredProjects);
  }


  useEffect(() => {
    console.log("HEEEY");
  }, []);


  return (
    <div className="button-wrapper">

      <div className="button-wrapper">
        <ButtonFilter name="All"             activeFilter={activeFilter} handleClickFilter={handleClickFilter} />

        <div class="separator"></div>

        <ButtonFilter name="Professional"    activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Academic"        activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Hobby"           activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
      </div>
      {/* <div class="separator"></div> */}
      <div className="button-wrapper">
        <ButtonFilter name="C++"             activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="C#"              activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Python"          activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Javascript"      activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Structured Text" activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Ladder"          activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="WebDev"          activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="React"           activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Wordpress"       activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="HTML"            activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="CSS"             activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Bootstrap"       activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Linux"           activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="GameDev"         activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="SolidWorks"      activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="3D printing"     activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="PLC"             activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="B&R"             activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Codesys"         activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Arduino"         activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Electronics"     activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Altium"          activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
      </div>


    </div>
  )
}

export default ButtonFilters