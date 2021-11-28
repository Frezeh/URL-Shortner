import React, { useState } from "react";
import logo from "../logo.svg";
import Features from "./features";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { postUrl } from "../redux/ActionCreators";
import { Link } from "react-router-dom";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showStatsModal, setshowStatsModal] = useState(false);
  const [url, setUrl] = useState("");
  const result = useSelector((state) => state.url);

  const dispatch = useDispatch();

  const handleUrl = () => {
    setShowModal(!showModal);
  };

  const handleHistory = () => {
    setshowStatsModal(!showStatsModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postUrl(url));
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleStatsModal = () => {
    setshowStatsModal(!showStatsModal);
  };

  const classes = useStyles();

  const Result = () => {
    return (
      <div className="App-link">
        <p>{result?.url?.shortUrl}</p>
      </div>
    );
  };

  return (
    <div className="row align-items-start">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>VD URL Shortner</h2>
        <p>Easy way to make a long url / link short in minutes</p>
        <button
          style={{
            width: 250,
            backgroundColor: "#4682B4",
            padding: 15,
            justifyContent: "center",
            marginBottom: 20,
            borderRadius: 24,
          }}
          onClick={handleUrl}
        >
          Get Started
        </button>
        <button
          style={{
            width: 250,
            backgroundColor: "#4682B4",
            padding: 15,
            justifyContent: "center",
            marginBottom: 150,
            borderRadius: 24,
          }}
          onClick={handleHistory}
        >
          View statistics
        </button>
        <Features />
      </header>
      {/* Modal for Get Started Button */}
      <Modal isOpen={showModal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          Get started today with VD Url Shortner
        </ModalHeader>
        <ModalBody>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="url"
              label="Enter long URL"
              name="url"
              autoComplete="url"
              autoFocus
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              style={{
                width: "100%",
                backgroundColor: "#4682B4",
                padding: 15,
                justifyContent: "center",
                marginBottom: 20,
                borderRadius: 24,
              }}
              onClick={handleSubmit}
            >
              Cut
            </button>
          </form>
          <Result />
        </ModalBody>
      </Modal>
      {/* Modal for view statistics */}
      <Modal isOpen={showStatsModal} toggle={toggleStatsModal}>
        <ModalHeader toggle={toggleStatsModal}>
          Get statistics for your short URL
        </ModalHeader>
        <ModalBody>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="stats"
              label="Enter the last 9 digits of your URL"
              name="stats"
              autoComplete="stats"
              autoFocus
              onChange={(e) => localStorage.setItem("stats", e.target.value)}
            />
            <Link to={`/statistics`}>
              <button
                style={{
                  width: "100%",
                  backgroundColor: "#4682B4",
                  padding: 15,
                  justifyContent: "center",
                  marginBottom: 20,
                  borderRadius: 24,
                }}
              >
                View statistics
              </button>
            </Link>
          </form>
          <Result />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Home;
