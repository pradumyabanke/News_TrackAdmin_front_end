import React from "react";
import "../CSS/Template2.scss";

const template = () => {
  return (
    <>
      <header className="template2-header">
        <div className="template2-header-top">
          <h4>Issue 2</h4>
          <h4>The Extra News</h4>
        </div>
        <hr className="template2-header-lineDark" />
        <div className="template2-header-mid">
          <h1>THE EXTRA NEWS</h1>
        </div>
        <hr className="template2-header-lineDark" />
        <div className="template2-header-bottom">
          <h3>All ABOUT NEWS AROUND THE WORLD</h3>
        </div>
        <hr className="template2-header-lineLight" />
      </header>

      {/* <div className="template2-left-pagebar">Pagebar</div> */}
      <div className="template2-body">
        <div className="template2-body-div-left">
          <img
            src="https://sjohart.files.wordpress.com/2014/12/red-sunset-by-petteri-sulonen.jpg"
            alt=""
            className="template2-body-div-left-image"
          />
        </div>
        <div className="template2-body-div-right">right</div>
      </div>
      <footer className="template2-footer">Footer</footer>
    </>
  );
};

export default template;
