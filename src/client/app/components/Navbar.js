import React from "react";

export default class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded navbar-fixed-top">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">HOME<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">SIGN IN</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">EVENTS</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
