import React from "react";
import Nav from "./components/Nav";

export default class App extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-center min-vh-100">
        <Nav />
      </div>
    );
  }
}
