import './css/Skills.css';

import { useAppSelector, useAppDispatch } from '../app/hooks';

import { useRef, useEffect, MutableRefObject, useState } from 'react';
import { motion, useScroll,  useTransform, useInView } from "framer-motion";

import { 
  Link,
  ScrollRestoration
} from 'react-router-dom'

function Skills() {
  return (
    <>
        <div className="main-container">
            Hello There!
        </div>
    </>
  );
}
export default Skills;
