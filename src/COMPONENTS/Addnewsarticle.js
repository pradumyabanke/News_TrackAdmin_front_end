import React, { useEffect, useState } from "react";
import "../CSS/Addnewsarticle.module.scss";
import Navbar from "./Navbar";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import ClassicEditor from "./Ckeditor";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import axios from "axios";
import categories from "../Masters/Categories";
import { useLocation, useNavigate } from "react-router-dom";

const Addnewsarticle = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  ///////////////////////////////// To take user input ///////////////////////////////////////

  let initialValues = {
    category: "",
    title: "",
    sub_heading: "Sub Heading",
    short_details: "",
    body: "",
    image: "",
    url: "",
    tags: "",
    news_priority: "",
    news_sections: "newsSection",
    change_byline: false,
    author_name: "",
    source: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "image") {
      setValues({ ...values, [name]: event.target.files[0] });
      console.log(values);
    } else {
      setValues({ ...values, [name]: value });
    }
  };
  ///////////////////////////////// To take user input ///////////////////////////////////////

  ///////////////////////////////// To send axios request ///////////////////////////////////////

  const saveHandeler = () => {
    let formdata = new FormData();
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        formdata.append(key, values[key]);
      }
    }
    const superAdminToken = localStorage?.getItem("superAdminToken");
    const superAdminId = localStorage?.getItem("superAdminId");

    console.log(formdata);
    axios({
      method: "post",
      url: `http://174.138.101.222:8080/${superAdminId}/post-news`,
      data: formdata,
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + superAdminToken,
      },
    })
      .then((response) => alert(response.data.message))
      .catch((error) => console.log(error));
  };
  ///////////////////////////////// To send axios request ///////////////////////////////////////

  ///////////////////////////////// To send in Draft ///////////////////////////////////////

  const draftHandeler = () => {
    let formdata = new FormData();
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        formdata.append(key, values[key]);
      }
    }
    const superAdminToken = localStorage?.getItem("superAdminToken");
    const superAdminId = localStorage?.getItem("superAdminId");

    console.log(formdata);
    axios({
      method: "post",
      url: `http://174.138.101.222:8080/${superAdminId}/draft-article`,
      data: formdata,
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + superAdminToken,
      },
    })
      .then((response) => alert(response.data.message))
      .catch((error) => console.log(error));
  };
  ///////////////////////////////// To send draft request ///////////////////////////////////////

  /////get api tag///

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://174.138.101.222:8080/getmastertag").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);
  console.log(data);

  /////

  return (
    <>
      <Navbar />
      <div className="parentContainer">
        <h1>
          <span>
            <HiOutlineArrowSmallLeft onClick={back} />
          </span>
          <span>Post News</span>
        </h1>

        <FormControl className="FormControl">
          <InputLabel id="demo-simple-select-helper-label">
            "Category"
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="PLATFORM"
            name="category"
            value={values.category}
            onChange={handleInputChange}
          >
            {categories.map((item) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
        </FormControl>

        <div className="ckeditor FormControl">
          <p className="cktitle ">Title *</p>
          <CKEditor
            editor={Editor}
            data="<p>Hello from CKEditor 5!</p>"
            name="title"
            value={values.title}
            onChange={(event, editor) => {
              const data = editor.getData();
              setValues({
                ...values,
                title: data,
              });
            }}
          />
        </div>
        {/* <div className="ckeditor">
          <p className="cktitle">Sub Heading *</p>
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            name="sub_heading"
            value={values.sub_heading}
            onChange={(event, editor) => {
              const data = editor.getData();
              setValues({
                ...values,
                sub_heading: data,
              });
            }}
          />
        </div> */}
        <div className="ckeditor">
          <p className="cktitle">Summary / Short Details *</p>
          <CKEditor
            editor={Editor}
            data="<p>Hello from CKEditor 5!</p>"
            name="short_details"
            value={values.short_details}
            onChange={(event, editor) => {
              const data = editor.getData();
              setValues({
                ...values,
                short_details: data,
              });
            }}
          />
        </div>
        <div className="ckeditor ckeditorBody">
          <p className="cktitle">Body *</p>
          <CKEditor
            editor={Editor}
            data={values.body}
            name="body"
            value={values.body}
            onChange={(event, editor) => {
              const data = editor.getData();
              setValues({
                ...values,
                body: data,
              });
            }}
          />
        </div>

        <TextField
          id="outlined-basic"
          variant="outlined"
          type="file"
          className="FormControl"
          label="Image"
          // value={values.image}
          name="image"
          onChange={handleInputChange}
        />

        <TextField
          id="outlined-basic"
          className="FormControl"
          label="Url"
          variant="outlined"
          name="url"
          value={values.url}
          onChange={handleInputChange}
        />

        <FormControl className="FormControl">
          <InputLabel id="demo-simple-select-helper-label">
            Tags/Keywords
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            // value={age}
            label="CATEGORY"
            // onChange={handleChange}
          >
            {data?.data?.map((item) => (
              <MenuItem key={item._id} value={item.tag_name}>
                {item.tag_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl className="FormControl">
          <InputLabel id="demo-simple-select-helper-label">
            News Priority
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="PLATFORM"
            name="news_priority"
            value={values.news_priority}
            onChange={handleInputChange}
          >
            <MenuItem value={"Breaking"}>Breaking</MenuItem>
            <MenuItem value={"Imported"}>Imported</MenuItem>
            <MenuItem value={"Normal"}>Normal</MenuItem>
            <MenuItem value={"Feature"}>Feature</MenuItem>
          </Select>
        </FormControl>

        {values.change_byline ? (
          <TextField
            id="outlined-basic"
            label="Author  Name"
            variant="outlined"
            className="FormControl"
            name="author_name"
            value={values.author_name}
            onChange={handleInputChange}
          />
        ) : (
          <FormControl className="FormControl">
            <InputLabel id="demo-simple-select-helper-label">
              Change Byline
            </InputLabel>

            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Change Byline"
              name="change_byline"
              value={values.change_byline}
              onChange={handleInputChange}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
        )}

        <TextField
          id="outlined-basic"
          label="Source"
          className="FormControl"
          variant="outlined"
          name="source"
          value={values.source}
          onChange={handleInputChange}
        />

        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="News Sections"
          className=" FormControl"
        />

        <Button
          variant="contained"
          className="FormControl "
          onClick={draftHandeler}
        >
          Save to Drafts
        </Button>

        <Button
          variant="contained"
          className="FormControl "
          onClick={saveHandeler}
        >
          Post News
        </Button>
      </div>
    </>
  );
};

export default Addnewsarticle;
