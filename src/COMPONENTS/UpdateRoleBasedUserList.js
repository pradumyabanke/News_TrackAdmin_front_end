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
  console.log(location.state,'aaaa');
  const [values, setValues] = useState(location.state);
  console.log(values)
  const superAdminToken = localStorage.getItem("superAdminToken");
  const [first_name, setfirst_name] = useState("");
  const [middle_name, setmiddle_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [department, setdepartment] = useState("");
  const [user_role, setuser_role] = useState("");
  const [email_1, setemail_1] = useState("");
  const [mobile_1, setmobile_1] = useState("");
  const [address, setaddress] = useState("");

  const getvalue = () => {
    setfirst_name(values.first_name);
    setmiddle_name(values.middle_name);
    setlast_name(values.last_name);
    setdepartment(values.department);
    setuser_role(values.user_role);
    setemail_1(values.email_1);
    setmobile_1(values.mobile_1);
    setaddress(values.address);
  };
  useEffect(() => {
    getvalue();
  }, []);

  const handleSubmit = async () => {
    console.log(values._id)
    console.log(values.token)
    let item = {
        first_name,
        middle_name,
        last_name,
        department,
        user_role,
        email_1,
        mobile_1,
        address,
    };
    console.log("handleSubmit clicked", item);
    const apiEndpoint =
    // "http://174.138.101.222:8080/" + values._id + "/updateUserRolelist";
    "http://174.138.101.222:8080/updateUserRolelist/" + values._id ;
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept:'application/json',
        Authorization :`Bearer ${values.token}`,
      },
      body: JSON.stringify(item),
    };

    fetch(apiEndpoint, requestOptions)
      .then((response) => {
        if (response.status === 200) {
          return response.json().then((data) => {
            alert("Update");
            navigate("/rolebaseduserlist");
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
          <span>Update Role Based User List</span>
        </h1>
        <div className="personalcontainer">
          {/* <p className="personaltext">Category</p> */}
          <div className="formbox">
            <div className="formbox1">
              <TextField
                id="standard-basic"
                label="First Name *"
                name="first_name"
                variant="standard"
                className="personalinput"
                value={first_name}
                onChange={(e) => setfirst_name(e.target.value)}
              />

              <TextField
                id="standard-basic"
                label="Middle Name *"
                name="middle_name"
                variant="standard"
                className="personalinput"
                value={middle_name}
                onChange={(e) => setmiddle_name(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Last Name *"
                name="last_name"
                variant="standard"
                className="personalinput"
                value={last_name}
                onChange={(e) => setlast_name(e.target.value)}
              />

              <TextField
                id="standard-basic"
                label="Department *"
                name="department"
                variant="standard"
                className="personalinput"
                value={department}
                onChange={(e) => setdepartment(e.target.value)}
              />

              <TextField
                id="standard-basic"
                label="User Role *"
                name="user_role"
                variant="standard"
                className="personalinput"
                value={user_role}
                onChange={(e) => setuser_role(e.target.value)}
              />

              <TextField
                id="standard-basic"
                label="Email *"
                name="email_1"
                variant="standard"
                className="personalinput"
                value={email_1}
                onChange={(e) => setemail_1(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Mobile *"
                name="mobile_1"
                variant="standard"
                className="personalinput"
                value={mobile_1}
                onChange={(e) => setmobile_1(e.target.value)}
              />

              <TextField
                id="standard-basic"
                label="Residential Address *"
                name="address"
                variant="standard"
                className="personalinput"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
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
