import React from "react";
import "../stylesheet/header/_header.scss";
import logo from "../images/logo_header.png";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <img className="img" src={logo} alt="logo" />
        </div>
      </header>
    );
  }
}

export default Header;
