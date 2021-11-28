import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Features() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <section className="features">
      <div className="container">
        <div className="section-title" style={{ paddingBottom: 50 }}>
          <h2>Features</h2>
          <p>
           All you need to do is enter your long url and get its short version. The short URL is constantly connected with the main one. It will be a link's mirror
          </p>
        </div>

        <div className="row" data-aos="fade-up" style={{ paddingBottom: 30 }}>
          <div className="col-md-5">
            <img
              src="assets/images/features-1.svg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-md-7 pt-4">
            <h3>Short Link</h3>
            <p className="fst-italic">Get a short link in a click</p>
            <ul>
              <li>
                <i className="bi bi-check"></i> Get your short link in one click
              </li>
              <li>
                <i className="bi bi-check"></i> It is always available
              </li>
              <li>
                <i className="bi bi-check"></i> The short link is always connected to the main URL
              </li>
            </ul>
          </div>
        </div>

        <div className="row" data-aos="fade-up" style={{ paddingBottom: 30 }}>
          <div className="col-md-5 order-1 order-md-2">
            <img
              src="assets/images/features-2.svg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-md-7 pt-5 order-2 order-md-1">
            <h3>Statistics</h3>
            <p className="fst-italic">Get full Statistics of your short URL</p>
            <ul>
              <li>
                <i className="bi bi-check"></i> Click on history to get url history
              </li>
              <li>
                <i className="bi bi-check"></i> Get total number of visits
              </li>
              <li>
                <i className="bi bi-check"></i> Get device details of visitors
              </li>
            </ul>
          </div>
        </div>

        <div className="row" data-aos="fade-up" style={{ paddingBottom: 30 }}>
          <div className="col-md-5 order-1 order-md-2">
            <img
              src="assets/images/features-4.svg"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-md-7 pt-5 order-2 order-md-1">
            <h3>Promise</h3>
            <p className="fst-italic">Our Promise</p>
            <ul>
              <li>
                <i className="bi bi-check"></i> We will provide consistent,
                convenient and straight-through product and services across all
                our touch points
              </li>
              <li>
                <i className="bi bi-check"></i> We recognize the uniqueness of
                our customers and will serve them in the manner they prefer
              </li>
              <li>
                <i className="bi bi-check"></i> We will uphold the highest
                levels of integrity, confidentiality and transparency at all
                times
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
