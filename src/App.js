import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default class App extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-center min-vh-100">
        <Nav />
        <Footer />
      </div>
    );
  }
}
