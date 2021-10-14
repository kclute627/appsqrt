import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Port from "./Port";
import Lottie from "lottie-react";
import people from "../../assets/bg.png";
import appAnimation from "../../assets/lottie/70537-app-development-design-isometric-concept (1).json";

function Home() {
 
  const backgroundColor = (
    <div className="home_container">
      <div className="home_1">
        <div className="home_2"></div>
        <div className="home_3"></div>
        <div className="home_4"></div>
        <div className="home_5"></div>
      </div>
    </div>
  );

  return (
    <div className="home">
      <div className="home_top">
        <div className="home_left">
          <div className="home_header">Creating Mobile Apps</div>
          <div className="home_header_1">For Your Business</div>
          <div className="home_header_2">
            Our developers will build a custom app suitable for Andriod and
            Apple devices for your company using React Native
          </div>
          <Link className="home_btn" to="/contact">
            Book A Free Consultation
          </Link>
        </div>
        <div className="home_right">
          <Lottie animationData={appAnimation} autoPlay={true} />
        </div>
        {backgroundColor}
      </div>

      <div className="home_middle">
        <div className="home_middle-right">
          <img className="home_middle-image" src={people} alt="" />
        </div>
        <div className="home_middle-left">
          <div className="home_middle-head">Hire Us As Your</div>
          <div className="home_middle-subhead">App Development Agency</div>
          <div className="home_middle-text">
            With our team of highly experienced developers, we build mobile apps
            for small businesses with a speciality in businesses that use
            SQUARE.com as their payment processor.
          </div>
          <Link to="/about" className="home_middle-btn">
            More About Us
          </Link>
        </div>
      </div>
      <Port/>
      
    </div>
  );
}

export default Home;
