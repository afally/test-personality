import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
import saveExtrovertCountToLocalStorage from "../util/saveExtrovertCountToLocalStorage";
import saveIntrovertCountToLocalStorage from "../util/saveIntrovertCountToLocalStorage";
import loadExtrovertCountFromLocalStorage from "../util/loadExtrovertCountFromLocalStorage";
import loadIntrovertCountFromLocalStorage from "../util/loadIntrovertCountFromLocalStorage";
import { styled } from "@mui/material/styles";
import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

const Questionpage = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [question, setQuestion] = useState([]);
  const [options, setoptions] = useState({});
  const [extrovert, setExtrovert] = useState(0);
  const [introvert, setIntrovert] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const style = {
    margin: "auto",
    //padding: "10% '20%' 20% 10%",
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

  const renderQuestions = () => {
    localStorage.clear();

    axios
      .get(`http://localhost:3001/api/questions/`)
      .then((res) => {
        downloaded = res.data.data;
        setQuestion(downloaded.question);
      })
      .catch((error) => console.log(error));

    //if (downloaded) {
    //console.log(downloaded.question);
    //setQuestion(downloaded.question);
    //console.log(question);
    //}

    setTimeout(() => {
      document.getElementById("hideDiv").style.display = "block";
    }, 1000);
  };

  const handleButtonClick = (option, count, questionIndex) => {
    if (option === "a" || option === "b") {
      setExtrovert((prevCount) => prevCount + count);
    } else if (option === "c" || option === "d") {
      setIntrovert((prevCount) => prevCount + count);
    }

    setQuestion((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[questionIndex].selectedOption = option;
      return updatedQuestions;
    });
  };

  const StyledButton = styled(Button)`
    &:active {
      background-color: red;
      /* Replace 'red' with your desired color */
    }
  `;

  let downloaded;

  let extrocount = 0;
  let introcount = 0;

  const renderedQuestionArray = question.map((item, index) => {
    return (
      <MDBCard key={item.number} style={{ width: "100%", margin: "0 auto" }}>
        <MDBCardHeader>{`Question ${item.number}`}</MDBCardHeader>
        <MDBCardBody>
          <MDBCardTitle data-testid="question">{item.question}</MDBCardTitle>
          <MDBListGroup style={{ width: "100%", margin: "0 auto" }} light>
            <MDBListGroupItem className="px-3">
              <button
                className={
                  item.selectedOption === "a"
                    ? "active-button"
                    : "primary-button"
                }
                onClick={() => {
                  handleButtonClick("a", 1, index);
                  saveExtrovertCountToLocalStorage(extrovert);
                }}
              >
                a
              </button>
              {item.optiona}
            </MDBListGroupItem>
            <MDBListGroupItem className="px-3">
              <button
                className={
                  item.selectedOption === "b"
                    ? "active-button"
                    : "primary-button"
                }
                onClick={() => {
                  handleButtonClick("b", 1, index);
                  saveExtrovertCountToLocalStorage(extrovert);
                }}
              >
                b
              </button>
              {item.optionb}
            </MDBListGroupItem>
            <MDBListGroupItem className="px-3">
              <button
                className={
                  item.selectedOption === "c"
                    ? "active-button"
                    : "primary-button"
                }
                onClick={() => {
                  handleButtonClick("c", 1, index);
                  saveIntrovertCountToLocalStorage(introvert);
                }}
              >
                c
              </button>
              {item.optionc}
            </MDBListGroupItem>
            <MDBListGroupItem className="px-3">
              <button
                className={
                  item.selectedOption === "d"
                    ? "active-button"
                    : "primary-button"
                }
                onClick={() => {
                  handleButtonClick("d", 1, index);
                  saveIntrovertCountToLocalStorage(introvert);
                }}
              >
                d
              </button>
              {item.optiond}
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBCardBody>
      </MDBCard>
    );
  });

  return (
    <>
      <div
        style={{
          minHeight: "80vh",
          position: "relative",
          alignItems: "center",
          paddingBottom: "20px",
          paddingTop: "60px",
          paddingLeft: "40px",
          paddingRight: "40px",
        }}
      >
        <button
          id="hideButton"
          style={{
            display: "block",
            margin: "auto",
            fontSize: "3vh",
            padding: "10px 60px",
          }}
          onClick={() => {
            renderQuestions();
            document.getElementById("hideButton").style.display = "none";
          }}
          className="btn btn-primary btn-lg"
        >
          Personality-Test
        </button>
        {renderedQuestionArray}
        <div
          id="hideDiv"
          style={{ display: "none", textAlign: "center", marginTop: "50px" }}
        >
          <Link
            className="btn btn-primary btn-lg"
            to="./answer"
            style={{ textDecoration: "none", margin: "0 auto" }}
          >
            {" "}
            Result
          </Link>
        </div>
      </div>
    </>
  );
};

export default Questionpage;
