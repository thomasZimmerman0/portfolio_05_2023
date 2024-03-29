import "./css/ProfessionalProjects.css";

import professionalProjects from "../assets/importProfessionalProjejcts";

function ProfessionalProjects() {
 
  return (
      <>
        <div className="prof-projects-cont">
          <div className="prof-projects-cont-ol">&nbsp;</div>
          <h1 className="prof-projects-h1">Professional Projects</h1>
            {professionalProjects.map((element, index)=>{
            return ( 
                <div className="prof-project-cont" key={element.projectName}>
                    <div className="prof-project-cont-ol">&nbsp;</div>
                    <h2>{element.projectName}</h2>
                    <img src={element.image} alt={element.projectName}/>
                    <a href={element.websiteLink} target="_blank">Click here to visit {element.websiteLink}!</a>
                    <h3>Contribution:</h3>
                    <ul>
                      {element.contribution.map((contrib, index) =>{
                        return <li key={contrib}>{contrib}</li>;
                      })}
                    </ul>
                </div>
            );
            })}
        </div>
      </>
  );
}

export default ProfessionalProjects;
