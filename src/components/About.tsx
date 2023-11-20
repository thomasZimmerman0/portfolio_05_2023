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

          I am a Full-Stack Web Developer with 6+ years of software development experience, currently employed at the Ideal Institute of Technology. In my current role, I specialize on giving Junior Software Developers expert training and real world work experience in the tech industry by working with teammates and building modern full stack applications.

          I've worked on a large quantity of different software applications, contributing to the development of multiple live websites utilizing my expertise in a mulitiude of tech skills that you can view on my <Link to="/skills">skills page</Link>. Being able to work with and learn from a team with expert graphic designers, engineers, project managers, and developers is something that I'm proud to say I do for a living.

        </p>
        <img id="longshot" src={longshot} alt="me"/>    
        <p id="second-paragraph-about">
          
          Prior to my Professional work experience, I completed my higher education at Rutgers University with a focus on Computer Science. I was consistently a high performing student, and strive to bring the same ambitious attitude out of the developers I now educate.


        </p>
      </div>
  </>

    
  );
}

export default About;
