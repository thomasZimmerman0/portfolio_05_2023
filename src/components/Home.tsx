import "./css/Home.css";

import { useRef, useEffect, MutableRefObject, useState } from "react";

import { motion} from "framer-motion";

import PersonalProjects from "./PersonalProjects";
import { type } from "os";


function Home() {

  const [titleIndex, setTitleIndex] = useState<number>(0)
  const typedOutRef: MutableRefObject<any> = useRef()

  const titles: string[]  = [
    "Software Devleloper",
    "Analytical Problem Solver",
    "Thoughtful Leader",
    "Creative Designer",
    "Irreplaceable Team Member"
  ]
  
  useEffect(()=>{
    console.log('first')
    let revolution: number = 1
    const intervalID = setInterval(()=>{
      if(typedOutRef.current.classList[0] === "typed-out"){
        typedOutRef.current.className = "typed-out-pause"
      } else if(typedOutRef.current.classList[0] === "typed-out-pause"){
        typedOutRef.current.className = "typed-out-reverse"
      } else if(typedOutRef.current.classList[0] === "typed-out-reverse"){
        typedOutRef.current.className = "typed-out"
      }
      if(revolution === 3){
        clearInterval(intervalID) 
        revolution = 1;
      } else{
        revolution ++;
      }
    }, 1.25 * 1000)
    const timeoutID = setTimeout(()=>{
      if(titleIndex + 1 === titles.length) setTitleIndex(0)
      else setTitleIndex(titleIndex + 1)
    }, 3.75 * 1000)
    return () => clearTimeout(timeoutID)
  }, [titleIndex])

  return (
    <div className="home-main-container">
      <section className="home-banner">
        <div className="home-banner-opacity-layer"></div>
        <div className="home-banner-container">
          <h2>Thomas Zimmerman</h2>
          <div className="typed-out-container">
            <div ref={typedOutRef} className="typed-out">{titles[titleIndex]}</div>
          </div>
        </div>
      </section>
      <PersonalProjects/>
    </div>
  );
}

export default Home;
