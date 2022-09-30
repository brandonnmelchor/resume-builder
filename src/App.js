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
      resume: demo,
      educationEntry: {
        id: "",
        schoolName: "",
        degree: "",
        major: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
      },
      experienceEntry: {
        id: "",
        company: "",
        title: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
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

    this.updatePersonal = this.updatePersonal.bind(this);
    this.updateSkills = this.updateSkills.bind(this);
  }

  updatePersonal(event) {
    const target = event.target;
    const name = target.id;
    const value = target.value;

    const resume = this.state.resume;
    resume.personal[name] = value;

    this.setState({
      resume: resume,
    });
  }

  updateSkills(event) {
    const target = event.target;
    const name = target.id;
    const value = target.value;

    const resume = this.state.resume;
    resume.skills[name] = value;

    this.setState({
      resume: resume,
    });
  }

  render() {
    const resume = this.state.resume;
    const formChanges = {
      updatePersonal: this.updatePersonal,
      updateSkills: this.updateSkills,
    };

    return (
      <div className="d-flex flex-column justify-content-center min-vh-100">
        <Nav />
        <div className="container-lg px-4 py-5">
          <div className="row justify-content-center align-items-start gap-4">
            <Form resume={resume} formChanges={formChanges} />
            <Resume resume={resume} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
