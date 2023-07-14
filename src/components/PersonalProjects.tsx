import "./css/PersonalProjects.css";

import { useRef, useEffect, MutableRefObject, useState } from "react";

import { motion} from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import personalProjects from "../assets/importPersonalProjects";

function PersonalProjects() {
  //Logic for switching between my personal projects
  const [selectedPersProject, setSelectedPersProject] = useState<string>(personalProjects[0].projectName);
  const [shiftDirection, setShiftDirection] = useState<string>("");
  const [initialRender, setInitialRender] = useState<boolean>(true)
  const personalProjectsRef: MutableRefObject<any> = useRef();

  useEffect(()=>{
    setTimeout(()=>{
      setInitialRender(false)
    },1500)
  },[])

  useEffect(()=>{
    const animateProjectCarousel = (projElements: HTMLCollection):void => {
      const animationClass = shiftDirection === "right" ? " animate-personal-projects-section-rev" : " animate-personal-projects-section";
      personalProjectsRef.current.className += animationClass
      changeProjectDisplay(projElements, 750, selectedPersProject);
      setTimeout(()=>{
        personalProjectsRef.current.className = "personal-projects";
      },1500)
    }
    const projElements: HTMLCollection = personalProjectsRef.current.children;
    animateProjectCarousel(projElements as HTMLCollection) 
  }, [selectedPersProject])

  const changeProjectDisplay = (projElements: HTMLCollection, timeout: number, selectedPersProjectArg: string): void => {
    setTimeout(()=>{
      for (let i = 0; i < projElements.length; i++) {
        let projElement: HTMLElement = projElements[i] as HTMLElement;
        if (projElement.id === selectedPersProjectArg) projElement.style.display = "block";
        else if (projElement.tagName === "DIV") projElement.style.display = "none";
      }
    },timeout)
  }

  const shiftProject = (direction: string): void => {
    let shift: number = 0;
    setShiftDirection(direction)
    direction === "right" ? (shift = 1) : (shift = -1);
    for (let project of personalProjects) {
      if (project.projectName == selectedPersProject){
        if (personalProjects.indexOf(project) === 0 && direction === "left") shift = personalProjects.length - 1;
        if ( personalProjects.indexOf(project) === personalProjects.length - 1 && direction === "right" ) shift = (personalProjects.length - 1) * -1;
        setSelectedPersProject(personalProjects[personalProjects.indexOf(project) + shift].projectName);
        break;
      }
    }
  };

  const togglePersProjInfo = (e: any) =>{
    const dropTarget: HTMLElement = e.target.nextSibling
    if(!dropTarget.className.includes("drop-down-show")){
      dropTarget.className += " drop-down-show"
    } else {
      dropTarget.className = "drop-down"
    }
  }

  return (
      <>
        {initialRender ? 
        <div className="lds-ring-cont">
          <div className="lds-ring"><div></div><div></div><div></div><div></div></div>: 
        </div> 
        :
        <></>
        }
        <section ref={personalProjectsRef} className={initialRender ? "project-carousel-cont" : "personal-projects"}>
          {personalProjects.map((element) => {
            return (
                <div
                  id={element.projectName}
                  key={element.projectName + "-project-cont"}
                  className="project-carousel-cont"
                  >
                  <h2>{element.projectName}</h2>
                  <div className="personal-project-container">
                      <Carousel autoPlay={true} interval={4000} infiniteLoop={true}>
                      {element.images.map((img, index) => {
                          return (
                            <div
                            onClick={(e:any)=>e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.nextElementSibling.style.display = "flex"}
                            key={element.projectName + "-image-" + index}
                            className="carousel-img-cont carousel-img-cont-mini"
                            >
                              <img src={img} />
                            </div>
                        );
                      })}
                    </Carousel>
                    <div className="text-based-info">
                      <motion.h3 
                      onClick={(e)=>togglePersProjInfo(e)}
                      whileHover={{
                        scale: 1.1
                      }}
                      whileTap={{
                        scale: 0.9
                      }}
                      >
                        About the Project:</motion.h3>
                      <div className="drop-down">
                        <p>{element.about}</p>
                      </div>
                      <motion.h3 
                      onClick={(e)=>togglePersProjInfo(e)}
                      whileHover={{
                        scale: 1.1
                      }}
                      whileTap={{
                        scale: 0.9
                      }}>
                      Tech Stack:
                      </motion.h3>
                      <div className="drop-down">
                        <ul>
                          {element.technologiesUsed.map((tech, index) => {
                            return (
                              <li key={element.projectName + "-tech-" + index}>
                                {tech}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <motion.h3 
                      onClick={(e)=>togglePersProjInfo(e)}
                      whileHover={{
                        scale: 1.1
                      }}
                      whileTap={{
                        scale: 0.9
                      }}>
                        Peronal Contribution:
                      </motion.h3>
                      <div className="drop-down">
                        <p>{element.myRole}</p>
                      </div>
                      {element.websiteLink && <a href={element.websiteLink} target="_blank">Visit the site</a>}
                      <a href={element.repoLink} target="_blank">Visit the Github Repo</a>
                    </div>
                  </div>
                  <section className="carousel-modal">
                    <div className="modal-carousel-container">
                      <Carousel autoPlay={true} interval={4000} infiniteLoop={true}>
                          {element.images.map((img, index) => {
                            return (
                              <div
                                key={element.projectName + "-image-modal-" + index}
                                className="carousel-img-cont"
                              >
                                <img src={img} />
                              </div>
                            );
                          })}
                      </Carousel>
                    </div>
                    <div 
                    onClick={(e: any)=>e.target.parentNode.style.display = "none"} 
                    className="close-modal-button"
                    >
                      X
                    </div>
                  </section>
                </div>
            );
          })}
          <button className="left-button" onClick={() => shiftProject("left")}>
              &lt;&lt;
          </button>
          <button
            className="right-button"
            onClick={() => shiftProject("right")}
          >
            	&gt;&gt;
          </button>
        </section>
      </>
  );
}

export default PersonalProjects;
