import {
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

//import QuestionPage from './QuestionPage.js //style="font-size:10vw;"'

function LandingFrameMessage() {
  const style = {
    margin: "auto",
    padding: "10% '20%' 20% 10%",
    color: "white",
    minHeight: "80vh",
    position: "relative",
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundImage:
      "url(https://www.pexels.com/photo/defocused-image-of-lights-255379/)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div style={style} className="bg-light">
      <h1 className="mb-3 text-center text-black" style={{ fontSize: "9vh" }}>
        Discover Yourself
      </h1>
      <h4 className="mb-3 text-center text-black" style={{ fontSize: "4vh" }}>
        Introvert or Extrovert Personality Test
      </h4>

      <Link
        className="btn btn-primary btn-lg"
        to="./question"
        style={{ color: "white", textDecoration: "none" }}
      >
        Start Quiz
      </Link>
    </div>
  );
}

function LandingFrame() {
  const style = {
    "background-image": `url("img/background.jpg")`,
    "background-repeat": "no-repeat",
    "background-size": "cover",
    position: "absolute",
    height: "100%",
    width: "100%",
  };
  return (
    <div style={style}>
      <LandingFrameMessage />
    </div>
  );
}

const HomePage = () => {
  return (
    <div
      style={{
        backgroundColor: "red",
        backgroundImage: `url("/Users/Ayodele/Desktop/Simpersonality/simpersonality/packages/react-frontend/src/assets/img/logo.png")`,
      }}
    >
      <LandingFrameMessage />
    </div>
  );
};

export default HomePage;
