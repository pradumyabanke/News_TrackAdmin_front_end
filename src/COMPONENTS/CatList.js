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
        `http://174.138.101.222:8080/getmastercategories`
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


// function deleteUser(id)
// {
//   alert(id)
// }



  return (
    <>
      <Navbar />
      <div className="parentContainer">
        <h1>
          <span>
            <HiOutlineArrowSmallLeft onClick={back} className="pointer" />
          </span>
          <span>Category List</span>
        </h1>

        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Category Name Hindi</th>
              <th>Category Name English</th>
              <th>Category Name URL</th>
              <th>Update</th>
              {/* <th>Delete</th> */}

            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.categories_Name_Hindi}</td>
                    <td>{item.categories_Name_English}</td>
                    <td>{item.categories_Name_Url}</td>

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

{/* <td><button onClick={()=> deleteUser(item._id)}>Delete</button></td> */}




                    
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
