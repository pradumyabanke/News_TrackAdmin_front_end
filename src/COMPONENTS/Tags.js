import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../CSS/Personalinformation.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Navbar from "./Navbar";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";

const Personalinfromation = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };


  const [step, setStep] = useState(2);

  const goToNextStep = () => {
    setStep(step + 1);
  };

  const goToPreviousStep = () => {
    setStep(step - 1);
  };

  const initialValues = {
    tag_name:"",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://174.138.101.222:8080/mastertag",
        values
      );
      alert(response.statusText,);
      setValues(initialValues)
      
      // navigate("/dashboard");
      // setEmail("");
      // setPassword("");
    } catch (error) {
      alert(error.request.responseText);
    }
  };

  console.log(values);

  // Render different form screens based on the current step
  const renderFormScreen = () => {
    switch (step) {
      case 2:
        return (
          <div className="personalcontainer">
            <p className="personaltext">Tags</p>
            <div className="formbox">
              <div className="formbox1">
                <TextField
                  id="standard-basic"
                  label="Tag Name *"
                  name="tag_name"
                  value={values.tag_name}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                  <button className="btn personalbtn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="rolebasedcontainer">
        <div className="rolebasedbox1">
          <Navbar />
        </div>
        <div className="rolebasedbox2">
          <div className="rolebasedheader">
           

            <h1>
              <span>
                <HiOutlineArrowSmallLeft onClick={back} />
              </span>
              <span style={{ fontSize: "60%" }}>TAGS</span>
            </h1>



          </div>

          <form onSubmit={handleSubmit}>{renderFormScreen()}</form>
        </div>
      </div>
    </>
  );
};

export default Personalinfromation;
