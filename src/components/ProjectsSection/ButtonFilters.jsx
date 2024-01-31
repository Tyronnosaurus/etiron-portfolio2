import { useState } from "react"

import workIcon from '../../assets/icons/workIcon.png';
import universityIcon from '../../assets/icons/universityIcon.png';
import homeIcon from '../../assets/icons/homeIcon.png';
import pythonIcon from '../../assets/icons/pythonIcon.png';
import cppIcon from '../../assets/icons/cppIcon.png';
import csharpIcon from '../../assets/icons/csharpIcon.png';
import javascriptIcon from '../../assets/icons/javascriptIcon.png';
import reactIcon from '../../assets/icons/reactIcon.svg';
import wordpressIcon from '../../assets/icons/wordpressIcon.png';
import htmlIcon from '../../assets/icons/htmlIcon.png';
import cssIcon from '../../assets/icons/cssIcon.png';
import webdevIcon from '../../assets/icons/webdevIcon.png';
import ladderIcon from '../../assets/icons/ladderIcon.png';
import stIcon from '../../assets/icons/structuredtextIcon.png';
import bootstrapIcon from '../../assets/icons/bootstrapIcon.png';
import brIcon from '../../assets/icons/brIcon.png';
import plcIcon from '../../assets/icons/plcIcon.png';
import linuxIcon from '../../assets/icons/linuxIcon.png';
import gamedevIcon from '../../assets/icons/gamedevIcon.png';
import codesysIcon from '../../assets/icons/codesysIcon.png';
import arduinoIcon from '../../assets/icons/arduinoIcon.png';
import altiumIcon from '../../assets/icons/altiumIcon.png';
import solidworksIcon from '../../assets/icons/solidworksIcon.png';
import printingIcon from '../../assets/icons/printingIcon.png';
import electronicsIcon from '../../assets/icons/electronicsIcon.png';
import turckIcon from '../../assets/icons/turckIcon.ico';
import panasonicIcon from '../../assets/icons/panasonicIcon.png';
import fpwinIcon from '../../assets/icons/fpwinIcon.png';
import hmwinIcon from '../../assets/icons/hmwinIcon.png';
import pandasIcon from '../../assets/icons/pandasIcon.png';
import matplotlibIcon from '../../assets/icons/matplotlibIcon.png';
import tensorflowIcon from '../../assets/icons/tensorflowIcon.png';
import noderedIcon from '../../assets/icons/noderedIcon.png';
import mqttIcon from '../../assets/icons/mqttIcon.png';
import dockerIcon from '../../assets/icons/dockerIcon.png';
import j1939Icon from '../../assets/icons/Excavator.png';
import kicadIcon from '../../assets/icons/kicadIcon.png';
import tractorIcon from '../../assets/icons/tractorIcon.png';


const ButtonFilter = ({name, icon, activeFilter, handleClickFilter}) => {

  let isActive = (activeFilter===name)

  return(
      <button className={`lg:text-base min-w-[100px]
                          h-8 px-1 text-xs
                          overflow-hidden
                          flex flex-row
                          border border-solid border-dark rounded-xl
                          ${isActive ? "bg-btnActive" : "bg-light"}`}
              onClick={() => handleClickFilter(name)}>
          
          {icon &&
            <img src={icon} alt={name+" logo"} height="25px" width="25px"
                 className="object-contain pr-1"/>}
          
          <div className="w-full m-auto">{name}</div>
          
      </button>
  )
}


// Just a black line
const Separator = () => {
  return (
    <div className="h-8 lg:h-10
                    border border-solid border-dark
                    mx-0 lg:mx-4
                    hidden sm:block">
    </div>
  )
}



const CategoryHeader = ({title}) => {
  return (
    <h3 className="text-xl w-36">{title}</h3>
  )
}




