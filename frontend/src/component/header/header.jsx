import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4">
      {/* desktop */}
      <div className="flex items-center h-full">
        <Link to={""}>
          <div className="h-16">
            <img src={logo} className="h-full" alt="icon" />
          </div>
        </Link>
      </div>
      {/* mobile */}
    </header>
  );
};

export default Header;
