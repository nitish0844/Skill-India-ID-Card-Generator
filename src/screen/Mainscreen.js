import React from "react";
import MainPageNav from "../components/mainpage/MainPageNav";
import Excelupload from "../components/mainpage/Excelupload";
import IDCard from "../components/mainpage/IDCard";
import { Helmet } from "react-helmet";

const Mainscreen = () => {
  const title = "Skill-Hub Generator";

  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MainPageNav />
      <div className="flex flex-row justify-between px-7 z-50">
        <Excelupload />
        <IDCard />
      </div>
    </div>
  );
};

export default Mainscreen;
