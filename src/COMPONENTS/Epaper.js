import React, { useEffect, useState } from "react";
import "../CSS/Epaper.scss";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Backdrop, CircularProgress } from "@mui/material";

const Epaper = () => {
  const navigate = useNavigate();

  const [age, setAge] = useState();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [pdf, setPdf] = useState();
  const [size, setSize] = useState({});

  const [loader, setLoader] = useState(false);
  const superAdminId = localStorage.getItem("superAdminId");

  /////get api categorie///

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://174.138.101.222:8080/getmastercategories").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);
  console.log(data);

  /////



  const fetchPageSize = async (e) => {
    setLoader(true);
    let formdata = new FormData();
    formdata.append("pdf", pdf);
    try {
      const response = await axios.post(
        "http://174.138.101.222:5000/api/coordinate",
        formdata,
        {
          headers: {
            "Content-type": "multipart/form-date",
          },
        }
      );

      response.data.coordinates.forEach((item, index) => {
        setSize((prevSize) => ({
          ...prevSize,
          [index]: item[1],
        }));
      });
      setLoader(false);
      // navigate("/EpaperPreview", {
      //   state: {
      //     pdf: pdf,
      //     sizes: size,
      //   },
      // });
    } catch (error) {
      console.log(error);
      setLoader(false);
      alert("Error Occured");
    }
  };
  useEffect(() => {
    if (Object.keys(size).length > 0) {
      navigate("/EpaperPreview", {
        state: {
          pdf: pdf,
          sizes: size,
        },
      });
    }
  }, [size, navigate, pdf]);

  const [singlePdf, setSinglePdf] = useState("Upload PDF");
  const [multiPdf, setMultiPdf] = useState("Upload PDF");

  return (
    <>
      <div className="Epapermaincontainer">
        <div className="epaperbox1">
          <Navbar />
        </div>

        <div className="epaperbox2">
          <div className="epaperheader">
            <p className="epaperheading">
              {" "}
              <ArrowBackIcon onClick={() => navigate(-1)} className="pointer" />
              E-PAPER
            </p>
          </div>
          <Box
            component="div"
            sx={{
              mt: 15,
            }}
          >
            <Box
              component="grid"
              sx={{
                "& > :not(style)": { m: 3, width: "40ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" label="NAME" variant="outlined" />
              <TextField id="outlined-basic" label="STATE" variant="outlined" />
              <TextField id="outlined-basic" label="CITY" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="PROVINCE"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="ADD TAG"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="DATE OF PUBLICATION"
                variant="outlined"
              />

              <FormControl>
                <InputLabel id="demo-simple-select-helper-label">
                  CATEGORY
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="CATEGORY"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {
                    data?.data?.map((item) => (
                    <MenuItem
                      key={item._id}
                      value={item.categories_Name_English}
                    >
                      {item.categories_Name_English}
                    </MenuItem>
                  ))
                  }
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="demo-simple-select-helper-label">
                  AGENCY NAME
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="AGENCY NAME"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="demo-simple-select-helper-label">
                  NEWS PAPER
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={age}
                  label="NEWS PAPER"
                  onChange={handleChange}
                >
                  <MenuItem value={""}>None</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          {
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={loader}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          }
          <div className="bottom">
            <div className="inputpdf">
              <label htmlFor="inputSinglePdf" className="inputTaglabel">
                {singlePdf} <PictureAsPdfIcon className="pdficon" />
                <p className="pdftext">SINGLE PAGE PDF</p>
              </label>
              <input
                type="file"
                className="inputTag"
                id="inputSinglePdf"
                onChange={(e) => {
                  setPdf(e.target.files[0]);
                  setSinglePdf(e.target.files[0].name);
                  setSize({});
                }}
              />
            </div>

            <div className="inputpdf">
              <label htmlFor="inputMultiPdf" className="inputTaglabel">
                {multiPdf} <PictureAsPdfIcon className="pdficon" />
                <p className="pdftext">MULTIPLE PAGE PDF</p>
              </label>

              <input
                type="file"
                className="inputTag"
                id="inputMultiPdf"
                onChange={(e) => {
                  setPdf(e.target.files[0]);
                  setMultiPdf(e.target.files[0].name);
                  setSize({});
                }}
              />
            </div>
          </div>

          <button
            className="btn btn-primary btn-lg epaperbtn"
            onClick={() => fetchPageSize()}
          >
            Preview
          </button>
        </div>
      </div>
    </>
  );
};

export default Epaper;
