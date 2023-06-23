import './css/Skills.css';
import skillData from '../assets/importSkills';

import { SkillInfo } from '../interfaces/interfaces';
import { useAppSelector, useAppDispatch } from '../app/hooks';

import { useRef, useEffect, MutableRefObject, useState } from 'react';
import { motion, useScroll,  useTransform, useInView } from "framer-motion";

import { 
  Link,
  ScrollRestoration
} from 'react-router-dom'

function Skills() {
  const modalRef: MutableRefObject<any> = useRef()
  const [modalInfo, setModalInfo] = useState<SkillInfo>({
    skillName: "",
    image: "",
    description: "",
    Link: "",
  }) 
  let presentModal = ( skill: SkillInfo) =>{
    let modal = modalRef.current
    console.log(modal.style.display);
    if(modal.style.display === "none" || modal.style.display === ""){
      modal.style.display = "block"
      setModalInfo({
        skillName: skill.skillName,
        image: skill.image,
        description: skill.description,
        Link: skill.Link
      })
    } else {
      modal.style.display = "none"
    }
  }
  return (
    <>
        <div className="main-container">
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
          <div className="modal-content-box">
            <h2>{modalInfo.skillName}</h2>
            <div className="image-link-cont">
              <img src={modalInfo.image} alt={modalInfo.skillName}/>
              <a href={modalInfo.Link} target="_blank" rel="noreferrer">{modalInfo.Link}</a>
            </div>
            <p>{modalInfo.description}</p>
          </div>
        </div>
    </>
  );
}
export default Skills;
