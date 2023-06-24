import './css/Skills.css';
import skillData from '../assets/importSkills';

import { SkillInfo } from '../interfaces/interfaces';
import { useAppSelector, useAppDispatch } from '../app/hooks';

import { useRef, useEffect, MutableRefObject, useState } from 'react';
import { motion, useScroll,  useTransform, useInView } from "framer-motion";
function Skills() {
  //Modal hooks
  const modalRef: MutableRefObject<any> = useRef()
  const [modalInfo, setModalInfo] = useState<SkillInfo>({
    skillName: "",
    image: "",
    description: "",
    Link: "",
  }) 
  // Logic for spinning close button
  const [mouseOverX, setMouseOverX] = useState<boolean>(false)
  const mouseOverXVariants  ={
    mouseOver: {
      rotate: [0, 360]
    },
    mouseOff:{
      rotate: [360, 0]
    } 
  }
  let presentModal = ( skill: SkillInfo) =>{
    let modal = modalRef.current
    if(modal.style.display === "none" || modal.style.display === ""){
      modal.style.display = "block"
      setModalInfo(skill)
    } else {
      modal.style.display = "none"
    }
  }
  return (
    <>
    <div className="main-container">
        <div className="skills-explain">
          <h2>Skills</h2>
          <p></p>
        </div>
        <div className="skills-container">
          { skillData.map((skill)=>{
            return <motion.div
            key={skill.skillName}
            id={skill.skillName}
            className="skill-container"
            onClick={()=>presentModal( skill)}
            whileHover={{
              scale: 1.2,
              transition: {
                type: "tween",
                staggerChildren: 0.5
              }
            }}
            whileTap={{
              scale: 0.9
            }}
            >
              <div className="image-container">
              <h2>{skill.skillName.toUpperCase()}</h2>
              <img src={skill.image} alt={skill.skillName}/>
              </div>
            </motion.div>
          })}
        </div>
        <div className="modal" ref={modalRef}>
          <motion.div className="modal-content-box"
          // whileHover={{: [360, 0],
          //             transition: {
          //               duration: 3
          //             }}}
          >
            <motion.div className="x-box"
            onMouseEnter={()=>setMouseOverX(true)}
            onMouseLeave={()=>setMouseOverX(false)}
            onClick={()=>presentModal(modalInfo)}
            animate={mouseOverX ? "mouseOver" : "mouseOff"}
            transition={{
              type: "spring",
              stiffness: 50,
              ease: "easeIn",
              duration: 1
            }}
            variants={mouseOverXVariants}
            >
              <div className="x-one"></div>
              <div className="x-two"></div>
            </motion.div>
            <h2>{modalInfo.skillName}</h2>
            <div className="image-link-cont">
              <img src={modalInfo.image} alt={modalInfo.skillName}/>
              <a href={modalInfo.Link} target="_blank" rel="noreferrer">{modalInfo.Link}</a>
            </div>
            <p>{modalInfo.description}</p>
          </motion.div>
        </div>
    </div>
    </>
  );
}
export default Skills;
