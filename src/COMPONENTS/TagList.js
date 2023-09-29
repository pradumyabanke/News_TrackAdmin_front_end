import React, { useEffect, useState } from "react";
import "../CSS/TagList.scss";
import Navbar from "./Navbar";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
// import { useTable, usePagination } from 'react-table';     


const NewsApproval = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  ///////////////////////// Get API to get tag ///////////////////////////

  const [data, setData] = useState();
  const getData = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/getmastertag`
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
      <div>
        <div className="parentContainertableu">
          <h1>
            <span>
              <HiOutlineArrowSmallLeft
                onClick={back}
                className="pointertable"
              />
            </span>
            <span>Tag List</span>
          </h1>
        </div>

        <div className="parentContainertable">
          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Tag List</th>
                <th>Update</th>
              </tr>
            </thead>

            <tbody>
              {data &&
                data.map((item, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.tag_name}</td>
                      <td>
                        <div>
                          <span
                            className="pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate("/updatetaglist", { state: item });
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

            
          </table>

        


        </div>


        <div className="pagination">
          <button
            // onClick={() => handlePageChange(currentPage - 1)}
            // disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            // onClick={() => handlePageChange(currentPage + 1)}
            // disabled={endIndex >= data.length}
          >
            Next
          </button>
        </div>



      </div>
    </>
  );
};

export default NewsApproval;
