import React from "react";
import NavBar from "../components/login/Navbar";
import LoginImage from "../components/login/LoginImage";
import Loginbox from "../components/login/Loginbox";
import { Helmet } from "react-helmet";

const Login = () => {
  const title = "Skill-Hub login";

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <NavBar />
      <div className="flex justify-between">
        <LoginImage />
        <Loginbox />
      </div>
    </div>
  );
};

export default Login;
