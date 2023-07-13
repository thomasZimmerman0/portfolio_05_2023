import "./css/Home.css";

import { useRef, useEffect, MutableRefObject, useState } from "react";

import { motion} from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import personalProjects from "../assets/importPersonalProjects";

function Home() {
  //Logic for switching between my personal projects
  const [prevPersProject, setPrevPersProject]= useState<string>("")
  const [selectedPersProject, setSelectedPersProject] = useState<string>(personalProjects[0].projectName);
  const personalProjectsRef: MutableRefObject<any> = useRef();

  useEffect(() => {

    const removeAnimateClasses = (targetCont: HTMLElement, projElements: HTMLCollection): void => {
      setTimeout(()=>{
        for (let i = 0; i < projElements.length; i++) {
          let projElement: HTMLElement = projElements[i] as HTMLElement;
          if (projElement.id === selectedPersProject) projElement.style.display = "block";
          else if (projElement.tagName === "DIV")projElement.style.display = "none";
        }
      },750)
      setTimeout(()=>{
        personalProjectsRef.current.className = "personal-projects";
        targetCont.className = "personal-project-container";
      },1500)
    }

    const projElements: HTMLCollection = personalProjectsRef.current.children;
    personalProjectsRef.current.className += " animate-personal-projects-section"
    for (let i = 0; i < projElements.length; i++) {
      let projElement: HTMLElement = projElements[i] as HTMLElement;
      if (projElement.id === selectedPersProject) {
        const targetContainerForColorAnimation: HTMLElement = projElement.lastChild as HTMLElement;
        targetContainerForColorAnimation.className += " animate-personal-project-cont-in"
        removeAnimateClasses(targetContainerForColorAnimation, projElements);
      }
    }
  }, [selectedPersProject]);

  const shiftProject = (direction: string): void => {
    let shift: number = 0;
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
      <div className="home-main-container">
        <section ref={personalProjectsRef} className="personal-projects">
          {personalProjects.map((element) => {
            return (
              <motion.div
                id={element.projectName}
                key={element.projectName}
                className="project-carousel-cont"
              >
                <h2>{element.projectName}</h2>
                <div className="personal-project-container">
                  <Carousel autoPlay={true} interval={4000} infiniteLoop={true}>
                    {element.images.map((img, index) => {
                      return (
                        <div
                          key={element.projectName + "-image-" + index}
                          className="carousel-img-cont"
                        >
                          <img src={img} />
                        </div>
                      );
                    })}
                  </Carousel>
                  <div className="text-based-info">
                    <h3 onClick={(e)=>togglePersProjInfo(e)}>About the Project:</h3>
                    <div className="drop-down">
                      <p>{element.about}</p>
                    </div>
                    <h3 onClick={(e)=>togglePersProjInfo(e)}>Tech Stack:</h3>
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
                    <h3 onClick={(e)=>togglePersProjInfo(e)}>Peronal Contribution:</h3>
                    <div className="drop-down">
                      <p>{element.myRole}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
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
        <section className="professional-projects"></section>
      </div>
    </>
  );
}

export default Home;
