import { urlSafeDecode } from "@aws-amplify/core";
import React from "react";
import { Link } from "react-router-dom";
import app1 from '../../assets/app1.jpeg'
import app2 from "../../assets/app2.jpeg";
import app3 from "../../assets/app3.jpeg";

function Port() {
  return (
    <div className="home_port">
      <div className="home_port-left">
        <div className="home_port-header">our portfolio</div>
        <div className="home_port-text">
          Our mobile app development strength and breadth of technology
          expertise has allowed us to deliver{" "}
          <span>game-changing experiences for our clients.</span>
        </div>
        <Link to="/portfolio" className="home_port-btn">
          View Entire Portfolio
        </Link>
      </div>
      <div className="home_port-right">
        <div
          className="home_port-box"
          style={{ backgroundImage: `url(${app1})` }}
        ></div>
        <div
          className="home_port-box"
          style={{ backgroundImage: `url(${app2})` }}
        ></div>
        <div
          className="home_port-box"
          style={{ backgroundImage: `url(${app3})` }}
        ></div>
   
       
      </div>
    </div>
  );
}

export default Port;
