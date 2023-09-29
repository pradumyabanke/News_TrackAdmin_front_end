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

  const [publisher_name, setpublisher_name] = useState("");
  const [email, setemail] = useState("");
  const [tech_name, settech_name] = useState("");
  const [finance_name, setfinance_name] = useState("");
  const [regd_address, setregd_address] = useState("");
  const [comm_address, setcomm_address] = useState("");
  const [domain_name, setdomain_name] = useState("");
  const [site_display_contact, setsite_display_contact] = useState("");

  const getvalue = () => {
    setpublisher_name(values.publisher_name);
    setemail(values.email);
    settech_name(values.tech_name);
    setfinance_name(values.finance_name);
    setregd_address(values.regd_address);
    setcomm_address(values.comm_address);
    setdomain_name(values.domain_name);
    setsite_display_contact(values.site_display_contact);
  };
  useEffect(() => {
    getvalue();
  }, []);

  const handleSubmit = async () => {
    let item = {
      publisher_name,
      email,
      tech_name,
      finance_name,
      regd_address,
      comm_address,
      domain_name,
      site_display_contact,
    };
    console.log("handleSubmit clicked", item);
    const apiEndpoint =
      "http://174.138.101.222:8080/" + values._id + "/update_publication";
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
            navigate("/vendorregistrationlist");
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
          <span>Update Vendor Registration List</span>
        </h1>
        <div className="personalcontainer">
          {/* <p className="personaltext">Category</p> */}
          <div className="formbox">
            <div className="formbox1">
              <TextField
                id="standard-basic"
                label="Publisher Name *"
                name="publisher_name"
                variant="standard"
                className="personalinput"
                value={publisher_name}
                onChange={(e) => setpublisher_name(e.target.value)}
              />

              <TextField
                id="standard-basic"
                label="Email ID *"
                name="email"
                variant="standard"
                className="personalinput"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Tech Person Contact Name *"
                name="tech_name"
                variant="standard"
                className="personalinput"
                value={tech_name}
                onChange={(e) => settech_name(e.target.value)}
              />

              <TextField
                id="standard-basic"
                label="Finance Contact Name *"
                name="finance_name"
                variant="standard"
                className="personalinput"
                value={finance_name}
                onChange={(e) => setfinance_name(e.target.value)}
              />

              <TextField
                id="standard-basic"
                label="Registered Address *"
                name="regd_address"
                variant="standard"
                className="personalinput"
                value={regd_address}
                onChange={(e) => regd_address(e.target.value)}
              />

              <TextField
                id="standard-basic"
                label="Communication Address *"
                name="comm_address"
                variant="standard"
                className="personalinput"
                value={comm_address}
                onChange={(e) => setcomm_address(e.target.value)}
              />
              <TextField
                id="standard-basic"
                label="Domain Name *"
                name="domain_name"
                variant="standard"
                className="personalinput"
                value={domain_name}
                onChange={(e) => setdomain_name(e.target.value)}
              />

              <TextField
                id="standard-basic"
                label="Site Display Contact *"
                name="site_display_contact"
                variant="standard"
                className="personalinput"
                value={site_display_contact}
                onChange={(e) => setsite_display_contact(e.target.value)}
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
