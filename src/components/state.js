import uniqid from "uniqid";

export const newResume = () => {
  return {
    personal: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
    },
    education: [],
    skills: {
      languages: "",
      frameworks: "",
      technologies: "",
    },
    experience: [],
    projects: [],
  };
};

export const demoResume = () => {
  return {
    personal: {
      firstName: "Brandonn",
      lastName: "Melchor",
      phone: "+12345678910",
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
        startMonth: "Jan",
        startYear: "2023",
        endMonth: "May",
        endYear: "2024",
      },
      {
        id: uniqid(),
        schoolName: "University of Texas Rio Grande Valley",
        degree: "Master of Science",
        major: "Health Informatics",
        startMonth: "Jan",
        startYear: "2019",
        endMonth: "Dec",
        endYear: "2019",
      },
      {
        id: uniqid(),
        schoolName: "University of Texas Rio Grande Valley",
        degree: "Bachelor of Science",
        major: "Nursing",
        startMonth: "Aug",
        startYear: "2011",
        endMonth: "May",
        endYear: "2016",
      },
    ],
    skills: {
      languages: "JavaScript/NodeJS, CSS/SASS, HTML, MQL, Bash",
      frameworks: "ExpressJS, Mongoose, ReactJS/NextJS, Material UI, Bootstrap",
      technologies: "AWS, Heroku, Firebase, MongoDB, Google Cloud Platform, Webpack, Parcel, Git, Google Search",
    },
    experience: [
      {
        id: uniqid(),
        company: "Real Items",
        title: "Software Engineer Intern",
        startMonth: "Oct",
        startYear: "2022",
        endMonth: "Present",
        endYear: "",
        details: [
          {
            id: uniqid(),
            text: "Refactored web apps using ReactJS to improve responsiveness and user experience, increasing traffic by 10%",
          },
          {
            id: uniqid(),
            text: "Implemented and refactored REST APIs using Express and MongoDB to serve data to various web apps",
          },
          {
            id: uniqid(),
            text: "Identified and resolved bugs with code review, decreasing the number of customer reports by 10%",
          },
        ],
      },
      {
        id: uniqid(),
        company: "Oracle",
        title: "Clinical Solutions Consultant",
        startMonth: "Apr",
        startYear: "2022",
        endMonth: "Present",
        endYear: "",
        details: [
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
        startMonth: "May",
        startYear: "2021",
        endMonth: "Apr",
        endYear: "2022",
        details: [
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
    ],
    projects: [
      {
        id: uniqid(),
        projectName: "Real Studio",
        url: "https://brandonnmelchor.github.io/real-studio/",
        tech: "ReactJS, Material UI, Express, MongoDB, Heroku",
        details: [
          {
            id: uniqid(),
            text: "Designed a full-stack app that enables users to mint songs on the Ethereum blockchain using Real Items API",
          },
          {
            id: uniqid(),
            text: "Implemented authentication using MetaMask to associate a unique ID to user accounts for login validation",
          },
          {
            id: uniqid(),
            text: "Developed backend functionality to handle requests, process data, and serve responses using REST APIs",
          },
        ],
      },
      {
        id: uniqid(),
        projectName: "Resume Builder",
        url: "https://brandonnmelchor.github.io/resume-builder/",
        tech: "ReactJS, Material UI",
        details: [
          {
            id: uniqid(),
            text: "Created a resume builder app that enables users to create their own resumes and save them as a PDF",
          },
          {
            id: uniqid(),
            text: "Leveraged ReactJS to conditionally render components based on user input and current resume section",
          },
          {
            id: uniqid(),
            text: "Lifted state and implemented inverse data flow to synchronize resume components that share the same data",
          },
          {
            id: uniqid(),
            text: "Implemented custom hooks to share common functionality between components and improve code readability",
          },
        ],
      },
      {
        id: uniqid(),
        projectName: "Forecast",
        url: "https://brandonnmelchor.github.io/forecast/",
        tech: "JavaScript, CSS/SASS, HTML, Bootstrap",
        details: [
          {
            id: uniqid(),
            text: "Developed a weather app using data from OpenWeather API to provide users a live forecast",
          },
          {
            id: uniqid(),
            text: "Leveraged geolocation and location search data from Google Places/Maps API to ensure forecast accuracy",
          },
        ],
      },
    ],
  };
};

export const educationEntry = () => {
  return {
    id: uniqid(),
    schoolName: "",
    degree: "",
    major: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
  };
};

export const experienceEntry = () => {
  return {
    id: uniqid(),
    company: "",
    title: "",
    startMonth: "",
    startYear: "",
    endMonth: "",
    endYear: "",
    details: [],
  };
};

export const projectEntry = () => {
  return {
    id: uniqid(),
    projectName: "",
    url: "",
    tech: "",
    details: [],
  };
};

export const entryDetails = () => {
  return {
    id: uniqid(),
    text: "",
  };
};

export const newEntryMode = () => {
  return {
    entryMode: false,
    targetEntry: "",
    prevSectionName: "",
    prevSectionState: {},
  };
};
