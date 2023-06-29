import './css/Skills.css';
import skillData from '../assets/importSkills';

import { SkillInfo } from '../interfaces/interfaces';

import { useRef, useEffect, MutableRefObject, useState } from 'react';

import { motion, useInView } from "framer-motion";
function Skills(props : { headerRef: MutableRefObject<any> } | {}) {
  //Header Logic
  const placeholderRef : MutableRefObject<any> = useRef();
  const [headerRef, setHeaderRef] = useState<MutableRefObject<any>>(placeholderRef)
  const isInView = useInView(headerRef);
  useEffect(()=>{
    if(Object.keys(props).includes('headerRef')){
      let prop : { headerRef: MutableRefObject<any> } = props as { headerRef: MutableRefObject<any> }
      let headerRefInst = prop.headerRef
      setHeaderRef(headerRefInst)
    }
  },[props])
  useEffect(()=>{
    modalRef.current.style.display = "none"
    cardBack.current.style.display = ""
    setModalDisplayed(false)
  },[isInView])
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
      rotate: [0, 180]
    },
    mouseOff:{
      rotate: [180, 0]
    } 
  }
  // Logic for flipping modal content box
  const cardBack: MutableRefObject<any> = useRef(); 
  const [modalDisplayed, setModalDisplayed] = useState<boolean>(false)
  const modalFlip = {
    notDisplayed: {
      rotateY: ["0deg", "180deg"],
    transition:{
      ease: "easeIn",
      duration: 0.5
    }},
    displayed : {
      rotateY: ["180deg", "0deg"],
    transition:{
      ease: "easeIn",
      duration: 0.5
    }}
  }
  //displaying modal function
  let presentModal = ( skill: SkillInfo) =>{
    let modal = modalRef.current
    if(modal.style.display === "none" || modal.style.display === ""){
      modal.style.display = "block"
      setModalInfo(skill)
      setTimeout(()=>{
        cardBack.current.style.display = "none";
      },300)
      setModalDisplayed(true)
    } else {
      setModalDisplayed(false)
      setTimeout(()=>{
        cardBack.current.style.display = ""
      },300)
      setTimeout(()=>{
        modal.style.display = "none"
      },800)
    }
  }
  return (
    <>
    <h1>SKILLS</h1>
    <div className="main-container-skills">
        <div className="skills-explain">
          <h2>Explanation</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;This is an interactive collection of the most prevelant and powerful technincal application development tools that I have learned and practiced with over the years. Most of these skills are heavily tied to website development; my confidence in delivering masterful products with every tool listed here is enormously high. 
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp; The current interactive display is not reflective of all of my abilites. Please downlad my resume from the footer and give it a read to find out more!
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;If you are unfarmiliar with any one of these tools, click on one to display a card that contains a short description, as well as a link to more information, or the offical website for the tool.    
          </p>
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
          animate={modalDisplayed ? "displayed" : "notDisplayed"}
          variants={modalFlip}
          >
            <div ref={cardBack} className="card-back"></div>
            <motion.div className="x-box"
            onMouseEnter={()=>setMouseOverX(true)}
            onMouseLeave={()=>setMouseOverX(false)}
            onClick={()=>presentModal(modalInfo)}
            animate={mouseOverX ? "mouseOver" : "mouseOff"}
            transition={{
              type: "spring",
              stiffness: 50,
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
              <motion.a href={modalInfo.Link} target="_blank" rel="noreferrer"
              whileHover={{
                scale : 1.05,
                transition: {
                  type: "spirng"
                }
              }}
              >
                {modalInfo.Link}
              </motion.a>
            </div>
            <p>{modalInfo.description}</p>
          </motion.div>
        </div>
    </div>
    </>
  );
}
export default Skills;
