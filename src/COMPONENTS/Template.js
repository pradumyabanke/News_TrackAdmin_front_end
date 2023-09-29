import React from "react";
import "../CSS/Template.scss";

const template = () => {
  return (
    <>
      <header className="template-header">
        <img
          src="https://seeklogo.com/images/D/dainik-jagran-logo-C3602BC021-seeklogo.com.png"
          alt=""
          className="template-header-logo"
        />
        <h1>Dainik Jagran</h1>
      </header>
      <nav className="template-navbar">
        <ul>
          <li>Date</li>
          <li>Time Updated</li>
          <li>Edition</li>
          <li>Language</li>
          <li>Top News</li>
          <li>Category</li>
        </ul>
      </nav>
      {/* <div className="template-left-pagebar">Pagebar</div> */}
      <div className="template-body">
        <div className="template-body-div1">
          <h5>Local News</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            rerum autem distinctio ad architecto nobis beatae quod, hic
            exercitationem itaque iure tempore voluptatem saepe illum quasi vero
            aliquam quia odit, ipsam dolor eveniet nam, at est. Et aperiam
            soluta cupiditate.
          </p>
        </div>
        <div className="template-body-div2">
          <h5>International News</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            rerum autem distinctio ad architecto nobis beatae quod, hic
            exercitationem itaque iure tempore voluptatem saepe illum quasi vero
            aliquam quia odit, ipsam dolor eveniet nam, at est. Et aperiam
            soluta cupiditate.
          </p>
        </div>
        <div className="template-body-div3">
          <h5>Sports News</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            rerum autem distinctio ad architecto nobis beatae quod, hic
            exercitationem itaque iure tempore voluptatem saepe illum quasi vero
            aliquam quia odit, ipsam dolor eveniet nam, at est. Et aperiam
            soluta cupiditate.
          </p>
        </div>
        <div className="template-body-div4">
          <h5>Healthcare News</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            rerum autem distinctio ad architecto nobis beatae quod, hic
            exercitationem itaque iure tempore voluptatem saepe illum quasi vero
            aliquam quia odit, ipsam dolor eveniet nam, at est. Et aperiam
            soluta cupiditate.
          </p>
        </div>
        <div className="template-body-div5">
          <h5>Technology News</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
            rerum autem distinctio ad architecto nobis beatae quod, hic
            exercitationem itaque iure tempore voluptatem saepe illum quasi vero
            aliquam quia odit, ipsam dolor eveniet nam, at est. Et aperiam
            soluta cupiditate.
          </p>
        </div>
      </div>
      <footer className="template-footer">Footer</footer>
    </>
  );
};

export default template;
