import uniqid from "uniqid";

const demo = {
  personal: {
    firstName: "Brandonn",
    lastName: "Melchor",
    phone: "+19567396168",
    email: "brandonnmelchor@gmail.com",
    linkedin: "linkedin.com/in/brandonnmelchor",
    github: "github.com/brandonnmelchor",
  },
  education: [
    {
      id: uniqid(),
      schoolName: "Western Governors University",
      degree: "Bachelor of Science",
      major: "Computer Science",
      startDate: "Jan 2023",
      endDate: "May 2024",
    },
    {
      id: uniqid(),
      schoolName: "University of Texas Rio Grande Valley",
      degree: "Master of Science",
      major: "Health Informatics",
      startDate: "Jan 2019",
      endDate: "Dec 2019",
    },
    {
      id: uniqid(),
      schoolName: "University of Texas Rio Grande Valley",
      degree: "Bachelor of Science",
      major: "Nursing",
      startDate: "Aug 2011",
      endDate: "May 2016",
    },
  ],
  skills: {
    languages: "JavaScript, CSS/SASS, HTML",
    technologies: "React.js, Node.js, Bootstrap, Webpack, Parcel, Git, Bash, Google Cloud Platform, Google Search",
  },
  experience: [
    {
      id: uniqid(),
      company: "Oracle",
      title: "Clinical Solutions Architect",
      startDate: "Apr 2022",
      endDate: "Present",
      description: [
        {
          id: uniqid(),
          text: "Coordinated current state reviews of clinical workflows in collaboration with CIO and key stakeholders",
        },
        {
          id: uniqid(),
          text: "Implemented Cerner solutions to healthcare facilities, designing scalable processes to optimize workflows",
        },
        {
          id: uniqid(),
          text: "Automated clinical processes by 90% using Cerner solutions such as PowerOrders and PowerPlans",
        },
        {
          id: uniqid(),
          text: "Facilitated unit and integration testing, user acceptance validation, and post production documentation",
        },
      ],
    },
    {
      id: uniqid(),
      company: "Tech Mahindra",
      title: "Clinical Solutions Team Lead",
      startDate: "May 2021",
      endDate: "Apr 2022",
      description: [
        {
          id: uniqid(),
          text: "Provided technical and operational guidance to a cross-functional team of clinicians and engineers",
        },
        {
          id: uniqid(),
          text: "Implemented Cerner solutions to healthcare facilities, designing scalable processes to optimize workflows",
        },
        {
          id: uniqid(),
          text: "Served as a point of contact to help define user stories, user acceptance criteria, and task estimates",
        },
        {
          id: uniqid(),
          text: "Prioritized user stories within an Agile environment, using tools such as Jira and ServiceNow",
        },
      ],
    },
    {
      id: uniqid(),
      company: "DHR Health",
      title: "Clinical Solutions Specialist",
      startDate: "Sep 2018",
      endDate: "May 2021",
      description: [
        {
          id: uniqid(),
          text: "Automated clinical processes for 90% of all inpatient and ambulatory clinic locations using Cerner native tools",
        },
        {
          id: uniqid(),
          text: "Coordinated the design and implementation of Covid-19 protocols, optimizing admission and treatment times for 95% of all incoming Covid-19 patients",
        },
      ],
    },
    {
      id: uniqid(),
      company: "Universal Health Services",
      title: "RN Clinical Informaticist",
      startDate: "May 2016",
      endDate: "Sep 2018",
      description: [
        {
          id: uniqid(),
          text: "Provided operational support to Cerner solutions, defining user stories and routing feature requests",
        },
      ],
    },
  ],
  projects: [
    {
      id: uniqid(),
      projectName: "Forecast",
      url: "https://brandonnmelchor.github.io/forecast/",
      description: [
        {
          id: uniqid(),
          text: "Developed a responsive weather app using data from OpenWeather API to provide users a live forecast",
        },
        {
          id: uniqid(),
          text: "Leveraged geolocation and location search data from Google Places/Maps API to ensure forecast accuracy",
        },
        {
          id: uniqid(),
          text: "Implemented functions to continuously update page elements based on location and weather data",
        },
      ],
    },
    {
      id: uniqid(),
      projectName: "Read Me",
      url: "https://brandonnmelchor.github.io/read-me/",
      description: [
        {
          id: uniqid(),
          text: "Designed a responsive library app that enables users to track their reading list and update their progress",
        },
        {
          id: uniqid(),
          text: "Leveraged Web Storage API to store user data and create a seamless experience between each visit",
        },
        {
          id: uniqid(),
          text: "Utilized functions to dynamically create cards for each book, adding event listeners and attributes",
        },
      ],
    },
    {
      id: uniqid(),
      projectName: "Pixel Sketch",
      url: "https://brandonnmelchor.github.io/pixel-sketch/",
      description: [
        {
          id: uniqid(),
          text: "Created an interactive sketchpad app where users can select color modes and erase the canvas itself",
        },
        {
          id: uniqid(),
          text: "Utilized functions to dynamically create the canvas, adding event listeners to each “pixel” for functionality",
        },
      ],
    },
    {
      id: uniqid(),
      projectName: "Book Landing Page",
      url: "https://brandonnmelchor.github.io/landing-page-book/",
      description: [
        {
          id: uniqid(),
          text: "Leveraged Bootstrap to create an interactive product landing page using dynamic modal components",
        },
      ],
    },
  ],
};

export default demo;
