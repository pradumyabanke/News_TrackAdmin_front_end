// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";

// import {
//   Button,
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   Radio,
//   RadioGroup,
//   TextField,
// } from "@mui/material";

// const CreateAd = () => {
//   let initialValue = {
//     page_name: '',
//     page_location:'',
//     desktop:'',
//     start_date:'',
//     end_date:'',
//     image:'',
//     script:'',
//     text:'',
//   };
//   const [values, setValues] = useState(initialValue);
//   console.log(values);

//   const handleInputChange = (e) => {
//     const { name } = e.target;
//     console.log(e.target);
//   };
//   return (
//     <>
//       <div className="maindashboard">
//         <div className="navbarbox">
//           <Navbar />
//         </div>
//         <div className="dashbox d-flex flex-column ">
//           <p className="dashboardtext text-uppercase">Create Advertisement</p>
//           <h4 className="mx-2 mb-3" style={{ fontFamily: "initial" }}>
//             {" "}
//             Select Type of Ad
//           </h4>
//           <br />
//           <TextField
//             sx={{ width: "400px" }}
//             className="mx-2"
//             label="Page Name"
//             name="page_name"
//             value={values.page_name}
//             onChange={handleInputChange}
//             type="number"
//           ></TextField>
//           <br />
//           <TextField
//             sx={{ width: "400px" }}
//             className="mx-2"
//             label="Page Location"
//             name="page_location"
//             value={values.page_location}
//             onChange={handleInputChange}
            
//             variant="outlined"
//           ></TextField>
//           <br />
//           <FormControl
//             sx={{ width: "400px" }}
//             className="mx-2"
//             placeholder="sas"
//           >
//             <InputLabel>Desktop</InputLabel>
//             <Select
//               label="PLATFORM"
//               name="desktop"
//               value={values.desktop}
//               onChange={handleInputChange}
//             >
//               <MenuItem value={"Breaking"}>Desktop</MenuItem>
//               <MenuItem value={"Imported"}>Mobile</MenuItem>
//               <MenuItem value={"Normal"}>Both</MenuItem>
//             </Select>
//           </FormControl>
//           <br />
//           <h6 className="mx-2 mb-3" style={{ fontFamily: "initial" }}>
//             {" "}
//             Start Date:-
//           </h6>{" "}
//           <TextField
//             sx={{ width: "400px" }}
//             className="mx-2"
//             type="datetime-local"
//             name="start_date"
//             value={values.start_date}
//             onChange={handleInputChange}
//           ></TextField>
//           <br />
//           <h6 className="mx-2 mb-3" style={{ fontFamily: "initial" }}>
//             {" "}
//             End Date:-
//           </h6>
//           <TextField
//             sx={{ width: "400px" }}
//             className="mx-2"
//             name="end_date"
//             value={values.end_date}
//             onChange={handleInputChange}
//             type="datetime-local"
//           ></TextField>
//           <br />
//           <FormControl className="mx-2">
//             <RadioGroup
//               aria-labelledby="demo-radio-buttons-group-label"

//               name="radio-buttons-group"
//               row
   
//             >
//               <FormControlLabel
//                 value="Image"
//                 control={<Radio />}
//                 label="Image"
//               />
//               <FormControlLabel
//                 value="Script"
//                 control={<Radio />}
//                 label="Script"
//               />
//               <FormControlLabel value="Text"     
//             onChange={handleInputChange} control={<Radio />} label="Text" />
//             </RadioGroup>
//           </FormControl>
//           {values.type_of_ad === "Image" && (
//             <TextField
//               id="outlined-basic"
//               variant="outlined"
//               type="file"
//               className="mx-2"
//               sx={{ width: "400px" }}
//               hiddenLabel="Image"
//               name="Image"
//               onChange={handleInputChange}
//             />
//           )}
//           {values.type_of_ad === "Script" && (
//             <TextField
//               id="outlined-basic"
//               className="mx-2"
//               multiline
//               label="Script"
//               variant="outlined"
//               sx={{ width: "400px" }}
//               name="script"
//               value={values.script}
//               onChange={handleInputChange}
//             />
//           )}
//           {values.type_of_ad === "Text" && (
//             <TextField
//               id="outlined-basic"
//               className="mx-2"
//               multiline
//               label="Text"
//               variant="outlined"
//               sx={{ width: "400px" }}
//               name="text"
//               value={values.text}
//               onChange={handleInputChange}
//             />
//           )}
//           <Button
//             style={{ backgroundColor: "blue", width: "200px" }}
//             variant="contained"
//             className="mx-2 mt-4"
//           >
//             Create Ad
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CreateAd;
























import React, { useState } from "react";
import "../CSS/Maindashboard.css";
import Navbar from "./Navbar";
// import "../CSS/CreateAd.css";

