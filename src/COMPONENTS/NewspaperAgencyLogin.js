import React, { useState } from "react";
import "../CSS/NewspaperAgencyLogin.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const NewspaperAgencyLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://174.138.101.222:8080/newsPaperAgencyLogin",
        {
          email: email,
          password: password,
        }
      );
      alert(response.data.msg);
      localStorage.setItem("newspaperAgencyAdminId", response.data.data._id);
      localStorage.setItem(
        "newspaperAgencyAdminToken",
        response.data.data.token
      );

      navigate("/dashboard");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(JSON.parse(error.request.response).msg);
    }
  };

  return (
    <>
      <div className="admin-pagecontainer">
        <div className="adminimagediv">
          <img className="adminpageimage" src="images\image1.avif"></img>
        </div>

        <div className="adminformdiv">
          <div>
            {" "}
            <p className="adminlogin2">Newspaper Agency Login</p>
            <div className="hrrow">
              <hr className="hr1" />
              <p className="or"> or </p>
              <hr className="hr1" />
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label className="adminlabel2">Email *</label>
                <input
                  onChange={handleEmailInput}
                  value={email}
                  type="email"
                  name="mail"
                  placeholder="ram123@gmail.com"
                  className="form-control admininput"
                />
              </div>
              <div className="form-group">
                <label className="adminlabel2">Password *</label>
                <input
                  onChange={handlePasswordInput}
                  value={password}
                  type="password"
                  name="mail"
                  placeholder="min 8 characters"
                  className="form-control admininput"
                />
              </div>
              <div className="form-group">
                <button className="form-control adminloginbtn2">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewspaperAgencyLogin;
