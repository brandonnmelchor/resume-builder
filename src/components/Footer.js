import React from "react";

export default class Footer extends React.Component {
  render() {
    const github = "https://github.com/brandonnmelchor";
    const linkedin = "https://www.linkedin.com/in/brandonnmelchor/";

    return (
      <footer className="bg-dark text-white mt-auto">
        <div className="container-lg py-2">
          <div className="row justify-content-center align-items-center">
            <div className="col text-end">
              <span>&copy; 2022 Brandonn Melchor </span>
              <a className="text-white text-decoration-none ps-1" href={github} target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
              </a>
              <a className="text-white text-decoration-none ps-2" href={linkedin} target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
