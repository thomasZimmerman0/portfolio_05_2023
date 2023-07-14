import "./css/Home.css";

import { useRef, useEffect, MutableRefObject, useState } from "react";

import { motion} from "framer-motion";

import PersonalProjects from "./PersonalProjects";


function Home() {

  const titles: string[] = [
    "Software Developer",
    "Engineer", 
    "Leader", 
    "Analytical Problem Solver", 
    "Compasionate Friend"
  ]
  const [currentTitle, setCurrentTitle] = useState<{
    indexTitle: number,
    indexWord: number,
    title: string
  }>({
    indexTitle: 0,
    indexWord: 0,
    title: ""
  })

  useEffect(()=>{
    setTimeout(()=>{
      setCurrentTitle((prevState)=>{
        return prevState
      })
    },100)
  }, [currentTitle])


  return (
    <div className="home-main-container">
      <section className="home-banner">
        <div className="home-banner-opacity-layer">
          <p>{currentTitle}</p>
        </div>
      </section>
      <PersonalProjects/>
    </div>
  );
}

export default Home;
