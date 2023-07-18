import "./css/Home.css";

import { useRef, useEffect, MutableRefObject, useState } from "react";

import { motion} from "framer-motion";

import PersonalProjects from "./PersonalProjects";
import ProfessionalProjects from "./ProfessionalProjejcts";

function Home() {

  const [titleIndex, setTitleIndex] = useState<number>(0)
  const typedOutRef: MutableRefObject<any> = useRef()

  const titles: string[]  = [
    "Software Developer",
    "Analytical Problem Solver",
    "Thoughtful Leader",
    "Creative Designer",
    "Irreplaceable Team Member"
  ]
  
  useEffect(()=>{
    let revolution: number = 1
    const intervalID = setInterval(()=>{
      if(typedOutRef.current.classList[0] === "typed-out"){
        typedOutRef.current.className = "typed-out-pause"
      } else if(typedOutRef.current.classList[0] === "typed-out-pause"){
        typedOutRef.current.className = "typed-out-reverse"
      } else if(typedOutRef.current.classList[0] === "typed-out-reverse"){
        typedOutRef.current.className = "typed-out-pause-empty"
      }  else if(typedOutRef.current.classList[0] === "typed-out-pause-empty"){
        typedOutRef.current.className = "typed-out"
      }
      if(revolution === 4){
        clearInterval(intervalID) 
        revolution = 1;
      } else{
        revolution ++;
      }
    }, 1.25 * 1000)
    const timeoutID = setTimeout(()=>{
      if(titleIndex + 1 === titles.length) setTitleIndex(0)
      else setTitleIndex(titleIndex + 1)
    }, 5 * 1000)
    return () => {
      clearInterval(intervalID)
      clearTimeout(timeoutID)
    }
  }, [titleIndex])

  return (
    <div className="home-main-container">
      <section className="home-banner">
        <div className="home-banner-opacity-layer">
        <h2>Welcome to my Portfolio! I am a(n)...</h2>
          <div className="typed-out-container">
            <div ref={typedOutRef} className="typed-out">{titles[titleIndex]}</div>
          </div>
        </div>
      </section>
      <ProfessionalProjects/>
      <PersonalProjects/>
    </div>
  );
}

export default Home;
