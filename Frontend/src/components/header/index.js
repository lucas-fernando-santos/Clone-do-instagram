import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import camera from "../../assets/camera.svg";

const index = () => {
  return (
    <header className="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="insta do Lc" />
        </Link>
        <Link to="/new">
          <img src={camera} alt="Enviar Publicação" />
        </Link>
      </div>
    </header>
  );
};

export default index;
