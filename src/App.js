import React from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import demo from "./components/demo";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: {
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
          technologies: "",
        },
        experience: [],
        projects: [],
      },
      educationEntry: {
        id: "",
        schoolName: "",
        degree: "",
        major: "",
        startDate: "",
        endDate: "",
      },
      experienceEntry: {
        id: "",
        company: "",
        title: "",
        startDate: "",
        endDate: "",
        details: [],
      },
      experienceDetails: {
        id: "",
        text: "",
      },
      projectEntry: {
        id: "",
        projectName: "",
        url: "",
        details: [],
      },
      projectDetails: {
        id: "",
        text: "",
      },
    };
  }

  render() {
    return (
      <div className="d-flex flex-column justify-content-center min-vh-100">
        <Nav />
        <div className="container-lg px-4 py-5">
          <div className="row justify-content-center align-items-center gap-4">
            <Form />
            <Resume resume={demo} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
