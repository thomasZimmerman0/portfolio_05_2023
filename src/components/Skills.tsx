import './css/Skills.css';
import images from '../assets/importImgs';

import { skillsImages } from '../interfaces/interfaces'
import { useAppSelector, useAppDispatch } from '../app/hooks';

import { useRef, useEffect, MutableRefObject, useState } from 'react';
import { motion, useScroll,  useTransform, useInView } from "framer-motion";

import { 
  Link,
  ScrollRestoration
} from 'react-router-dom'

function Skills() {
  const [imageArr, setImageArr] = useState<any[]>([])
  const [selected, ] = useState<{
    image : string,
    description: string, 
    name: string,
    link: string,
  } | {}>({})
  useEffect(()=>{
    for(let image in images){
      setImageArr((prevState)=>{
        return [...prevState, {skillName: image, img: images[image as keyof skillsImages]}]
      })
    }
  },[])
  let presentModal = (e: any) =>{
    if(e.target.nodeName == "IMG"){
      console.log(e.target.parentElement)
    }
  }
  return (
    <>
        <div className="main-container">
          { imageArr.map((element)=>{
            return <motion.div
            key={element.skillName}
            id={element.skillName}
            className="skill-container"
            onClick={(e)=>presentModal(e)}
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
              <h2>{element.skillName.toUpperCase()}</h2>
              <img src={element.img} />
              </div>
            </motion.div>
          })}
        </div>
        <div className="modal">
          <div className="modal-content-box">
          </div>
        </div>
    </>
  );
}
export default Skills;
