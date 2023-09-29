import "../CSS/NewsAgencyNewsApproval.scss";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { Button, ButtonGroup } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import axios from "axios";

const NewsAgencyNewsApproval = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    alert("edit clicked");
  };

  const newspaperAgencyAdminId = localStorage.getItem("newspaperAgencyAdminId");

  /////////////////////////// Get API To Get Approved News ////////////////////////////////
  const [approvedNews, setApprovedNews] = useState(0);
  const getApprovedNews = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/${newspaperAgencyAdminId}/getApprovalNewsPaperAgency`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "newspaperAgencyAdminToken"
            )}`,
          },
        }
      );
      console.log(response, "getapprovednews");
      setApprovedNews(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////

  /////////////////////////// Get API To Get Rejected News ////////////////////////////////
  const [rejectedNews, setRejectedNews] = useState(0);
  const getRejectedNews = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/${newspaperAgencyAdminId}/getRejectedNewsPaperAgency`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "newspaperAgencyAdminToken"
            )}`,
          },
        }
      );
      console.log(response, "getrejectednews");
      setRejectedNews(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////

  ///////////////////////// Get API to get Unfiltered News ///////////////////////////

  const [data, setData] = useState();

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/${newspaperAgencyAdminId}/getPostNewsForNewsAgency`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "newspaperAgencyAdminToken"
            )}`,
          },
        }
      );
      console.log(response.data.data, "Get Unfiltered News");
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  ///////////////////////////////////////////////////////////////////////////////////

  /////////////////////////// Put API To Approve News ////////////////////////////////
  const handleApprove = async (event, newsId) => {
    event.stopPropagation();
    try {
      const response = await axios.put(
        `http://174.138.101.222:8080/${newspaperAgencyAdminId}/ApprovalupdateNews`,
        {
          _id: newsId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "newspaperAgencyAdminToken"
            )}`,
          },
        }
      );
      console.log(response, "Approved News Response");
      getData();
      getApprovedNews();
    } catch (error) {
      console.log(error);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////

  //////////////////////////  Put API To Reject News ////////////////////////////////

  const handleReject = async (event, newsId) => {
    event.stopPropagation();
    console.log(newsId);

    try {
      const response = await axios.put(
        `http://174.138.101.222:8080/${newspaperAgencyAdminId}/RejectUpdateNews`,
        {
          _id: newsId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(
              "newspaperAgencyAdminToken"
            )}`,
          },
        }
      );
      console.log(response, "News Rejected");
      getData();
      getRejectedNews();
    } catch (error) {
      console.log(error);
    }
  };

  ///////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    getData();
    getApprovedNews();
    getRejectedNews();
  }, []);

  ////////////////////////////// To Set State Of The Table //////////////////////////

  const [table, setTable] = useState("Pending Approval");

  ///////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <Navbar />
      <div className="parentContainer">
        <h1 className="bgred">
          <span>
            <HiOutlineArrowSmallLeft onClick={back} className="pointer" />
          </span>
          <span>News Approval</span>
        </h1>
        <ButtonGroup className="me-2 groupOfButtons" aria-label="First group">
          {" "}
          <Button>
            Draft <div>0</div>
          </Button>{" "}
          <Button onClick={() => setTable("Pending Approval")}>
            Pending Approval <div>{data?.data.data.length}</div>
          </Button>{" "}
          <Button onClick={() => setTable("Approved")}>
            Approved / Published <div>{approvedNews?.length}</div>
          </Button>
          <Button>
            Needs Review <div>0</div>
          </Button>{" "}
          <Button onClick={() => setTable("Rejected")}>
            Rejected <div>{rejectedNews?.length}</div>
          </Button>{" "}
          <Button>
            Retract <div>0</div>
          </Button>
          <Button>
            Scheduled <div>0</div>
          </Button>
        </ButtonGroup>

        {table === "Pending Approval" && (
          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Post Date</th>
                <th>News Date</th>
                <th>News Heading</th>
                <th>Entry By</th>
                <th>Status</th>
                <th>Link</th>
                <th>Select</th>
                <th>Translation</th>
                <th>Operation</th>
              </tr>
            </thead>

            {data?.data?.data?.map((item, index) => {
              return (
                <tbody key={item?._id}>
                  <tr
                    onClick={() => navigate("/viewNews", { state: { item } })}
                    className="pointer "
                  >
                    <td>{index + 1}</td>
                    <td>{item.createdAt}</td>
                    <td>2023-05-14 10:13:35</td>
                    <td>
                      {item.title}
                      {/* dangerouslySetInnerHTML={{ __html: item.title }} */}
                    </td>
                    <td>{item.username}</td>
                    <td>Updated</td>
                    <td>No</td>
                    <td>
                      <select name="" id="">
                        <option value="">Option1</option>
                        <option value="">Option2</option>
                      </select>
                    </td>
                    <td>
                      <select name="" id="">
                        <option value="">Option1</option>
                        <option value="">Option2</option>
                      </select>
                    </td>
                    <td>
                      <span className="pointer" onClick={handleEdit}>
                        <FaEdit />
                      </span>
                      <span
                        className="pointer"
                        onClick={(event) => handleReject(event, item._id)}
                      >
                        <AiTwotoneDelete className="delete" />
                      </span>
                      <span
                        className="pointer"
                        onClick={(event) => handleApprove(event, item._id)}
                      >
                        <TiTick />
                      </span>
                    </td>
                  </tr>
                </tbody>
              );
            })}

            <tfoot></tfoot>
          </table>
        )}
        {table === "Approved" && (
          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Post Date</th>
                <th>News Date</th>
                <th>News Heading</th>
                <th>Entry By</th>
                <th>Status</th>
                <th>Link</th>
                <th>Select</th>
                <th>Translation</th>
                {/* <th>Operation</th> */}
              </tr>
            </thead>

            {approvedNews?.map((item, index) => {
              return (
                <tbody key={item?._id}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.createdAt}</td>
                    <td>2023-05-14 10:13:35</td>
                    <td
                      onClick={() => navigate("/viewNews", { state: { item } })}
                      className="pointer"
                    >
                      {item.title}
                    </td>
                    <td>{item.username}</td>
                    <td>Updated</td>
                    <td>No</td>
                    <td>
                      <select name="" id="">
                        <option value="">Option1</option>
                        <option value="">Option2</option>
                      </select>
                    </td>
                    <td>
                      <select name="" id="">
                        <option value="">Option1</option>
                        <option value="">Option2</option>
                      </select>
                    </td>
                    {/* <td>
                      <span className="pointer">
                        <FaEdit />
                      </span>
                      <span
                        className="pointer"
                        onClick={() => handleReject(item.userId, item._id)}
                      >
                        <AiTwotoneDelete className="delete" />
                      </span>
                      <span
                        className="pointer"
                        onClick={() => handleApprove(item.userId, item._id)}
                      >
                        <TiTick />
                      </span>
                    </td> */}
                  </tr>
                </tbody>
              );
            })}

            <tfoot></tfoot>
          </table>
        )}
        {table === "Rejected" && (
          <table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Post Date</th>
                <th>News Date</th>
                <th>News Heading</th>
                <th>Entry By</th>
                <th>Status</th>
                <th>Link</th>
                <th>Select</th>
                <th>Translation</th>
                {/* <th>Operation</th> */}
              </tr>
            </thead>

            {rejectedNews?.map((item, index) => {
              return (
                <tbody key={item?._id}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.createdAt}</td>
                    <td>2023-05-14 10:13:35</td>
                    <td
                      onClick={() => navigate("/viewNews", { state: { item } })}
                      className="pointer "
                    >
                      {item.title}
                    </td>
                    <td>{item.username}</td>
                    <td>Updated</td>
                    <td>No</td>
                    <td>
                      <select name="" id="">
                        <option value="">Option1</option>
                        <option value="">Option2</option>
                      </select>
                    </td>
                    <td>
                      <select name="" id="">
                        <option value="">Option1</option>
                        <option value="">Option2</option>
                      </select>
                    </td>
                    {/* <td>
                      <span className="pointer">
                        <FaEdit />
                      </span>
                      <span
                        className="pointer"
                        onClick={() => handleReject(item.userId, item._id)}
                      >
                        <AiTwotoneDelete className="delete" />
                      </span>
                      <span
                        className="pointer"
                        onClick={() => handleApprove(item.userId, item._id)}
                      >
                        <TiTick />
                      </span>
                    </td> */}
                  </tr>
                </tbody>
              );
            })}

            <tfoot></tfoot>
          </table>
        )}
      </div>
    </>
  );
};

export default NewsAgencyNewsApproval;
