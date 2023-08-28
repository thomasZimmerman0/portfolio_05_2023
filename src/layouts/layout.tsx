import "./layout.css";
import "../../node_modules/video-react/dist/video-react.css";
import video from "../assets/animation-header.mp4";
import elephant from "../assets/elephant.jpg";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import resumePic from "../assets/resume.png";
import resume from "../assets/Thomas Zimmerman Resume 7_19.docx";

import { useAppSelector, useAppDispatch } from "../app/hooks";
import { changeHeader } from "../slices/headerSlice";
import { fetchQuote } from "../slices/bibleSlice";

import React from "react";
import { useRef, useEffect, MutableRefObject, useState } from "react";
import { useLocation } from "react-router-dom";

import { motion, useScroll, useTransform, useInView } from "framer-motion";

import { Link, ScrollRestoration } from "react-router-dom";

function BaseLayout(props: { children: JSX.Element }) {
  const dispatch = useAppDispatch();
  const location = useLocation();
  /*Redux useSelector and dispatch to make changes to state and get the page state so different styles can
  be applied depending on the selected state. */
  const pageState: string = useAppSelector((state) => state.header.value);
  const bibleState: { quote: string; quoteName: string; status: string } =
    useAppSelector((state) => state.bible);
  /*Creates a Ref variable for the header that initially renders at the top of
  the page. This is not the header that will follow the user as they scroll*/
  const headerRef: MutableRefObject<any> = useRef();
  //more refs
  const quoteRef: MutableRefObject<any> = useRef();
  const quotePopupRef: MutableRefObject<any> = useRef();
  const componentCont: MutableRefObject<any> = useRef();
  //State variable to keep track of weather the initial header is visible to the user or not
  const [headerOneVisible, setHeaderOneVisible] = useState<boolean>(true);
  //more states
  const [timer, setTimer] = useState<boolean>(true);
  const [dropdownToggle, setDropdownToggle] = useState<boolean>(true);
  const [parsedQuote, setParsedQuote] = useState<{
    quote: string;
    quoteName: string;
  }>({
    quote: "Retrieving your quote",
    quoteName: "",
  });
  /*Framer motion variable that will keep track of the scroll progress on the Y axis 
  relative to my inital header (Ref). If no object was passed to useScroll() then
  it would be relative to the entire viewport. The offet key lets me declare where I am 
  tracking from and where I am tracking to. What this is basically saying is 
  "On this Ref element, track the Y progress from where the start of the element meets the start 
  of the viewport, to when the end of the element meets the start of the viewport."*/
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });
  /*Framer motion variables to track transform the scale and opacity of particular elements
  based off of the scrollYProgress declared earlier (keep in mind the scrollYProgress
  is relative to the first header, not the viewport) This basically reads as "As scrollYProgress
  goes from 0 to 1 (The second value in both arrays passed to useTransform),
  the value of scale or opacity should go from 1 to 0 
  (The first value in both arrays passed to useTransform)*/
  const scale = useTransform(scrollYProgress, [1, 0], [0, 1]);
  const opacity = useTransform(scrollYProgress, [1, 0], [0, 1]);
  const rotate = useTransform(scrollYProgress, [1, 0], [0, 360]);
  //more Framer Motion
  const quoteInView = useInView(quoteRef);
  useEffect(() => {
    /*Dispatch to header state to ensure if a user is on a sperate page 
    that isn't the home page, the state will still be set correctly
    location is a react router dom hook that holds "/skills" for example, / needs to be removed which
    is why slice is invoked */
    let setHeaderState = "";
    location.pathname === "/"
      ? (setHeaderState = "home")
      : (setHeaderState = location.pathname.slice(1));
    dispatch(changeHeader(setHeaderState));
    /*IntersectionObserver Object that is going to observe the Ref to the initial header when
    When the users view is intersecting with the initial header ( which is being stored in Ref )
    then the headerOneVisible state gets set to true. This allows me to know weather or not to render
    the second header down in the JSX */
    const observer = new IntersectionObserver((entries) => {
      const entry: any = entries[0];
      setHeaderOneVisible(entry.isIntersecting);
    });
    observer.observe(headerRef.current);
  }, [dispatch, location.pathname]);
  useEffect(() => {
    //This whole useEffect is to handle the strange syntax that is returned from the api that contains unwanted HTML formating
    const parseQuote = (quote: string): string => {
      let strsToParse = [
        '<span class="add">',
        "¶",
        'ss="mt1">',
        '<span class="nd">',
        "</span>",
        '<span class="wj">',
        '</p><p class="q1"><span data-number="1" data-sid="PSA 26:1" class="v">',
      ];
      for (let str of strsToParse) {
        if (quote.includes(str)) quote = quote.replaceAll(str, "");
      }
      return quote;
    };
    if (bibleState.status === "lodaing" || bibleState.status === "failed") {
      setParsedQuote({
        quote: bibleState.quote,
        quoteName: "",
      });
    }
    if (bibleState.status === "success") {
      let cutoff = bibleState.quote.indexOf("</span>");
      let slicedQuote = bibleState.quote.slice(cutoff + 7);
      slicedQuote = slicedQuote.slice(0, -4);
      setParsedQuote({
        quote: parseQuote(slicedQuote),
        quoteName: bibleState.quoteName,
      });
    }
  }, [bibleState]);
  useEffect(() => {
    if (headerOneVisible) setDropdownToggle(true);
  }, [headerOneVisible]);
  useEffect(() => {
    if (!quoteInView && timer) {
      dispatch(fetchQuote());
      setTimer(false);
    }
    if (quoteInView && !timer) {
      setTimeout(() => {
        setTimer(true);
      }, 5000);
    }
  }, [quoteInView, timer, dispatch]);
  useEffect(() => {
    setTimeout(() => {
      componentCont.current.className = "component-container";
    }, 1000);
  }, []);
  const reRoute = (route: string) => {
    dispatch(changeHeader(route));
    let component = componentCont.current;
    let defaultClass = component.className;
    component.className += " animate-comp";
    setTimeout(() => {
      component.className = defaultClass;
    }, 1000);
  };
  const mouseOverOutBibleQuote = (displayProp: string) => {
    let popup = quotePopupRef.current; // sets reference to popup box to popup variable
    popup.style.display = displayProp; // switches display value of popup box
  };
  const mouseMove = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    let pageY = e.pageY;
    let pageX = e.pageX;
    let popup = quotePopupRef.current;
    popup.style.top = `${pageY + 10}px`;
    popup.style.left = `${pageX + 25}px`;
  };
  return (
    <>
      {/* Motion header is the initial header on the page that takes up 50vh, once the user scrolls
        This main header element fades away and gets replaced with a much more manageable header */}
      <motion.header
        style={{
          scale,
          opacity,
          rotate,
        }}
        ref={headerRef}
      >
        <h2>Tom ZimmermaN</h2>
        <ul>
          <li className={pageState === "home" ? "selected-page-button" : ""}>
            <Link to="/" onClick={() => reRoute("home")}>
              Home
            </Link>
          </li>
          <li className={pageState === "about" ? "selected-page-button" : ""}>
            <Link to="/about" onClick={() => reRoute("about")}>
              About
            </Link>
          </li>
          <li className={pageState === "skills" ? "selected-page-button" : ""}>
            <Link to="/skills" onClick={() => reRoute("skills")}>
              Skills
            </Link>
          </li>
          <li className={pageState === "contact" ? "selected-page-button" : ""}>
            <Link to="/contact" onClick={() => reRoute("contact")}>
              Contact
            </Link>
          </li>
        </ul>
        <video
          className="background-video"
          loop
          muted
          autoPlay
          controls={false}
        >
          <source className="video-src" src={video} type="video/mp4" />
        </video>
      </motion.header>
      {!headerOneVisible ? (
        <>
          {/* This is the header that the main header is replaced with, I call it sticky header but really its a fixed header
                The nav dropdown is made of of 4 divs, 3 child divs in a container div, and only appears when the screen is a under
                a certain size. When it does appear, it allows the user to dropdown a menu. This fixed header 
                is animated to slide in from the left as well as fade in at the same time */}
          <motion.div
            className="sticky-header"
            animate={{ x: [-500, 0], opacity: [0, 1] }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
          >
            <Link to="/" className="TPZ">
              TPZ
            </Link>
            <div
              className="nav-dropdown"
              onClick={() => {
                setDropdownToggle(!dropdownToggle);
              }}
            >
              <div className={dropdownToggle ? "closed-nav" : "open-nav"}></div>
              <div className={dropdownToggle ? "closed-nav" : "open-nav"}></div>
              <div className={dropdownToggle ? "closed-nav" : "open-nav"}></div>
            </div>
            <ul className="sticky-buttons">
              <li
                className={
                  pageState === "home"
                    ? "selected-page-button-sb"
                    : "not-selected-page-button-sb"
                }
                onClick={() => reRoute("home")}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={
                  pageState === "about"
                    ? "selected-page-button-sb"
                    : "not-selected-page-button-sb"
                }
                onClick={() => reRoute("about")}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className={
                  pageState === "skills"
                    ? "selected-page-button-sb"
                    : "not-selected-page-button-sb"
                }
                onClick={() => reRoute("skills")}
              >
                <Link to="/skills">Skills</Link>
              </li>
              <li
                className={
                  pageState === "contact"
                    ? "selected-page-button-sb"
                    : "not-selected-page-button-sb"
                }
                onClick={() => reRoute("contact")}
              >
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </motion.div>
        </>
      ) : (
        <></>
      )}
      {/* This is the menu that shows up when a user hits the dropdown button. State and useEffect are being utilized to 
            ensure the menu is not open inappropriately ie when the user scrolls back up to the main header which does not 
            require a dropdown in mobile view or in desktop. Media queries are being used to handle the rest. */}
      <motion.ul
        className={headerOneVisible ? "d-none" : "dropdown-menu"}
        initial="closed"
        animate={!dropdownToggle ? "open" : "closed"}
        variants={{
          open: { y: 0 },
          closed: { y: -1500 },
        }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <li>
          <Link
            onClick={() => reRoute("home")}
            className={
              pageState === "home"
                ? "selected-menu-item"
                : "unselected-menu-item"
            }
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={
              pageState === "about"
                ? "selected-menu-item"
                : "unselected-menu-item"
            }
            onClick={() => reRoute("about")}
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={
              pageState === "skills"
                ? "selected-menu-item"
                : "unselected-menu-item"
            }
            onClick={() => reRoute("skills")}
            to="/skills"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className={
              pageState === "contact"
                ? "selected-menu-item"
                : "unselected-menu-item"
            }
            onClick={() => reRoute("contact")}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </motion.ul>
      <div ref={componentCont} className="component-container animate-comp">
        {React.cloneElement(props.children, { headerRef })}
      </div>
      <div className="parallax" ref={quoteRef}>
        <div className="parallax-opacity-layer">
          <h2
            onMouseMove={(e) => mouseMove(e)}
            onMouseEnter={() => mouseOverOutBibleQuote("block")}
            onMouseLeave={() => mouseOverOutBibleQuote("none")}
          >
            Randomly Generated Bible Verse!
          </h2>
          <div className="quote-explain" ref={quotePopupRef}>
            This Bible verse is being randomy generated with The Bible API from{" "}
            <span>https://scripture.api.bible/</span>. The API calls are being
            made utilizing <div className="thunk">Redux Thunk</div>, the
            response is then stored in this applications global state. Wating 5
            seconds then scrolling the verse out of sight will grab a new random
            verse from anywhere in the KJV of the Bible!
          </div>
          <motion.div
            className="verse-cont"
            variants={{
              inView: {
                opacity: [0, 1],
                y: [100, 0],
              },
              outView: {
                opacity: 0,
                y: 0,
              },
            }}
            animate={quoteInView ? "inView" : "outView"}
            transition={
              {
                type: "spring",
                delay: 0.3,
                duartion: 2,
              } as any
            }
          >
            {parsedQuote.quoteName ? <h3>{parsedQuote.quoteName}:</h3> : <></>}
            <p> {parsedQuote.quote}</p>
          </motion.div>
        </div>
      </div>
      <footer>
        <img src={elephant} className="elephant" alt="elephant" />
        <div className="footer-divider"></div>
        <div className="img-cont">
          <div>
            <a
              href="https://www.linkedin.com/in/thomas-zimmerman-76843824b/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <motion.img
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200, damping: 9 }}
                src={linkedin}
                alt="linkedin"
              />
            </a>
            <p>VISIT MY LINKEDIN</p>
          </div>
          <div>
            <a
              href="https://github.com/thomasZimmerman0"
              rel="noopener noreferrer"
              target="_blank"
            >
              <motion.img
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200, damping: 9 }}
                src={github}
                alt="github"
              />
            </a>
            <p>VISIT MY GITHUB</p>
          </div>
          <div>
            <a href={resume} download>
              <motion.img
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200, damping: 9 }}
                src={resumePic}
                alt="resume"
              />
            </a>
            <p>DOWNLOAD MY RESUME</p>
          </div>
        </div>
      </footer>
      <ScrollRestoration />
    </>
  );
}
export default BaseLayout;
