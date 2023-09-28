import React from "react";
import loginimage from "../../assets/Images/loginimage.png";
import "../../../src/App.css";

const LoginImage = () => {
  return (
    <>
      <div className="flex justify-start ml-32 items-center h-fit">
        <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-transparent h-auto w-auto ml-14 rounded-full opacity-70"></div>
        <img
          src={loginimage} // Replace with your image source
          alt="Centeredimage"
          className="w-300 h-500 z-50"
        />
      </div>
    </>
  );
};

export default LoginImage;
