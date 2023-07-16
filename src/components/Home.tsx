import "./css/Home.css";

import { useRef, useEffect, MutableRefObject, useState } from "react";

import { motion} from "framer-motion";

import PersonalProjects from "./PersonalProjects";


function Home() {

  return (
    <div className="home-main-container">
      <section className="home-banner">
        <div className="home-banner-opacity-layer">
        </div>
      </section>
      <PersonalProjects/>
    </div>
  );
}

export default Home;
