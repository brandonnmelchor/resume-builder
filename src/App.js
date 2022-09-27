import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default class App extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-center min-vh-100">
        <Nav />
        <div className="container-lg px-4 py-5">
          <div className="row justify-content-center align-items-center gap-5">
            <div className="card col-5" style={{ height: "10px", backgroundColor: "gray" }}></div>
            <div className="card col" style={{ width: "770px", height: "1000px", backgroundColor: "gray" }}></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