import {
  Button,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";

const CreateAd = () => {
  let initialValue = {
    page_name: "",
    page_location: "",
    desktop: "",
    start_date: "",
    end_date: "",
    image: "",
    script: "",
    text: "",
  };
  const [values, setValues] = useState(initialValue);
  // console.log(values);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    // console.log(e.target)
    // console.log(name, value);
    if (name === "image") {
      setValues((prev) => {
        return { ...prev, "image": e.target.files[0] };
      });
    } else {
      setValues((prev) => {
        return { ...prev, [name]: value };
      });
    }

  };
  console.log(values);

  const id = localStorage?.getItem("newspaperAgencyAdminId");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    for (let key in values) {
      formdata.append(key, values[key]);
    }
    // console.log(formdata);
    try {
      const response = await axios.post(
        `http://174.138.101.222:8080/${id}/create-advertisement`,
        formdata,
        {
          headers: {
            "Content-Type": "multipart/formdata",
          },
        }
      );
      console.log(response);
      setValues({
        page_name: "",
        page_location: "",
        desktop: "",
        start_date: "",
        end_date: "",
        image: "",
        script: "",
        text: "",
      })
      alert('Ad Created')
    } catch (error) {
      console.log(error);
    }
  };


  const navigate = useNavigate();

  const [style, setStyle] = useState("navbarbox");

  const changeStyle = () => {
    setStyle((prev) => {
      if (prev === 'navbarbox') {
        setStyle('navbarbox2')
      } else setStyle('navbarbox')
    });
  }



  return (
    <div className="maindashboard">
      <div className={style}>
        <Navbar />
      </div>
      <div className="dashbox position-relative ">
        <div className="dashwithfav" style={{background:'blue',paddingTop:'1%', paddingButtom:'1%'}}>

          <span className="my-auto" style={{ fontSize: '1.3rem', fontWeight: '400' ,color:'white' }} onClick={() => navigate(-1)} >
            <HiOutlineArrowSmallLeft className="rightShift" style={{ marginRight: "16px;" }} />
            Create Advertisement </span>

          <div className="onclick" onClick={changeStyle}>
            <i class="fa-solid fa-bars"></i>
          </div>

        </div>
        <h4 style={{ fontFamily: "initial", marginTop: '11px', marginLeft: '18px' }}>

          Select Type of Ad
        </h4>
        <br />
        <FormControl sx={{ width: "95%", position: 'relative', left: '50%', transform: 'translateX(-50%)' }} className=" mb-4">
          <InputLabel>Page Name</InputLabel>
          <Select
            label="Page Name"
            name="page_name"
            value={values.page_name}
            onChange={handleInputChange}
          >
            <MenuItem value={"Home_Page"}>Home Page</MenuItem>
            <MenuItem value={"Categories_Page"}>Categories Page</MenuItem>
            <MenuItem value={"Detailed_News_Page"}>Detailed News Page</MenuItem>
          </Select>
        </FormControl>
        <br />

        <FormControl sx={{ width: "95%", position: 'relative', left: '50%', transform: 'translateX(-50%)' }} className=" mb-4">
          <InputLabel>Page Location</InputLabel>
          <Select
            name="page_location"
            label="Page Location"
            value={values.page_location}
            onChange={handleInputChange}
          >
            <MenuItem value={"Topbar"}>Topbar</MenuItem>
            <MenuItem value={"Below_Breaking_News"}>Below Breaking News</MenuItem>
            <MenuItem value={"Footer"}>Footer</MenuItem>
          </Select>
        </FormControl>
        <br />
        <FormControl sx={{ width: "95%", position: 'relative', left: '50%', transform: 'translateX(-50%)' }} className=" mb-4">
          <InputLabel>Platform</InputLabel>
          <Select
            label="Platform"
            name="desktop"

            value={values.desktop}
            onChange={handleInputChange}
          >
            <MenuItem value={"Desktop"}>Desktop</MenuItem>
            <MenuItem value={"Mobile"}>Mobile</MenuItem>
            <MenuItem value={"Both"}>Both</MenuItem>
          </Select>
        </FormControl>
        <br />
        <h6 className="ms-3 mb-2" style={{ fontFamily: "initial" }}>
          Start Date:-
        </h6>{" "}
        <TextField
          sx={{ width: "95%", position: 'relative', left: '50%', transform: 'translateX(-50%)' }}
          className="mb-4"
          name="start_date"
          value={values.start_date}
          onChange={handleInputChange}
          type="datetime-local"
        ></TextField>
        <br />
        <h6 className="ms-3 mb-2" style={{ fontFamily: "initial" }}>
          End Date:-
        </h6>
        <TextField
          sx={{ width: "95%", position: 'relative', left: '50%', transform: 'translateX(-50%)' }}
          name="end_date"
          value={values.end_date}
          onChange={handleInputChange}
          className=" mb-4"
          type="datetime-local"
        ></TextField>
        <br />
        <FormControl className="mx-3 mb-4">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            row
            onChange={(e) =>
              setValues({ ...values, type_of_ad: e.target.value })
            }
          >
            <FormControlLabel value="Image" control={<Radio />} label="Image" />
            <FormControlLabel
              value="Script"
              control={<Radio />}
              label="Script"
            />
            <FormControlLabel value="Text" control={<Radio />} label="Text" />
          </RadioGroup>
        </FormControl>
        {values.type_of_ad === "Image" && (
          <TextField
            id="outlined-basic"
            variant="outlined"
            type="file"
            className="mx-2"
            sx={{ width: "400px" }}
            hiddenLabel="Image"
            // value={values.image}
            name="image"
            onChange={handleInputChange}
          />
        )}
        {values.type_of_ad === "Script" && (
          <TextField
            id="outlined-basic"
            className="mx-2 mb-4"
            multiline
            label="Script"
            variant="outlined"
            sx={{ width: "400px" }}
            name="script"
            value={values.script}
            onChange={handleInputChange}
          />
        )}
        {values.type_of_ad === "Text" && (
          <TextField
            id="outlined-basic"
            className="mx-2 mb-4"
            multiline
            label="Text"
            variant="outlined"
            sx={{ width: "400px" }}
            name="text"
            value={values.text}
            onChange={handleInputChange}
          />
        )}
        <br />
        <Button
          className="mb-4"
          style={{ backgroundColor: "red", position: 'absolute', left: '50%',bottom:'-70px', transform: 'translateX(-50%)', width: '200px', height: '45px' }}
          variant="contained"
        
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Create Ad
        </Button>
      </div>
    </div>
  );
};

export default CreateAd;

