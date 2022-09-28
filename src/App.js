import React from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

export default class App extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-center min-vh-100">
        <Nav />
        <div className="container-lg px-4 py-5">
          <div className="row justify-content-center align-items-center gap-4">
            <Form />
            <Resume />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
