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
      languages: "JavaScript/NodeJS, CSS/SASS, HTML, Bash",
      frameworks: "ExpressJS, ReactJS, Material UI, Bootstrap",
      technologies: "NextJS, Firebase, Google Cloud Platform, Webpack, Parcel, Git, Google Search",
    },
    experience: [
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
      {
        id: uniqid(),
        company: "DHR Health",
        title: "Clinical Solutions Specialist",
        startMonth: "Sep",
        startYear: "2018",
        endMonth: "May",
        endYear: "2021",
        details: [
          {
            id: uniqid(),
            text: "Automated clinical processes for 90% of all inpatient and ambulatory clinic locations using Cerner native tools",
          },
          {
            id: uniqid(),
            text: "Coordinated the implementation of Covid-19 protocols, optimizing treatment times for 95% of all incoming patients",
          },
        ],
      },
    ],
    projects: [
      {
        id: uniqid(),
        projectName: "Resume Builder",
        url: "https://brandonnmelchor.github.io/resume-builder/",
        tech: "JavaScript, CSS/SASS, HTML, ReactJS, Material UI",
        details: [
          {
            id: uniqid(),
            text: "Developed a resume builder app that enables users to create their own resumes and download them as a PDF",
          },
          {
            id: uniqid(),
            text: "Leveraged ReactJS to conditionally render components based on user input and current resume section",
          },
          {
            id: uniqid(),
            text: "Lifted state and implemented inverse data flow to synchronize resume components that share the same data",
          },
        ],
      },
      {
        id: uniqid(),
        projectName: "Forecast",
        url: "https://brandonnmelchor.github.io/forecast/",
        tech: "JavaScript, CSS/SASS, HTML, ReactJS, Bootstrap",
        details: [
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
        tech: "JavaScript, CSS/SASS, HTML, Bootstrap",
        details: [
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
    newEntryMode: false,
    targetEntry: "",
    prevSectionName: "",
    prevSectionState: {},
  };
};
