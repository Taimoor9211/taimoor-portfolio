// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import FlutterLogo from "./assets/tech_logo/flutter.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";
import StylishLogo from "./assets/work_logo/stylish.png";
import Flatally from "./assets/work_logo/Flatally.png";

// Experience Section Logo's

import DigiskillLogo from "./assets/company_logo/digiskil.png";

// Education Section Logo's
import UolLogo from "./assets/education_logo/uol.png";
import SuperiorLogo from "./assets/education_logo/superior.png";
import GovtLogo from "./assets/education_logo/govt.jpeg";

// Project Section Logo's
import CalculatorLogo from "./assets/work_logo/cal.png";
import TypeformLogo from "./assets/work_logo/Typeform.png";
import WeatherAppLogo from "./assets/work_logo/we.png";
import RayOfHopeLogo from "./assets/work_logo/rayofhope.png";
import FuransLogo from "./assets/work_logo/furns.png";
import HarparLogo from "./assets/work_logo/harpar.png";
import Weather from "./assets/work_logo/Weather.png";
import ToDoLogo from "./assets/work_logo/oDo.png"

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Flutter", logo: FlutterLogo },
      { name: "Material UI", logo: materialuiLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: reactjsLogo,
    role: "Frontend Developer",
    company: "Xperia",
    date: "April 2024 - jan 2025",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling  frontend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
    ],
  },
  {
    id: 1,
    img: FlutterLogo,
    role: "Flutter Developer",
    company: "Freelance / Self-Employed",
    date: "Jan 2025 - Present",
    desc: "Developed and deployed cross-platform mobile applications using Flutter framework. Implemented responsive UIs, state management solutions, and integrated with Firebase backend services. Designed and consumed RESTful APIs while following best practices for clean code architecture and performance optimization.",
    skills: [
      "Flutter",
      "Firebase",
      "RESTful APIs",
      "GetX",
      "Dart",
      "State Management",
      "Responsive UI",
      "Cloud Firestore",
      "Authentication",
      "Provider Pattern",
    ],
  },
  {
    id: 2,
    img: DigiskillLogo,
    role: "Data Analytics & Business Intelligence Intern",
    company: "DigiSKills",
    date: "September 2025 - November 2025",
    desc: "Transformed raw data into actionable insights by developing interactive dashboards and comprehensive reports. Conducted in-depth data analysis to identify key business trends, performance metrics, and growth opportunities. Collaborated with cross-functional teams to define KPIs and implement data-driven decision-making processes across the organization.",
    skills: [
      "SQL",
      "Python",
      "Tableau",
      "Power BI",
      "Data Visualization",
      "Excel",
      "Statistical Analysis",
      "Dashboard Development",
      "Data Modeling",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: UolLogo,
    school: "The University, Of Lahore, Sargodha Campus",
    date: "Nov 2021 - June 2025",
    grade: "3.51 CGPA",
    desc: "I have completed my Bachelor degree (BSCS) in Computer Science from The University, Of Lahore, Pakistan. During my time at UOL, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at UOL University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor in Computer Science - BSCS",
  },
  {
    id: 1,
    img: SuperiorLogo,
    school: "Superior College, Kotmomin",
    date: "May 2019 - Aug 2021",
    grade: "79%",
    desc: "I completed my Intermediate in Computer Science (ICS) from Superior College, Kotmomin. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Superior College, Kotmomin allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Intermediate in Computer Science - ICS (Computer Science)",
  },
  {
    id: 2,
    img: GovtLogo,
    school: "Govt boy high school, Kotmomin",
    date: "Apr 2017 - March 2019",
    grade: "76%",
    desc: "I completed my Matric from Govt boy high school, Kotmomin, under the Sargodha board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "Matric in Computer Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "Ray Of Hope Donation Platform",
    description: [
      "Ray Of Hope: Empowering Change Through Donations",
      "Ray Of Hope: Connect, Contribute, Change Lives",
      "Donate with Purpose: The Ray Of Hope Platform",
      "Ray Of Hope: Your Gateway to Giving",
      "Transform Lives: Join the Ray Of Hope Donation Community",
      "Ray Of Hope: Where Generosity Meets Need",
      "Together We Can: The Ray Of Hope Donation App",
      "Ray Of Hope: Building a Better Tomorrow Through Donations",
    ],
    image: RayOfHopeLogo,
    tags: ["HTML", "CSS", "TAILWIND CSS", "JavaScript", "React JS"],
    github: "https://github.com/Taimoor9211/RayOfHope",
    webapp: "https://rayofhope.netlify.app/",
  },
  {
    id: 1,
    title: "Stylish E-Commerce Store",
    description: [
      "Welcome to our stylish boutique, where fashion meets affordability! Explore our curated collection of trendy apparel for women, men, and kids, featuring everything from chic jackets and elegant dresses to casual tees and stylish jeans. Discover the latest trends at unbeatable prices, ensuring you look your best for any occasion. Shop now and elevate your wardrobe with our exclusive selections!",
    ],
    image: StylishLogo, // Ensure StylishLogo is defined
    tags: ["HTML", "CSS", "TAILWIND CSS", "JavaScript", "React JS", "APIs"],
    github: "https://github.com/Taimoor9211/stylish",
    webapp: "https://stylishbytaimoor1.netlify.app/",
  },
  {
    id: 2,
    title: "My Weather App",
    description: [
      "My-Weather-App is a user-friendly weather application built with React and Vite, offering real-time weather updates and forecasts for various locations. It features an intuitive interface, leveraging Tailwind CSS for styling, ensuring a smooth and responsive user experience.",
    ],
    image: Weather, // Ensure StylishLogo is defined
    tags: ["HTML", "CSS", "TAILWIND CSS", "JavaScript", "React JS"],
    github: "https://github.com/Taimoor9211/My-Weather-App",
    webapp: "https://weather-app-by-taimoor.netlify.app/",
  },
  {
    id: 3,
    title: "Flatally",
    description: [
      "In today's digital age, finding a suitable roommate has never been easier. Whether you're a student, a young professional, or someone looking to share living expenses, online platforms have revolutionized the way we search for and connect with potential room partners. These platforms provide a streamlined, efficient way to find individuals whose living habits, preferences, and schedules align with yours, ensuring a harmonious living situation. From detailed profiles to virtual tours and video calls, the process is designed to give you peace of mind and confidence in your choice. In this guide, we'll explore the best practices for finding your ideal roommate online, tips for creating an attractive profile, and how to navigate the entire process seamlessly",
    ],
    image: Flatally, 
    tags: ["HTML", "CSS", "TAILWIND CSS", "JavaScript", "React JS"],
    github: "https://github.com/Taimoor9211/Flatally",
    webapp: "https://flatally.vercel.app/",
  },
  {
    id: 4,
    title: "Furans Furniture Wibesite",
    description:
      "Explore a beautifully designed front-end furniture website that showcases a variety of furniture products including home, office, and hospital furniture. The site features a user-friendly interface built with HTML and CSS, allowing users to easily browse and shop for their desired pieces. With sections for new arrivals, featured products, and a newsletter subscription, this website aims to enhance the online shopping experience.",
    image: FuransLogo,
    tags: ["HTML", "CSS"],
    github: "https://github.com/Taimoor9211/Furniture-Website",
    webapp: "https://furnitures-by-taimoor.netlify.app/",
  },
  {
    id: 5,
    title: "Typeform Clone ",
    description:
      "Easily create a no-code landing page using a form. Turn your form into an engaging landing page. Stay on-brand, collect data, and automate workflows—all with no need to code.",
    image: TypeformLogo,
    tags: ["HTML", "CSS", "TAILWIND CSS"],
    github: "https://github.com/Taimoor9211/tailwind-css",
    webapp: "https://taimoortailwindcss.netlify.app/",
  },
  {
    id: 6,
    title: "ToDo App",
    description:
      "A simple yet powerful ToDoLogo application built using HTML, CSS, and JavaScript.",
    image: ToDoLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Taimoor9211/To-Do-List",
    webapp: "https://taimoor9211.github.io/To-Do-List/",
  },
  {
    id: 7,
    title: "Calculator",
    description:
      "A simple yet powerful calculator application built using HTML, CSS, and JavaScript. This web-based tool features a user-friendly interface that allows users to perform basic arithmetic operations efficiently. With buttons for digits, operators, and functions like clear and delete, the calculator is designed for ease of use, ensuring a smooth experience for anyone needing quick calculations. You can access the application directly [here](https://taimoorcalculator.netlify.app/) and view the source code on GitHub [here](https://github.com/Taimoor9211/Calculator).",
    image: CalculatorLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Taimoor9211/Calculator",
    webapp: "https://taimoorcalculator.netlify.app/",
  },

  {
    id: 8,
    title: "Weather App",
    description:
      "A web application that provides real-time weather updates and forecasts based on user-selected cities. The app features an intuitive design, displaying temperature, humidity, and wind speed, making it an essential tool for anyone looking to stay informed about weather conditions.",
    image: WeatherAppLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Taimoor9211/WeatherApp",
    webapp: "https://taimoorweatherapp.netlify.app/",
  },

  {
    id: 9,
    title: "Nature Mort for Harper's Landing Page",
    description:
      "A captivating exploration of still life art, 'Nature Mort for Harper's' presents a stunning collection that captures the essence of nature's beauty through meticulously arranged objects. Each piece reflects a harmony between the organic and the artistic, inviting viewers to appreciate the intricate details and the fleeting moments of life. This collection not only showcases artistic talent but also serves as a reminder of the delicate balance within the natural world.",
    image: HarparLogo,
    tags: ["HTML", "CSS"],
    github: "https://github.com/Taimoor9211/landing-page",
    webapp: "https://taimoorlandingpage.netlify.app/",
  },
];
