import React, { useEffect, useState } from "react";
import "../CSS/News-Approval.scss";
import Navbar from "./Navbar";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { Button } from "react-bootstrap";

const NewsApproval = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  const [status, setStatus] = React.useState("");

  ///////////////////////// Get API to get Unfiltered News ///////////////////////////

  const [data, setData] = useState();
  const getData = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/VendorList`
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
          <span>Vendor Registration List</span>
        </h1>

        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Publisher Name</th>
              <th>Email Id</th>
              <th>Tech Person Contact Name</th>
              <th>Finance Contact Name</th>
              <th>Registered Address</th>
              <th>Communication Address</th>
              <th>Domain Name</th>
              <th>Site Display Contact</th>
              <th>Edit</th>
              {/* <th>Hide/Show</th> */}
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.publisher_name}</td>
                    <td>{item.email}</td>
                    <td>{item.tech_name}</td>
                    <td>{item.finance_name}</td>
                    <td>{item.regd_address}</td>
                    <td>{item.comm_address}</td>
                    <td>{item.domain_name}</td>
                    <td>{item.site_display_contact}</td>

                    <td>
                      <div>
                        <span
                          className="pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate("/updatevendorlist", { state: item });
                          }}
                        >
                          <FaEdit />
                        </span>
                      </div>
                    </td>
                    {/* <td>
                
              </td> */}
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
