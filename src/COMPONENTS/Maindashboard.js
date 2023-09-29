import React from "react";
import "../CSS/Maindashboard.css";
import Navbar from "./Navbar";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import Progress from "../Images/Progressbar.png";
import AdMgmt from "../Images/AdMgmt.png";

const Maindashboard = () => {
  return (
    <>
      <div className="maindashboard">
        <div className="navbarbox">
          <Navbar />
        </div>
        <div className="dashbox ">
          <p className="dashboardtext">MAIN DASHBOARD</p>
          <div className="userstatuscontainer">
            <div className="userstatusbox3">
              <div className="iconscontainer">
                <WorkOutlineIcon
                  sx={{ fontSize: "6ch", m: 1.8 }}
                  color="info"
                />
              </div>

              <p className="userstatusboxcontant">
                No of users
                <br />
                <span>154.3k</span>
              </p>
            </div>
            <div className="userstatusbox3 ">
              <div className="iconscontainer">
                <WorkOutlineIcon
                  sx={{ fontSize: "6ch", m: 1.8 }}
                  color="info"
                />
              </div>
              <p className="userstatusboxcontant">
                News Paper agencies
                <br />
                <span>154.3k</span>
              </p>
            </div>
            <div className="userstatusbox3 ">
              <div className="iconscontainer">
                <WorkOutlineIcon
                  sx={{ fontSize: "6ch", m: 1.8 }}
                  color="info"
                />
              </div>
              <p className="userstatusboxcontant">
                No of Subadmin
                <br />
                <span>154.3k</span>
              </p>
            </div>
          </div>
          <div className="userstatuscontainer">
            <div className="userstatusbox6  ">
              {/* <div className="progress">
                <div
                  className="progress-bar progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  
                >
                  40%
                </div>
              </div> */}
              <img src={Progress} alt="" className="progress" />
            </div>
            <div className="userstatusbox4">
              <p className="E-PAPER-MODULE-text">E-PAPER MODULE</p>

              <li className="epapermoduleli">
                <span>News count</span>
                <span className="epapermodulespan">300+</span>
              </li>
              <li className="epapermoduleli">
                <span>Web</span> <span className="epapermodulespan">300+</span>
              </li>
              <li className="epapermoduleli">
                <span>Mobile</span>
                <span className="epapermodulespan">300+</span>
              </li>
            </div>
          </div>

          <div className="userstatuscontainer">
            <div className="userstatusbox5  ">
              <img
                className="toiimage"
                src="https://static.startuptalky.com/2022/02/Times-of-India-Campaigns-StartupTalky.jpg"
                alt="no-image"
              />
              <p className="toideccription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </p>
            </div>
            <div className="userstatusbox5 mb-5 ">
              <img
                className="toiimage"
                src="https://static.startuptalky.com/2022/02/Times-of-India-Campaigns-StartupTalky.jpg"
                alt="no-image"
              />
              <p className="toideccription">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              </p>
            </div>
            <div className="userstatusbox54  ">
              <img className="adimage" src={AdMgmt} alt="no-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maindashboard;
