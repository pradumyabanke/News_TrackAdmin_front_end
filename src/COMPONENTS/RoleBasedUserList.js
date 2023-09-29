import React, { useEffect, useState } from "react";
import "../CSS/News-Approval.scss";
import Navbar from "./Navbar";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

const NewsApproval = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  ///////////////////////// Get API to get Unfiltered News ///////////////////////////

  const [data, setData] = useState();
  const getData = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/UserRoleList`
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  ///////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <Navbar />
      <div className="parentContainer">
        <h1>
          <span>
            <HiOutlineArrowSmallLeft onClick={back} className="pointer" />
          </span>
          <span>Role Based User List</span>
        </h1>

        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>First Name</th>
              <th>Middle Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>User Role</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Residential Address</th>
              <th>Edit</th>
              {/* <th>Delete</th> */}
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.first_name}</td>
                    <td>{item.middle_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.department}</td>
                    <td>{item.user_role}</td>
                    <td>{item.email_1}</td>
                    <td>{item.mobile_1}</td>
                    <td>{item.address}</td>

                    <td>
                      <div>
                        <span
                          className="pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate("/updaterolebaseduserlist", { state: item });
                          }}
                        >
                          <FaEdit />
                        </span>
                      </div>
                    </td>

                  </tr>
                );
              })}
          </tbody>

          <tfoot></tfoot>
        </table>
      </div>
    </>
  );
};

export default NewsApproval;
