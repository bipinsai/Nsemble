import React from "react";
import Navbar from "../modules/Navbar";
import "./pageStyles/Landing.css";

function Landing() {
  return (
    <div>
      <Navbar />
      <header className="video-header">
        <div className="overlay" />
        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source
            src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
            type="video/mp4"
          />
        </video>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center" style={{paddingTop:'-10%'}}>
            <div className="w-100 text-white" style={{height:'60%'}}>
              <h1 className="display-3" >Nsemble</h1>
              <div className="container" style={{display:'flex',width:'60%',marginTop: '15%',justifyContent:'space-around'}}>
                <a href="/ngo/register"><button className="btn btn-primary btn-lg" style={{width:'150%'}}>NGO</button></a>
                <a href="/user/register"><button className="btn btn-success btn-lg" style={{width:'125%'}}>Donator</button></a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>About this page</h2>
              <p className="lead">
                This is a great place to talk about your webpage. This template
                is purposefully unstyled so you can use it as a boilerplate or
                starting point for you own landing page designs! This template
                features:
              </p>
              <ul>
                <li>Clickable nav links that smooth scroll to page sections</li>
                <li>
                  Responsive behavior when clicking nav links perfect for a one
                  page website
                </li>
                <li>
                  Bootstrap's scrollspy feature which highlights which section
                  of the page you're on in the navbar
                </li>
                <li>
                  Minimal custom CSS so you are free to explore your own unique
                  design options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Services we offer</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                optio velit inventore, expedita quo laboriosam possimus ea
                consequatur vitae, doloribus consequuntur ex. Nemo assumenda
                laborum vel, labore ut velit dignissimos.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  class="img-fluid rounded-circle mb-3"
                  src="img/testimonials-1.jpg"
                  alt=""
                />
                <h5>Margaret E.</h5>
                <p class="font-weight-light mb-0">
                  "This is fantastic! Thanks so much guys!"
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  class="img-fluid rounded-circle mb-3"
                  src="img/testimonials-2.jpg"
                  alt=""
                />
                <h5>Fred S.</h5>
                <p class="font-weight-light mb-0">
                  "Bootstrap is amazing. I've been using it to create lots of
                  super nice landing pages."
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                <img
                  class="img-fluid rounded-circle mb-3"
                  src="img/testimonials-3.jpg"
                  alt=""
                />
                <h5>Sarah W.</h5>
                <p class="font-weight-light mb-0">
                  "Thanks so much for making these free resources available to
                  us!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
