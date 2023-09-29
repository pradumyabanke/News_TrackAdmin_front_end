import React from "react";
import Navbar from "./Navbar";
import TextField from "@mui/material/TextField";
import "../CSS/UC.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";

function UpdateCat() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const [values, setValues] = useState(location.state);

  const [categories_Name_English, setcategories_Name_English] = useState("");
  const [categories_Name_Hindi, setcategories_Name_Hindi] = useState("");
  const [categories_Name_Url, setcategories_Name_Url] = useState("");

  const getvalue = () => {
    setcategories_Name_English(values.categories_Name_English);
    setcategories_Name_Hindi(values.categories_Name_Hindi);
    setcategories_Name_Url(values.categories_Name_Url);
  };
  useEffect(() => {
    getvalue();
  }, []);

  const handleSubmit = async () => {
    let item = {
      categories_Name_English,
      categories_Name_Hindi,
      categories_Name_Url,
    };
    console.log("handleSubmit clicked", item);
    const apiEndpoint =
      "http://174.138.101.222:8080/" + values._id + "/updateCategories";
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    };

    fetch(apiEndpoint, requestOptions)
      .then((response) => {
        if (response.status === 200) {
          return response.json().then((data) => {
            alert("Update");
            navigate("/categorylist");
          });
        } else if (response.status === 400) {
          return response.json().then((data) => {
            alert("data not added");
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="parentContainer">
        <h1>
          <span className="pointer" onClick={() => navigate(-1)}>
            <HiOutlineArrowSmallLeft />
          </span>
          <span>Update Category</span>
        </h1>
        <div className="personalcontainer">
          {/* <p className="personaltext">Category</p> */}
          <div className="formbox">
            <div className="formbox1">
              <TextField
                id="standard-basic"
                label="Category Name Hindi *"
                name="categories_Name_Hindi"
                variant="standard"
                className="personalinput"
                value={categories_Name_English}
                onChange={(e) => setcategories_Name_English(e.target.value)}
              />

              <TextField
                id="standard-basic"
                label="Category Name English  *"
                name="categories_Name_English"
                variant="standard"
                className="personalinput"
                value={categories_Name_Hindi}
                onChange={(e) => setcategories_Name_Hindi(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Category Name URL *"
                name="categories_Name_Url"
                variant="standard"
                className="personalinput"
                value={categories_Name_Url}
                onChange={(e) => setcategories_Name_Url(e.target.value)}
              />

              <button className=" btn  personalbtn" onClick={handleSubmit}>
                Update{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateCat;