const ButtonFilters = ({projects, setFilteredProjects}) => {

  const [activeFilter, setActiveFilter] = useState('All');


  const handleClickFilter = (name) => {
    // Update the current filter
    setActiveFilter(name);

    // Update the shown projects according to the new filter
    const filteredProjects = projects.filter(project => project.tags.includes(name));

    if (name==="All") setFilteredProjects(projects);
    else              setFilteredProjects(filteredProjects);
  }




  return (
    <div className="w-full md:w-3/4 m-auto flex flex-col justify-center gap-4 mt-4">

      <div className="flex flex-col sm:flex-row justify-center w-full gap-2">
        <div className="flex flex-row justify-center">
          <ButtonFilter name="All"             activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        </div>
        <Separator />
        <div className="flex flex-row justify-center gap-2">
          <ButtonFilter name="Professional"    icon={workIcon}       activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
          <ButtonFilter name="Academic"        icon={universityIcon} activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
          <ButtonFilter name="Hobby"           icon={homeIcon}       activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
        </div>
      </div>
 
      <div className="flex flex-col justify-center gap-4">
        
        <div className="flex flex-row items-center gap-2 px-2 bg-light rounded-2xl">
          <CategoryHeader title="WebDev" />
          <div className="flex flex-row flex-wrap items-center gap-2 p-2">
            <ButtonFilter name="WebDev"          icon={webdevIcon}      activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="React"           icon={reactIcon}       activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="Javascript"      icon={javascriptIcon}  activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="HTML"            icon={htmlIcon}        activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="CSS"             icon={cssIcon}         activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="Bootstrap"       icon={bootstrapIcon}   activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="Wordpress"       icon={wordpressIcon}   activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
          </div>
        </div>

        <div className="flex flex-row items-center gap-2 px-2 bg-light rounded-2xl">
          <CategoryHeader title="Development" />
          <div className="flex flex-row flex-wrap items-center gap-2 p-2">
            <ButtonFilter name="C++"             icon={cppIcon}         activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="C#"              icon={csharpIcon}      activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="Python"          icon={pythonIcon}      activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
          </div>
        </div>

        <div className="flex flex-row items-center gap-2 px-2 bg-light rounded-2xl">
          <CategoryHeader title="Data Science" />
          <div className="flex flex-row flex-wrap items-center gap-2 p-2">
            <ButtonFilter name="Pandas"          icon={pandasIcon}         activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="Matplotlib"      icon={matplotlibIcon}     activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="Tensorflow"      icon={tensorflowIcon}     activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="Node-RED"        icon={noderedIcon}        activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="MQTT"            icon={mqttIcon}           activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
          </div>
        </div>

        <div className="flex flex-row items-center gap-2 px-2 bg-light rounded-2xl justify-between">
          <CategoryHeader title="Mechatronics" />
          <div className="flex flex-row flex-wrap items-center gap-2 p-2">
            <ButtonFilter name="PLC"             icon={plcIcon}         activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="B&R"             icon={brIcon}          activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="Codesys"         icon={codesysIcon}     activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="ST"              icon={stIcon}          activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="Ladder"          icon={ladderIcon}      activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="Turck"           icon={turckIcon}       activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="Panasonic"       icon={panasonicIcon}   activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="FPWIN"           icon={fpwinIcon}       activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="HMWIN"           icon={hmwinIcon}       activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="TX Visu Pro"      icon={turckIcon}      activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="J1939"           icon={j1939Icon}       activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="ISOBUS"          icon={tractorIcon}     activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
          </div>
        </div>

        <div className="flex flex-row items-center gap-2 px-2 bg-light rounded-2xl">
          <CategoryHeader title="Electronics" />
          <div className="flex flex-row flex-wrap items-center gap-2 p-2">
            <ButtonFilter name="Electronics"     icon={electronicsIcon} activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="Arduino"         icon={arduinoIcon}     activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="Altium"          icon={altiumIcon}      activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="KiCAD"           icon={kicadIcon}       activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
          </div>
        </div>

        <div className="flex flex-row items-center gap-2 px-2 bg-light rounded-2xl">
          <CategoryHeader title="Others" />
          <div className="flex flex-row flex-wrap items-center gap-2 p-2">
            <ButtonFilter name="Linux"           icon={linuxIcon}       activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="Docker"          icon={dockerIcon}       activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="GameDev"         icon={gamedevIcon}     activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="SolidWorks"      icon={solidworksIcon}  activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
            <ButtonFilter name="3D printing"     icon={printingIcon}    activeFilter={activeFilter} handleClickFilter={handleClickFilter} />
          </div>
        </div>
      </div>

      {(activeFilter === 'All') ? 
      <p>Click on any skill to show only related projects.</p> :
      <p>Showing all projects with the '{activeFilter}' tag:</p>}

    </div>
  )
}

export default ButtonFilters