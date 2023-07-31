import './css/About.css';
import headshot from '../assets/headshot.jpg'
import longshot from '../assets/longshot.jpg'
import { Link } from 'react-router-dom';

function About() {
  return ( <>
      <h1 className="about-h1">About</h1>
      <div className="about-main-container">
        <img src={headshot} alt="me"/>
        <p>

          I am a Full-Stack Web Developer with 4+ years of software development experience, currently employed at Webever Technologies. Webever Technologies is a social enterprise based out of May's Landing that is designed to give Junior Software Developers, graphic designers, and entrepreneurs expert training and real world work experience in the tech industry.

          I've worked on a large quantity of different software applications during my time at Webever, contributing to the development of multiple live websites utilizing my expertise in Wordpress, CSS, HTML, JavaScript, and all of my other tech skills that you can view on my <Link to="/skills">skills page</Link>. Additionally, I also instruct new developers in Full Stack Web Developement for 12+ hours per week.

        </p>
        <img id="longshot" src={longshot} alt="me"/>    
        <p id="second-paragraph-about">
          
          Prior to my Professional work experience, I completed my higher education with a focus on Computer Science, as well as Digital Craft's Full-Time Software Development Bootcamp. I was consistently a high performing student, and strive to bring the same ambitious attitude out of the developers I now teach.


        </p>
      </div>
  </>

    
  );
}

export default About;
