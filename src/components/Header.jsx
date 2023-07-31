import React from "react";
import { Link } from "react-router-dom";

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <Link className="header-text" to="/">
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "pink",
  text: "Feedback UI",
};

export default Header;
