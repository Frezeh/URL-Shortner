import React, { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchStats, postUrl } from "../redux/ActionCreators";
import { useHistory } from "react-router";

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
  const [stats, setStats] = useState("");

  const result = useSelector((state) => state.url);
  const statistics = useSelector((state) => state.history);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (statistics.isCorrectLink) history.push("/statistics");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statistics.isCorrectLink]);

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

  const handleStats = (e) => {
    e.preventDefault();
    dispatch(fetchStats(stats));
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
    <div className="body">
      <section className="blue">
        <h1>VD URL Shortner</h1>
        <p>Easy way to make a long url / link short in seconds</p>
        <div className="curve"></div>
      </section>

      {/* <section>
        <h1>Nice Curves!</h1>
        <p>
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
        </p>
      </section> */}

      <section className="bubble">
        <h1>Enter your long url and get its short version.</h1>
        <p>
          The short URL is constantly connected with the main one. It will be a
          link's mirror
        </p>
        <p>
          <button
            className="btn btn-md btn-info"
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
        </p>
      </section>

      {/* <section className="dark">
        <h1>Nice Curves!</h1>
        <p>
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
        </p>
      </section> */}

      <section className="red">
        <h1 style={{ marginTop: 70 }}>View link statistics</h1>
        <p>View statistics of your generated link anytime</p>
        <p>
          <button
            className="btn btn-md btn-info"
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
        </p>

        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <div className="spacer layer1"></div>

      <section>
        <h1>Short Link</h1>
        <p>Get your short link in one click</p>
        <p>It is always available</p>
        <p>The short link is always connected to the main URL</p>
      </section>

      <div className="spacer layer2 flip"></div>

      <section className="pink">
        <div className="blob-content">
          <h1>Statistics</h1>
          <p>Get full Statistics of your short URL</p>
          <p>Click on history to get url history</p>
          <p>Get total number of visits</p>
          <p>Get device details of visitors</p>
        </div>

        <svg
          className="blob-motion"
          id="visual"
          viewBox="0 0 960 540"
          width="960"
          height="540"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <g transform="translate(450.7256843113689 283.4942824330989)">
            <path
              id="blob1"
              d="M148.7 -134.9C193.7 -103.7 231.9 -51.9 232.4 0.6C233 53 196.1 106.1 151.1 128.6C106.1 151.1 53 143 -4.4 147.4C-61.8 151.8 -123.5 168.5 -151.2 146C-178.8 123.5 -172.4 61.8 -172.8 -0.4C-173.1 -62.5 -180.3 -124.9 -152.6 -156.1C-124.9 -187.3 -62.5 -187.1 -5.3 -181.8C51.9 -176.5 103.7 -166 148.7 -134.9"
              fill="#BB004B"
            ></path>
          </g>
          <g
            transform="translate(509.54377535978017 281.49390864595887)"
            style={{ visibility: "hidden" }}
          >
            <path
              id="blob2"
              d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
              fill="#BB004B"
            ></path>
          </g>
        </svg>
      </section>

      <div className="spacer layer2"></div>

      <section className="blobs">
        <h1>Our Promise</h1>
        <p>
          We will provide consistent, convenient and straight-through product
          and services across all our touch points
        </p>
        <p>
          We recognize the uniqueness of our customers and will serve them in
          the manner they prefer
        </p>
        <p>
          We will uphold the highest levels of integrity, confidentiality and
          transparency at all times
        </p>
      </section>

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
              className="btn btn-md btn-info"
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
              onChange={(e) => setStats(e.target.value)}
            />
            <button
              className="btn btn-md btn-info"
              style={{
                width: "100%",
                backgroundColor: "#4682B4",
                padding: 15,
                justifyContent: "center",
                marginBottom: 20,
                borderRadius: 24,
              }}
              onClick={handleStats}
            >
              View statistics
            </button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Home;
