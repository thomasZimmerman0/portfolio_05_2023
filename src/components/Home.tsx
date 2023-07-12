import "./css/Home.css";

import { SkillInfo } from "../interfaces/interfaces";

import { useRef, useEffect, MutableRefObject, useState } from "react";

import { motion, useInView } from "framer-motion";

import personalProjects from "../assets/importPersonalProjects";

function Home() {
  return (
    <>
      <div className="home-main-container">
        <section className="personal-projects">
          {personalProjects.map((element)=>{
            return <>
            <div>
              <h2>{element.projectName}</h2>
              <h3>About the Project:</h3>
              <p>{element.about}</p>
              <h3>Tech Stack:</h3>
              <ul>
                {element.technologiesUsed.map((tech)=>{
                  return <li>{tech}</li>
                })}
              </ul>
              <h3>Peronal Contribution:</h3>
              <p>{element.myRole}</p>
            </div>
            </>
          })}
        </section>
        <section className="professional-projects">

        </section>
      </div>
    </>
  );
}

export default Home;
