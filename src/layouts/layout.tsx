import './layout.css';
import "../../node_modules/video-react/dist/video-react.css";
import video from '../assets/animation-header.mp4';
import elephant from '../assets/elephant.jpg';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import resumePic from '../assets/resume.png';
import resume from '../assets/Thomas Zimmerman Resume 05112023.docx (1).pdf';

import { useAppSelector, useAppDispatch } from '../app/hooks';
import { changeHeader } from '../slices/headerSlice';
import { fetchQuote } from '../slices/bibleSlice';

import { useRef, useEffect, MutableRefObject, useState} from 'react';
import {motion, useScroll,  useTransform} from "framer-motion";

import { 
  Link,
  ScrollRestoration
} from 'react-router-dom'

function BaseLayout(props : {children: JSX.Element}) {
  /*Redux useSelector and dispatch to make changes to state and get the page state so different styles can
    be applied depending on the selected state. */
  const pageState = useAppSelector((state) => state.header.value)
  const dispatch = useAppDispatch();

  dispatch(fetchQuote());

  /*Creates a Ref variable for the header that initially renders at the top of
   the page. This is not the header that will follow the user as they scroll*/
  const Ref : MutableRefObject<any> = useRef();
  //State variable to keep track of weather the initial header is visible to the user or not
  const [headerOneVisible, setHeaderOneVisible] = useState<boolean>(true);
  //more states
  const [dropdownToggle, setDropdownToggle] = useState<boolean>(true);

  useEffect(()=>{
    if(headerOneVisible){
      setDropdownToggle(true);
    }
  },[headerOneVisible])

  useEffect(()=>{
    /*IntersectionObserver Object that is going to observe the Ref to the initial header when
    When the users view is intersecting with the initial header ( which is being stored in Ref )
    then the headerOneVisible state gets set to true. This allows me to know weather or not to render
    the second header down in the JSX */
    const observer = new IntersectionObserver((entries, observer)=>{
      const entry: any = entries[0];
      setHeaderOneVisible(entry.isIntersecting);
    });
    observer.observe(Ref.current)
  },[headerOneVisible])
  
  /*Framer motion variable that will keep track of the scroll progress on the Y axis 
  relative to my inital header (Ref). If no object was passed to useScroll() then
  it would be relative to the entire viewport. The offet key lets me declare where I am 
  tracking from and where I am tracking to. What this is basically saying is 
  "On this Ref element, track the Y progress from where the start of the element meets the start 
  of the viewport, to when the end of the element meets the start of the viewport."*/
  const { scrollYProgress } = useScroll({
    target: Ref,
    offset: ["start start", "end start"]
  });
  /*Framer motion variables to track transform the scale and opacity of particular elements
  based off of the scrollYProgress declared earlier (keep in mind the scrollYProgress
  is relative to the first header, not the viewport) This basically reads as "As scrollYProgress
  goes from 0 to 1 (The second value in both arrays passed to useTransform),
  the value of scale or opacity should go from 1 to 0 
  (The first value in both arrays passed to useTransform)*/
  const scale = useTransform(scrollYProgress, [1, 0], [0, 1]);
  const opacity = useTransform(scrollYProgress, [1, 0], [0, 1]);
  
  return (
    <>
    {/* Motion header is the initial header on the page that takes up 50vh, once the user scrolls
        This main header element fades away and gets replaced with a much more manageable header */}
        <motion.header style={{
          scale,
          opacity
        }} ref={Ref}>
          <h2>
            Tom ZimmermaN
          </h2>
          <ul>
            <li 
            className={pageState === "home" ? "selected-page-button" : ""} 
            onClick={async() => {dispatch(changeHeader("home"))}}>
              <Link to="/">
                Home
              </Link>
            </li>
            <li 
            className={pageState === "about" ? "selected-page-button" : ""} 
            onClick={() => dispatch(changeHeader("about"))}>
              <Link to="/about">
                About
              </Link>
            </li>
            <li 
            className={pageState === "skills" ? "selected-page-button" : ""}
            onClick={() => dispatch(changeHeader("skills"))}>
              <Link to="/skills">
                Skills
              </Link>
            </li>
            <li
            className={pageState === "contact" ? "selected-page-button" : ""}  
            onClick={() => dispatch(changeHeader("contact"))}>
              <Link to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <video className="background-video" loop muted autoPlay controls={false}>
            <source className="video-src" src={video} type="video/mp4"/>
          </video>
        </motion.header>
        {!headerOneVisible ? 
          <>
            {/* This is the header that the main header is replaced with, I call it sticky header but really its a fixed header
                The nav dropdown is made of of 4 divs, 3 child divs in a container div, and only appears when the screen is a under
                a certain size. When it does appear, it allows the user to dropdown a menu. This fixed header 
                is animated to slide in from the left as well as fade in at the same time */}
            <motion.div 
            className="sticky-header"
            animate={{x: [-1000, 0], opacity: [0, 1]}}
            transition={{ease: "easeInOut", duration: 0.5}}>
              <Link to="/" className="TPZ">TPZ</Link>
              <div className="nav-dropdown" onClick={()=>{setDropdownToggle(!dropdownToggle);}}>
                <div className={dropdownToggle ? "closed-nav" : "open-nav"}></div>
                <div className={dropdownToggle ? "closed-nav" : "open-nav"}></div>
                <div className={dropdownToggle ? "closed-nav" : "open-nav"}></div>
              </div>
              <ul className="sticky-buttons">
                <li
                className={pageState == "home" ? "selected-page-button-sb" : "not-selected-page-button-sb"}
                onClick={() => dispatch(changeHeader("home"))}>
                  <Link to="/">Home</Link>
                </li>
                <li
                className={pageState == "about" ? "selected-page-button-sb" : "not-selected-page-button-sb"}
                onClick={() => dispatch(changeHeader("about"))}>
                  <Link to="/about">About</Link>
                </li>
                <li
                className={pageState == "skills" ? "selected-page-button-sb" : "not-selected-page-button-sb"}  
                onClick={() => dispatch(changeHeader("skills"))}>
                  <Link to="/skills">
                    Skills
                  </Link>
                </li>
                <li
                className={pageState == "contact" ? "selected-page-button-sb" : "not-selected-page-button-sb"}  
                onClick={() => dispatch(changeHeader("contact"))}>
                  <Link to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        :
          <></>
        }
        {/* This is the menu that shows up when a user hits the dropdown button. State and useEffect are being utilized to 
            ensure the menu is not open inappropriately ie when the user scrolls back up to the main header which does not 
            require a dropdown in mobile view or in desktop. Media queries are being used to handle the rest. */}
          <motion.ul
          className={headerOneVisible ? "d-none" : "dropdown-menu"}
          initial="closed"
          animate={!dropdownToggle ? "open" : "closed"}
          variants={{
            open: {y: 0},
            closed: {y: -1500}
          }}
          transition={{ease: "easeInOut", duration: 0.5}}>
              <li>
                <Link 
                onClick={() => dispatch(changeHeader("home"))}
                className={pageState == "home" ? "selected-menu-item" : "unselected-menu-item"} 
                to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link 
                className={pageState == "about" ? "selected-menu-item" : "unselected-menu-item"}
                onClick={() => dispatch(changeHeader("about"))} 
                to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link 
                className={pageState == "skills" ? "selected-menu-item" : "unselected-menu-item"}
                onClick={() => dispatch(changeHeader("skills"))} 
                to="/skills">
                  Skills
                </Link>
              </li>
              <li>
                <Link
                className={pageState == "contact" ? "selected-menu-item" : "unselected-menu-item"} 
                onClick={() => dispatch(changeHeader("contact"))}
                to="/contact">
                  Contact
                </Link>
              </li>
          </motion.ul>
        {props.children}
        <footer>
          <img src={elephant} className="elephant" alt="elephant"/>
          <div className="footer-divider"></div>
          <div className="img-cont">
            <div>
              <a href="https://www.linkedin.com/in/thomas-zimmerman-76843824b/" target='_blank'>
                <motion.img whileHover={{scale: 1.2}} transition={{ type: "spring", stiffness: 200, damping: 9}} src={linkedin} alt="linkedin"/>
              </a>
              <p>VISIT MY LINKEDIN</p>
            </div>
            <div>
              <a href="https://github.com/thomasZimmerman0" target='_blank'>
                <motion.img whileHover={{scale: 1.2}} transition={{ type: "spring", stiffness: 200, damping: 9}} src={github} alt="github"/>
              </a>
              <p>VISIT MY GITHUB</p>
            </div>
            <div>
            <a href={resume} download>
              <motion.img whileHover={{scale: 1.2}} transition={{ type: "spring", stiffness: 200, damping: 9}} src={resumePic} alt="resume"/>
             </a>
              <p>DOWNLOAD MY RESUME</p>
            </div>
          </div>
        </footer>
        <ScrollRestoration/>
    </>
  );
}

export default BaseLayout;