import buylowsellhigh0 from './personal-projects/buylowsellhigh.jpg'
import buylowsellhigh1 from './personal-projects/buylowsellhigh1.jpg'
import buylowsellhigh2 from './personal-projects/buylowsellhigh2.jpg'
import buylowsellhigh3 from './personal-projects/buylowsellhigh3.jpg'
import beautibodega0 from './personal-projects/beauti_bodega.png'
import beautibodega1 from './personal-projects/beauti_bodega1.png'
import beautibodega2 from './personal-projects/beauti_bodega2.png'
import beautibodega3 from './personal-projects/beauti_bodega3.png'
import whatsinmydrink0 from './personal-projects/whatsinmydrink.jpg';
import whatsinmydrink1 from './personal-projects/whatsinmydrink1.jpg';
import whatsinmydrink2 from './personal-projects/whatsinmydrink2.png';
import whatsinmydrink3 from './personal-projects/whatsinmydrink3.png';
import drawdotio0 from './personal-projects/drawdotio.jpg';
import drawdotio1 from './personal-projects/drawdotio1.png';
import drawdotio2 from './personal-projects/drawdotio2.png';
import drawdotio3 from './personal-projects/drawdotio3.png';
import { PersonalProjects } from "../interfaces/interfaces";

const personalProjects: PersonalProjects[] = [
    {
        projectName: 'Buy Low, Sell High',
        images: [
            buylowsellhigh0,
            buylowsellhigh1,
            buylowsellhigh2,
            buylowsellhigh3
        ],
        technologiesUsed: [
            "JavaScript",
            "HTML",
            "CSS",
            "Node.js",
            "Express",
            "Axios",
            "React",
            "Redux",
            "Chart.js",
            "Market Stack API"
        ],
        about: "\"Buy Low, Sell High\" is a React application that uses the MarketStack API to display up-to-date information on stocks from the NASDAQ-100 index. On the page the user can navigate through of the stocks availble on the site, view all of the stocks that are down 15% or greater of their 4 month average, view all of the stocks that are up 15% or greater from their 4 month average, search for a symbol, and get more details on the stock by clicking on it. The website is fully mobile responsive.",
        myRole: "Created Independently",
        repoLink: "https://github.com/thomasZimmerman0/buy_low_sell_high",
    },
    {
        projectName: 'Beauti Bodega',
        images: [
            beautibodega0,
            beautibodega1,
            beautibodega2,
            beautibodega3
        ],
        technologiesUsed: [
            "TypeScript",
            "HTML",
            "CSS",
            "Node.js",
            "Express",
            "Axios",
            "React",
            "Redux",
            "Tailwind",
            "ElephantSQL",
            "PostgreSQL",
            "Sequelize",
            "Firebase"
        ],
        about: `Beauti Bodega is a mobile first shopping application targeted towards companies who sell beauty products, as well as their customers. This application was made as a prototypes for a real WIP application to attract investors, as such, it is currently not live. The application in its current state features a login page, register page, landing page, a products page that allows the user to view all the products available on the site, a cart page that allows the user to view all the products they've added to their cart, a brands page that allows the user to navigate through all the brands featured on the site, profile pages that allow the user to view/edit your profile and visit other users' profiles, and pages specific to managers of an individual brand. On the products page, the user can click on a specific product which will navigate them to a sub-page that displays more detailed information about the product they clicked on; they will also be able to add that product to their cart at a desired quantity. Likewise, once the user selects a brand on the brands page they will be navigated to a sub-page where they can view more detailed information about that brand, as well as all the products that brand has added to the site.

        Currently, there are 2 primary user roles on Beauti Bodega: brand admin, and shopper. Every person who registers an account on Beauti Bodega is a shopper by default. Shoppers have access to viewing some authorization blocked sub-pages, have the ability to add/remove products from their cart, and have the ability to make changes to their profile. A user with a shopper account can also register a brand to Beauti-Bodega which will require them to submit information and a logo for that brand. This action will automatically change the user's account from a shopper to a brand admin for the new brand they've created.
        
        A brand admin will have the same access and abilities as a shopper, but will also have access to the brand manager pages for their specific brand. On the brand manager pages, the user can add, edit, and delete products for their brand. When products are added, updated, or deleted the changes will be made visible on the products page, and on the specific brand page
        
        In a completed version of Beauty Bodega, there would be a 3rd primary role called 'creator'. A user who is a creator would be able to make posts that feature an image, description, and links to the beauty products that they are sponsoring or using in their post. All other users on the site would be able to follow the creator profiles, and get access to a feed of their posts. Currently, the scaffolding for user editing such as changing profile pictures and tags has been completed, as well as the ability to change a shopper account to a creator account (which will make the account visible to anyone who visits the site), but for all intents and purposes it is a work in progress.
        
        The ability for any shopper to switch their account status from a shopper to a brand admin or creator would be replaced with an application that would require a review to see if the applicant meets the requirements to be featured as a company or an influencer on Beauti Bodega.`,
        myRole: "Completed most backend aspects of this application: installed Sequelize.js and Sequelize-CLI, formatted the database schema that is currently present, inputted seeder information, created the logic for almost all API call routes to the server from the frontend. Completed styling and fontend logic for the products pages, brands pages, and cart page. Created all of the CRUD functionality for the 'brand-admin' pages that allowed product manipulation for a specific brand. Completed setting up the Firebase image uploading that is present on multiple pages.",
        repoLink: "https://github.com/sharnee/beautibodega-v0",
    },
    {
        projectName: 'What\'s in my drink?',
        images: [
            whatsinmydrink0,
            whatsinmydrink1,
            whatsinmydrink2,
            whatsinmydrink3,
        ],
        technologiesUsed: [
            "JavaScript",
            "HTML",
            "CSS",
            "thecocktaildb API",
            "Nutritionx API"
        ],
        about: `"What's in my Drink" is an application that was made to make browsing and locating recipies for a multitude of mixed drinks easy to navigate and easy to use. What makes this application truly special is that every drink has a caloric content that is calculated and displayed for each drink. Normally finding this information is tedious, but this application makes the process instantaneous.`,
        myRole: "My Role in this project was to design and implement the primary logic functions that are handling and displaying the incoming information for each drink. This required developing a robust unit converter as well as feeding the parsed information into a nutritional API to get the caloric content.",
        repoLink: "https://github.com/kippHulick/front-end-project",
        websiteLink: "https://whatsinmydrink1.netlify.app/"
    },
    {
        projectName: 'Draw.io',
        images: [
            drawdotio0,
            drawdotio1,
            drawdotio2,
            drawdotio3,
        ],
        technologiesUsed: [
            "JavaScript",
            "HTML",
            "CSS",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "ElephantSQL",
            "Sequelize",
            "Cloudinary",
            "Passport Authentication",
            "Canvas",
            "EJS",
        ],
        about: `Draw.io is an application that was designed with the purpose of letting the user create an account that they can save drawings they've made to, and follow other users to see their creations. Currently the website is uncompleted, and not being hosted; users are able to create digital art, save the art they've made to their account, and follow other users. The user at this point can not edit their previously made artwork, delete their previously made artwork, or see what other users have created.`,
        myRole: "My role in this project was developing the backend aspects of the page. Creaetd the sequelize routes to the ElephantSQL database used in the application, implimented the passport authentication used on the website, implimented the ability to create new accounts, follow and unfollow users, change your profile picture, and save your drawings to your specific account.",
        repoLink: "https://github.com/kippHulick/front-end-project"
    },
]


export default personalProjects