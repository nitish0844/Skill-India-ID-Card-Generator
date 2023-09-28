import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase";
// import { NavLink, useNavigate } from "react-router-dom";

const Loginbox = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const triggerResetEmail = async () => {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent");
  };

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        history.push("/mainscreen");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className=" p-8 rounded-lg w-96 mr-56 z-50">
      <h2 className="text-2xl font-semibold mb-6 text-center font-LoginFont">
        Login
      </h2>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-#454545 text-sm font-medium mb-1"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="youremailaddress@gmail.com"
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring ring-gray-400 focus:border-gray-400"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-#454545 text-sm font-medium mb-1"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full border border-gray-300 ring-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-gray-400"
        />
      </div>
      <div className="mb-4">
        <button
          onClick={triggerResetEmail}
          className="text-#454545 text-sm font-medium hover:underline cursor-pointer"
        >
          Forgot Password?
        </button>
      </div>
      {/* <div className="justify-center flex mt-3"> */}
      <button
        onClick={onLogin}
        type="button"
        className="bg-black text-white text-sm font-medium py-2 px-36 rounded-md hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300"
      >
        Login
      </button>
      {/* </div> */}
    </div>
  );
};

export default Loginbox;
