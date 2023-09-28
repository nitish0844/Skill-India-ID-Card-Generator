import React from "react";
import IDCardImage from "../../assets/Images/IDMain.jpg";

const IDCard = () => {
  return (
    <div className="z-50">
      <img
        src={IDCardImage}
        alt="ID"
        className="align-middle mt-5 ml-11  shadow-black shadow-2xl"
        style={{ height: "90%", width: "50%" }}
      />
    </div>
  );
};

export default IDCard;
