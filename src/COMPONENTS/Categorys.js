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

  const [step, setStep] = useState(1);

  const goToNextStep = () => {
    setStep(step + 1);
  };

  const goToPreviousStep = () => {
    setStep(step - 1);
  };

  const initialValues = {
    categories_Name_Hindi: "",
    categories_Name_English: "",
    categories_Name_Url: "",
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
        "http://174.138.101.222:8080/masterCategories",
        values
      );
      alert(response.statusText);
      // navigate("/dashboard");
      setValues(initialValues);
    } catch (error) {
      alert(error.request.responseText);
    }
  };

  // Render different form screens based on the current step
  const renderFormScreen = () => {
    switch (step) {
      case 1:
        return (
          <div className="personalcontainer">
            <p className="personaltext">Category</p>
            <div className="formbox">
              <div className="formbox1">
                <TextField
                  id="standard-basic"
                  label="Category Name Hindi *"
                  name="categories_Name_Hindi"
                  value={values.categories_Name_Hindi}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />

                <TextField
                  id="standard-basic"
                  label="Category Name English  *"
                  name="categories_Name_English"
                  value={values.categories_Name_English}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  label="Category Name URL *"
                  name="categories_Name_Url"
                  value={values.categories_Name_Url}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />

                <button className=" btn  personalbtn">Submit</button>
              </div>
            </div>
          </div>
        );

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
              <span style={{ fontSize: "60%" }}>CATEGORY</span>
            </h1>
          </div>
          <div className="col-sm-12 buttongroup"></div>
          <form onSubmit={handleSubmit}>{renderFormScreen()}</form>
        </div>
      </div>
    </>
  );
};

export default Personalinfromation;
