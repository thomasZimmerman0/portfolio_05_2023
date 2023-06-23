import javascript from "./skills-icons/javascript.png";
import typescript from "./skills-icons/typescript.png";
import css from "./skills-icons/CSS.png";
import ajax from "./skills-icons/Ajax.png";
import angular from "./skills-icons/Angular.png";
import cProgLang from "./skills-icons/C.png";
import cli from "./skills-icons/CLI.png";
import cloudinary from "./skills-icons/cloudinary.png";
import express from "./skills-icons/express.png";
import firebase from "./skills-icons/Firebase.png";
import framerMotion from "./skills-icons/framer-motion.png";
import github from "./skills-icons/Github.png";
import gsuite from "./skills-icons/Gsuite.png";
import html from "./skills-icons/HTML.png";
import java from "./skills-icons/Java.png";
import microsoftOffice from "./skills-icons/MicrosoftOffice.png";
import mySQL from "./skills-icons/MySQL.png";
import node from "./skills-icons/node.png";
import oAuth from "./skills-icons/OAuth.png";
import passport from "./skills-icons/passport.png";
import php from "./skills-icons/php.png";
import postgresql from "./skills-icons/postgresql.png";
import python from "./skills-icons/Python.png";
import react from "./skills-icons/React.png";
import redux from "./skills-icons/Redux.jpg";
import restAPI from "./skills-icons/RestApi.png";
import sequelize from "./skills-icons/Sequelize.png";
import vscode from "./skills-icons/VScode.png";
import wordpress from "./skills-icons/Worespress.png";
import { SkillInfo } from "../interfaces/interfaces";

