import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import dogone from "../Assests/Images/dogfour.jpg";
import { useNavigate } from "react-router-dom";

import "./GoogleLogin.scss";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true); // Initial loading state is true

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log("Token Received:", codeResponse.access_token);
      setUser(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user && user.access_token) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log("Profile Data:", res.data);
          setProfile(res.data);
          setLoading(false);
          navigate("/bottomicondrawer");
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  const profileRouter = () => {};

  return (
    <div className="google-login-container">
      <img src={dogone} alt="login dog img" />

      <p onClick={profileRouter}>India's Dog dating App</p>

      <button className="login-btn" onClick={() => login()}>
        <FontAwesomeIcon icon={faGoogle} /> Sign in with Google 🚀
      </button>
    </div>
  );
};

export default GoogleLogin;
