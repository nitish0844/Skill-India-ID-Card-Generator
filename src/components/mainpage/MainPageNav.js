import React, { useEffect } from "react";
import Logo from "../../assets/Images/logo.png";
import { useHistory } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/Firebase";

const MainPageNav = () => {
  const history = useHistory();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        history.push("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  useEffect(() => {
    // Add a listener to check the authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // If the user is not authenticated, redirect to the login page
        history.push("/");
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [history]);

  return (
    <nav className="p-4 -z-50 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        {" "}
        {/* Decreased space-x value */}
        {/* Replace 'your-logo.svg' with your actual logo */}
        <img src={Logo} alt="Company Logo" className="h-26 w-32" />
      </div>
      <div className="space-x-2">
        {" "}
        {/* Decreased space-x value */}
        <button
          onClick={handleLogout}
          className="bg-white font-semibold font-LoginFont text-red-600 px-4 py-2 rounded-full hover:bg-red-600 hover:text-white transition duration-300"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default MainPageNav;