const skillData: SkillInfo[] = [
  {
    skillName: "JavaScript",
    image: javascript,
    description: "JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.",
    Link: "https://en.wikipedia.org/wiki/JavaScript"  
  },
  {
    skillName: "HTML",
    image: html,
    description: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
    Link: "https://en.wikipedia.org/wiki/HTML"  
  },
  {
    skillName: "CSS",
    image: css,
    description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript",
    Link: "https://en.wikipedia.org/wiki/CSS"  
  },
  {
    skillName: "TypeScript",
    image: typescript,
    description: "TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor. TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps. TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.",
    Link: "https://www.typescriptlang.org/"  
  },
  {
    skillName: "Python",
    image: python,
    description: `Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation via the off-side rule. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library.`,
    Link: "https://www.python.org/"  
  },
  {
    skillName: "PHP",
    image: php,
    description: "PHP is a general-purpose scripting language geared towards web development. PHP code is usually processed on a web server by a PHP interpreter implemented as a module, a daemon or a Common Gateway Interface (CGI) executable. On a web server, the result of the interpreted and executed PHP code—which may be any type of data, such as generated HTML or binary image data—would form the whole or part of an HTTP response. Various web template systems, web content management systems, and web frameworks exist that can be employed to orchestrate or facilitate the generation of that response. Additionally, PHP can be used for many programming tasks outside the web context, such as standalone graphical applications and robotic drone control. PHP code can also be directly executed from the command line.",
    Link: "https://www.php.net/"  
  },
  {
    skillName: "C",
    image: cProgLang,
    description: "C is an imperative procedural language, supporting structured programming, lexical variable scope and recursion, with a static type system. It was designed to be compiled to provide low-level access to memory and language constructs that map efficiently to machine instructions, all with minimal runtime support. Despite its low-level capabilities, the language was designed to encourage cross-platform programming. A standards-compliant C program written with portability in mind can be compiled for a wide variety of computer platforms and operating systems with few changes to its source code.",
    Link: "https://en.wikipedia.org/wiki/C_(programming_language)"  
  },
  {
    skillName: "Java",
    image: java,
    description: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile. Java applications are typically compiled to bytecode that can run on any Java virtual machine (JVM) regardless of the underlying computer architecture. The syntax of Java is similar to C and C++, but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as reflection and runtime code modification) that are typically not available in traditional compiled languages. As of 2019, Java was one of the most popular programming languages in use according to GitHub,[citation not found particularly for client–server web applications, with a reported 9 million developers.",
    Link: "https://www.java.com/en/"  
  },
  {
    skillName: "WordPress",
    image: wordpress,
    description: "WordPress (also known as WP or WordPress.org) is a web content management system. It was originally created as a tool to publish blogs but has evolved to support publishing other web content, including more traditional websites, mailing lists and Internet forum, media galleries, membership sites, learning management systems and online stores. Available as free and open-source software, WordPress is among the most popular content management systems – it was used by 42.8% of the top 10 million websites as of October 2021.",
    Link: "https://wordpress.com/"  
  },
  {
    skillName: "Node.js",
    image: node,
    description: "Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.",
    Link: "https://nodejs.org/en"  
  },
  {
    skillName: "React",
    image: react,
    description: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.",
    Link: "https://react.dev/"  
  },
  {
    skillName: "Angular",
    image: angular,
    description: `Angular (also referred to as "Angular 2+") is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.`,
    Link: "https://angular.io/"  
  },
  {
    skillName: "Restful API's",
    image: restAPI,
    description: "Representational state transfer (REST) is a software architectural style that was created to guide the design and development of the architecture for the World Wide Web. REST defines a set of constraints for how the architecture of an Internet-scale distributed hypermedia system, such as the Web, should behave. The REST architectural style emphasises the scalability of interactions between components, uniform interfaces, independent deployment of components, and the creation of a layered architecture to facilitate caching of components to reduce user-perceived latency, enforce security, and encapsulate legacy systems. REST has been employed throughout the software industry and is a widely accepted set of guidelines for creating stateless, reliable web APIs. A web API that obeys the REST constraints is informally described as RESTful. RESTful web APIs are typically loosely based on HTTP methods to access resources via URL-encoded parameters and the use of JSON or XML to transmit data.",
    Link: "https://en.wikipedia.org/wiki/Representational_state_transfer"  
  },
  {
    skillName: "Redux / React Redux",
    image: redux,
    description: `Redux helps you deal with shared state management, but like any tool, it has tradeoffs. It's not designed to be the shortest or fastest way to write code. It's intended to help answer the question "When did a certain slice of state change, and where did the data come from?", with predictable behavior. There are more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity.`,
    Link: "https://redux.js.org/"  
  },
  {
    skillName: "Express",
    image: express,
    description: "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    Link: "https://expressjs.com/"  
  },
  {
    skillName: "OAuth",
    image: oAuth,
    description: `OAuth (short for "Open Authorization") is an open standard for access delegation, commonly used as a way for internet users to grant websites or applications access to their information on other websites but without giving them the passwords. This mechanism is used by companies such as Amazon. Google, Facebook, Microsoft, and Twitter to permit users to share information about their accounts with third-party applications or websites.`,
    Link: "https://oauth.net/"  
  },
  {
    skillName: "Passport.js",
    image: passport,
    description: `Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.`,
    Link: "https://www.passportjs.org/"  
  },
  {
    skillName: "Firebase",
    image: firebase,
    description: `Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world.
   `,
    Link: "https://firebase.google.com/"  
  },
  {
    skillName: "Cloudinary",
    image: cloudinary,
    description: `Cloudinary is a SaaS technology company headquartered in Santa Clara, California, with offices in Israel, England, Poland, and Singapore. The company provides cloud-based image and video management services. It enables users to upload, store, manage, manipulate, and deliver images and video for websites and apps.[1][2] Cloudinary is used by 1 million web and mobile application developers at more than 8,000 companies including Condé Nast, Dropbox, Forbes, Outbrain, Taboola and Answers.com.[3][4][5] Inc. Magazine has called Cloudinary the "gold standard" of image management on the web.`,
    Link: "https://cloudinary.com/"  
  },
  {
    skillName: "Framer Motion",
    image: framerMotion,
    description: "Framer Motion is an animation library that makes creating animations easy. Its simplified API helps us abstract the complexities behind animations and allows us to create animations with ease.",
    Link: "https://www.framer.com/motion/"  
  },
  {
    skillName: "PostgreSQL",
    image: postgresql,
    description: "PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.",
    Link: "https://www.postgresql.org/"  
  },
  {
    skillName: "MySQL",
    image: mySQL,
    description: `MySQL is an open-source relational database management system (RDBMS).[5][6] Its name is a combination of "My", the name of co-founder Michael Widenius's daughter My, and "SQL", the acronym for Structured Query Language. A relational database organizes data into one or more data tables in which data may be related to each other; these relations help structure the data. SQL is a language programmers use to create, modify and extract data from the relational database, as well as control user access to the database. In addition to relational databases and SQL, an RDBMS like MySQL works with an operating system to implement a relational database in a computer's storage system, manages users, allows for network access and facilitates testing database integrity and creation of backups.`,
    Link: "https://www.mysql.com/"  
  },
  {
    skillName: "Sequelize",
    image: sequelize,
    description: "Sequelize is a modern TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more. Featuring solid transaction support, relations, eager and lazy loading, read replication and more.",
    Link: "https://sequelize.org/"  
  },
  {
    skillName: "Command Line Interface",
    image: cli,
    description: "A command-line interface (CLI) is a means of interacting with a device or computer program with commands from a user or client, and responses from the device or program, in the form of lines of text. Such access was first provided by computer terminals starting in the mid-1960s. This provided an interactive environment not available with punched cards or other input methods.",
    Link: "https://en.wikipedia.org/wiki/Command-line_interface"  
  },
  {
    skillName: "Git / Github",
    image: github,
    description: "GitHub, Inc. is a platform and cloud-based service for software development and version control using Git, allowing developers to store and manage their code. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.[6] Headquartered in California, it has been a subsidiary of Microsoft since 2018.",
    Link: "https://github.com/"  
  },
  {
    skillName: "VSCode",
    image: vscode,
    description: "Visual Studio Code, also commonly referred to as VS Code,[9] is a source-code editor made by Microsoft with the Electron Framework, for Windows, Linux and macOS.[10] Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git. Users can change the theme, keyboard shortcuts, preferences, and install extensions that add functionality.",
    Link: "https://code.visualstudio.com/"  
  },
  {
    skillName: "G-Sutie",
    image: gsuite,
    description: "Google Workspace (formerly known as Google Apps and later G Suite) is a collection of cloud computing, productivity and collaboration tools, software and products developed and marketed by Google. It consists of Gmail, Contacts, Calendar, Meet and Chat for communication; Currents for employee engagement; Drive for storage; and the Google Docs Editors suite for content creation. An Admin Panel is provided for managing users and services.[2][3] Depending on edition Google Workspace may also include the digital interactive whiteboard Jamboard and an option to purchase add-ons such as the telephony service Voice. The education edition adds a learning platform Google Classroom and today has the name Workspace for Education.",
    Link: "https://workspace.google.com/"  
  },
  {
    skillName: "Microsfot Office",
    image: microsoftOffice,
    description: "Microsoft Office, or simply Office, is a discontinued family of client software, server software, and services developed by Microsoft. It was first announced by Bill Gates on August 1, 1988, at COMDEX in Las Vegas. Initially a marketing term for an office suite (bundled set of productivity applications), the first version of Office contained Microsoft Word, Microsoft Excel, and Microsoft PowerPoint. Over the years, Office applications have grown substantially closer with shared features such as a common spell checker, Object Linking and Embedding data integration and Visual Basic for Applications scripting language. Microsoft also positions Office as a development platform for line-of-business software under the Office Business Applications brand.",
    Link: "https://www.office.com/"  
  },
]

export default skillData
