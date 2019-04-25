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
              <h2>About this site</h2>
              <p className="lead">
                This website allows general public to connect to NGO's.The web application grants the user the freedom to choose a time, date and place from when their donations will be picked up at their doorstep and transported to the NGO's. The application will also allow people to volunteer to transport the donations.
The web applications also serves as a networking place for the NGO’s as they can post about the work done or any such information that they would like to share on the site.

              </p>
               
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
                <ul>
                <li>Let people make donations from sitting comfortably at home effortlessly. </li>
                <li>
                    Let people volunteer for a good cause by helping the NGO's.
                </li>
              </ul>
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
                <h5>Atharva Sune</h5>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                <h5>Ameya Salankar</h5>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                <h5>Bipin Sai Narwa</h5>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                <h5>Amrit </h5>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                <h5>Uday Shahapur </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
