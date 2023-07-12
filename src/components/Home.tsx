import "./css/Home.css";

import { SkillInfo } from "../interfaces/interfaces";

import { useRef, useEffect, MutableRefObject, useState } from "react";

import { motion, useInView } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import personalProjects from "../assets/importPersonalProjects";

function Home() {
  return (
    <>
      <div className="home-main-container">
        <section className="personal-projects">
          {personalProjects.map((element) => {
            return (
              <>
                <h2>{element.projectName}</h2>
                <div className="personal-project-container">
                  <Carousel
                    autoPlay={true}
                    interval={4000}
                    infiniteLoop={true}
                    dynamicHeight={true}
                  >
                    {element.images.map((img, index) => {
                      return (
                        <>
                          <div className="carousel-img-cont">
                            <img src={img} />
                          </div>
                        </>
                      );
                    })}
                  </Carousel>
                  <div className="text-based-info">
                    <h3>About the Project:</h3>
                    <p>{element.about}</p>
                    <h3>Tech Stack:</h3>
                    <ul>
                      {element.technologiesUsed.map((tech) => {
                        return <li>{tech}</li>;
                      })}
                    </ul>
                    <h3>Peronal Contribution:</h3>
                    <p>{element.myRole}</p>
                  </div>
                </div>
              </>
            );
          })}
        </section>
        <section className="professional-projects"></section>
      </div>
    </>
  );
}

export default Home;
