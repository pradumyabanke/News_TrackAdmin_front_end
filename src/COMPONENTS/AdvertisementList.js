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
        `http://174.138.101.222:8080/64b68dc78baee257c7376185/listadvertisements`
      );
      console.log(response.data.data);
      setData(response.data.data);
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
          <span>Advertisement List</span>
        </h1>

        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Vendor Name</th>
              <th>Template</th>
              <th>Page Location</th>
              <th>Images</th>
              <th>Edit</th>
              {/* <th></th> */}
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                   <td>{}</td>
                   <td>{}</td>
                   <td>{item.page_location}</td>
                   <td>{item.image}</td>

                    <td>
                       
                    
                        <div>
                          <span
                            className="pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate("/updateCat", { state: item });
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
