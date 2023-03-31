import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import polylogo from "../../assets/images/polylogo.png";
import Ai from "../../assets/images/Ai.png";
import eye from "../../assets/images/eye.png";
import nlpbook from "../../assets/images/nlpbook.png";

import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";                                                     
import Col from "react-bootstrap/Col";

import "./Services.css";
function Services() {
  return (
    <>
      <section id="ai-box" className="pt-md-5 ">
        <h1 id="title-ai">AI Services</h1>
        <div className="container ">
          <div className="row gy-3 mb-6">
            <div className="col-md-4 ">
              <div class="card">
                <img src={Ai} class="card-img-top" alt="..." width="18" />
                <div className="card-body">
                  <h3 id="title-sub" className="card-title text-center">Computer Vision </h3>
                  <a
                    href="#"
                    className="card-text d-flex justify-content-center align-items-center"
                  >
                    learm more-->
                  </a>
                  <a
                    href="#"
                    className="card-text d-flex justify-content-center align-items-center mt-3"
                  >
                    learm more-->
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div class="card">
                <img src={eye} class="card-img-top" alt="..." width="18" />
                <div className="card-body">
                  <h3 id="title-sub" className="card-title text-center">
                    Natural language processing
                  </h3>
                  <a
                    href="#"
                    className="card-text d-flex justify-content-center align-items-center"
                  >
                    learm more-->
                  </a>
                  <a
                    href="#"
                    className="card-text d-flex justify-content-center align-items-center mt-3"
                  >
                    learm more-->
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div class="card">
                <img
                  src={nlpbook}
                  class="card-img-top"
                  alt="..."
                  width="18"
                />
                <div className="card-body">
                  <h3 id="title-sub" className="card-title text-center">Other AI Services</h3>
                  <a
                    href="#"
                    className="card-text d-flex justify-content-center align-items-center"
                  >
                    learm more-->
                  </a>
                  <a
                    href="#"
                    className="card-text d-flex justify-content-center align-items-center mt-3"
                  >
                    learm more-->
                  </a>
                  {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
