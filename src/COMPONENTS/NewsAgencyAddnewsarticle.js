import React, { useState } from "react";
import "../CSS/NewsAgencyAddnewsarticle.scss";
import Navbar from "./Navbar";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Editor as ClassicEditor } from "ckeditor5-custom-build/build/ckeditor";
// import ClassicEditor from "./Ckeditor";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import axios from "axios";

const NewsAgencyAddnewsarticle = () => {
  ///////////////////////////////// To take user input ///////////////////////////////////////
  let initialValues = {
    category: "",
    title: "",
    sub_heading: "",
    short_details: "",
    body: "",
    image: "",
    url: "",
    tags: "",
    news_priority: "",
    news_sections: "newsSection",
    change_byline: "",
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
    const newspaperAgencyAdminToken = localStorage?.getItem(
      "newspaperAgencyAdminToken"
    );
    const newspaperAgencyAdminId = localStorage?.getItem(
      "newspaperAgencyAdminId"
    );

    console.log(formdata);
    axios({
      method: "post",
      url: `http://174.138.101.222:8080/${newspaperAgencyAdminId}/post-news`,
      data: formdata,
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + newspaperAgencyAdminToken,
      },
    })
      .then((response) => alert(response.data.message))
      .catch((error) => console.log(error));
  };
  ///////////////////////////////// To send axios request ///////////////////////////////////////

  return (
    <>
      <Navbar />
      <div className="parentContainer">
        <h1 className="bg-red">
          <span>
            <HiOutlineArrowSmallLeft />
          </span>
          <span>Post News</span>
        </h1>

        <FormControl className="FormControl">
          <InputLabel id="demo-simple-select-helper-label">CATEGORY</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="PLATFORM"
            name="category"
            value={values.category}
            onChange={handleInputChange}
          >
            <MenuItem value={"Ten"}>Ten</MenuItem>
            <MenuItem value={"Twenty"}>Twenty</MenuItem>
            <MenuItem value={"Thirty"}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <div className="ckeditor FormControl">
          <p className="cktitle ">Title *</p>
          <CKEditor
            editor={ClassicEditor}
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
            editor={ClassicEditor}
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
        <div className="ckeditor">
          <p className="cktitle">Body *</p>
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
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
            <MenuItem value={"yes"}>Yes</MenuItem>
            <MenuItem value={"No"}>No</MenuItem>
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
        <TextField
          id="outlined-basic"
          label="Tags/Keywords"
          variant="outlined"
          className="FormControl"
          name="tags"
          value={values.tags}
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
        <TextField
          id="outlined-basic"
          label="Source"
          className="FormControl"
          variant="outlined"
          name="source"
          value={values.source}
          onChange={handleInputChange}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="file"
          className="FormControl"
          label="Image"
          name="image"
          onChange={handleInputChange}
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="News Sections"
          className=" FormControl"
        />
        <Button
          variant="contained"
          className="FormControl bg-red"
          onClick={saveHandeler}
        >
          Save
        </Button>
      </div>
    </>
  );
};

export default NewsAgencyAddnewsarticle;
