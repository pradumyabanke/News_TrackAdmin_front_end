import React from "react";
import "../CSS/Template3.css";
const Template = () => {
  return (
    <>
      <div className=" newscontainer">
        <div className="top">
          <p className="ESpecialtext">ESpecial Edition</p>
          <hr />
          <p className="BREAKINGtext">BREAKING NEWS</p>
          <hr className="hr5" />
          <hr className="hr2" />
          <div className="contant2">
            <div className="box1">
              <p className="JOIN">JOIN US FOR</p>
              <div className="birthdaybox bg-dark">
                <p className="JULIETAtext">
                  JULIETA'S
                  <br />
                  16TH
                  <br />
                  BIRTHDAY
                </p>
              </div>
              <hr className="hr2" />
              <hr className="hr5" />
              <p>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here' making it look like readable English. Many
              </p>
              <div className="contant2">
                <div className="datebox1">
                  <div className="datecontant bg-dark">
                    <p className="date">
                      24 <br />
                      MARCH 2023
                    </p>
                  </div>
                </div>
                <div className="dateboxx1">
                  <p className="date2">
                    8:00pm <br /> 123 anywhere <br /> st.Any city, st 12345
                  </p>
                </div>
              </div>
              <p className="DRESS">DRESS CODE: FORMAL WEAR</p>
              <hr className="hr2" />
              <hr className="hr5" />
              <p className="DRESS">
                RSVP to OLIVIA at
                <br />
                +123-456-7890
              </p>
            </div>

            <div className="box2">
              <img
                src="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/result.jpeg"
                alt="sample"
                className="image"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vitae ante nulla. Cras aliquam, metus et ultrices cursus, dolor
                ex iaculis turpis, ut imperdiet odio libero vel tellus. Fusce
                elementum ac erat in sagittis. Ut risus velit, varius quis
                fringilla vitae, ultrices id sapien. Donec iaculis neque nulla,
                in lacinia libero lacinia non. Cras ac fermentum lorem. Mauris
                molestie, nisl vitae gravida faucibus, nibh felis rutrum arcu,
                vel pulvinar nunc leo et lacus. Nam dignissim vehicula lorem a
                porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Proin lacinia urna non tempus malesuada. Fusce purus
                dolor, efficitur sed enim nec, consectetur dapibus massa. Duis
                rhoncus consectetur risus. Maecenas dolor urna, posuere nec
                vulputate at, pretium sed orci.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Template;
