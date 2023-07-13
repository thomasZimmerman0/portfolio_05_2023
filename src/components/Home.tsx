import "./css/Home.css";

import { useRef, useEffect, MutableRefObject, useState } from "react";

import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import personalProjects from "../assets/importPersonalProjects";

function Home() {
  //Logic for switching between my personal projects
  const [selectedPersProject, setSelectedPersProject] = useState<string>(
    personalProjects[0].projectName
  );
  const personalProjectsRef: MutableRefObject<any> = useRef();

  const shiftProject = (direction: string): void => {
    let shift: number = 0;
    direction === "right" ? (shift = 1) : (shift = -1);
    for (let project of personalProjects) {
      if (project.projectName == selectedPersProject) {
        if (personalProjects.indexOf(project) === 0 && direction === "left")
          shift = personalProjects.length - 1;
        if (
          personalProjects.indexOf(project) === personalProjects.length - 1 &&
          direction === "right"
        )
          shift = (personalProjects.length - 1) * -1;
        setSelectedPersProject(
          personalProjects[personalProjects.indexOf(project) + shift]
            .projectName
        );
        break;
      }
    }
  };

  useEffect(() => {
    const projElements: HTMLCollection = personalProjectsRef.current.children;
    for (let i = 0; i < projElements.length; i++) {
      let projElement: HTMLElement = projElements[i] as HTMLElement;
      if (projElement.id === selectedPersProject) {
        projElement.style.display = "block";
      } else if (projElement.tagName === "DIV") {
        projElement.style.display = "none";
      }
    }
  }, [selectedPersProject]);
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
                    <h3>About the Project:</h3>
                    <p>{element.about}</p>
                    <h3>Tech Stack:</h3>
                    <ul>
                      {element.technologiesUsed.map((tech, index) => {
                        return (
                          <li key={element.projectName + "-tech-" + index}>
                            {tech}
                          </li>
                        );
                      })}
                    </ul>
                    <h3>Peronal Contribution:</h3>
                    <p>{element.myRole}</p>
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
