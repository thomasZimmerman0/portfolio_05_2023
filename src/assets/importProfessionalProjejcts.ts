import idealstudio from './professional-projects/idealstudio.png';
import beauity from './professional-projects/beautify.png';
import pvillepf from './professional-projects/pvillepf.png';
import axelsthrowhouse from './professional-projects/axelsthrowhouse.png';
import iitnj from './professional-projects/iitnjedu.png';

import { ProfessionalProjects } from '../interfaces/interfaces'

const professionalProjects: ProfessionalProjects[] = [
    {
        projectName: "Ideal Studio",
        websiteLink: "https://sjgain.com/",
        image: idealstudio,
        contribution: ["Wrote up site map and defined MVP for the project", "Created custom scripts and CSS for the header and footer", "Contributed to elements and styling present on multiple pages", "Initialized the on bluehost"]
    },
    {
        projectName: "Beauify",
        websiteLink: "https://www.beautify.com/",
        image: beauity,
        contribution: ["Implemented a custom sorting script for every page that contains a list of doctors", "Implemented a custom script to apply search filters on every page that contains a list of doctors", "Created a custom Google Tag Manager trigger for Google analytics that creates a report that keeps track of when users navigate to a doctor's website"]
    },
    {
        projectName: "Pleasantville Police Foundation",
        websiteLink: "https://www.pvillepf.org/",
        image: pvillepf,
        contribution: ["Made the site mobily responsive", "Implemented the present styling for the donate Modal and header"]
    },
    {
        projectName: "Ideal Institute of Technology",
        websiteLink: "https://iitnj.edu/",
        image: iitnj,
        contribution: ["Worked closely with lead developers to make QA changes, fix bugs, and ensure full functionality of the application", "Wrote custom CSS for mutliple pages"]
    },
]

export default professionalProjects;