import React, { useState, useEffect } from "react";
import Login from "./screen/Login";
import "./App.css";
import Mainscreen from "./screen/Mainscreen";
import ExcelDisplay from "./components/ExcelDataDisplay/ExcelDisplay";
import GenerateIDCard from "./components/IDCard/IDCardPdf";
import { BrowserRouter as Router, Route } from "react-router-dom";

const DesktopMessage = () => (
  <div className="h-screen flex flex-col justify-center items-center">
    <div className="text-center p-4 text-red-700 font-extrabold font-LoginFont">
      Please open the site in a desktop-sized screen.
    </div>
  </div>
);

const App = () => {
  // const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1240);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1220);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1220);
      // setIsDesktop(window.innerWidth >= 1240);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Router>
      {isDesktop ? ( // Check if the screen size is desktop
        <Route>
          <Route path="/" exact component={Login} />
          <Route path="/mainscreen" exact component={Mainscreen} />
          <Route path="/excel-data" exact component={ExcelDisplay} />
          <Route path="/generate-id-card" exact component={GenerateIDCard} />
        </Route>
      ) : (
        <DesktopMessage /> // Display the message for smaller screens
      )}
    </Router>

    // <Router>
    //   <Route>
    //     <Route path="/" exact component={Login} />
    //     <Route path="/mainscreen" exact component={Mainscreen} />
    //     <Route path="/excel-data" exact component={ExcelDisplay} />
    //     <Route path="/generate-id-card" exact component={GenerateIDCard} />
    //   </Route>
    // </Router>
  );
};

export default App;
