import { useState } from "react"

import pythonIcon from '../assets/icons/pythonIcon.png';
import cppIcon from '../assets/icons/cppIcon.png';
import csharpIcon from '../assets/icons/csharpIcon.png';
import javascriptIcon from '../assets/icons/javascriptIcon.png';
import reactIcon from '../assets/icons/reactIcon.svg';
import wordpressIcon from '../assets/icons/wordpressIcon.png';
import htmlIcon from '../assets/icons/htmlIcon.png';
import cssIcon from '../assets/icons/cssIcon.png';
import webdevIcon from '../assets/icons/webdevIcon.png';
import ladderIcon from '../assets/icons/ladderIcon.png';
import stIcon from '../assets/icons/structuredtextIcon.png';
import bootstrapIcon from '../assets/icons/bootstrapIcon.png';
import brIcon from '../assets/icons/brIcon.png';
import plcIcon from '../assets/icons/plcIcon.png';
import linuxIcon from '../assets/icons/linuxIcon.png';
import gamedevIcon from '../assets/icons/gamedevIcon.png';
import codesysIcon from '../assets/icons/codesysIcon.png';
import arduinoIcon from '../assets/icons/arduinoIcon.png';
import altiumIcon from '../assets/icons/altiumIcon.png';
import solidworksIcon from '../assets/icons/solidworksIcon.png';
import printingIcon from '../assets/icons/printingIcon.png';
import electronicsIcon from '../assets/icons/electronicsIcon.png';


const ButtonFilter = ({name, icon, activeFilter, handleClickFilter}) => {
  return(
      <button className={(activeFilter===name) ? "active" : undefined}
              onClick={() => handleClickFilter(name)}>
          {icon && <img src={icon} alt={name+" logo"} height="30px" width="30px"/>}
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




  return (
    <div className="button-wrapper">

      <div className="button-wrapper">
        <ButtonFilter name="All"             activeFilter={activeFilter} handleClickFilter={handleClickFilter} />

        <div class="separator"></div>

        <ButtonFilter name="Professional"    activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Academic"        activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Hobby"           activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
      </div>
 
      <div className="button-wrapper">
        <ButtonFilter name="C++"             icon={cppIcon}         activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="C#"              icon={csharpIcon}      activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Python"          icon={pythonIcon}      activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Javascript"      icon={javascriptIcon}  activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Structured Text" icon={stIcon}          activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Ladder"          icon={ladderIcon}      activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="WebDev"          icon={webdevIcon}      activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="React"           icon={reactIcon}       activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Wordpress"       icon={wordpressIcon}   activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="HTML"            icon={htmlIcon}        activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="CSS"             icon={cssIcon}         activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Bootstrap"       icon={bootstrapIcon}   activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Linux"           icon={linuxIcon}       activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="GameDev"         icon={gamedevIcon}     activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="SolidWorks"      icon={solidworksIcon}  activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="3D printing"     icon={printingIcon}    activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="PLC"             icon={plcIcon}         activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="B&R"             icon={brIcon}          activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Codesys"         icon={codesysIcon}     activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Arduino"         icon={arduinoIcon}     activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Electronics"     icon={electronicsIcon} activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        <ButtonFilter name="Altium"          icon={altiumIcon}      activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
      </div>


    </div>
  )
}

export default ButtonFilters