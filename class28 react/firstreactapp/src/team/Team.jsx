import React from "react";
import "./Team.css";

const Team = ({ layout, bg }) => {
  return (
    <>
      <section style={{ backgroundColor: bg }} className={"team " + layout}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="heading">
                <h1>We are developer Team</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Recusandae asperiores maiores culpa perferendis explicabo
                  alias corporis tempore doloremque ipsam quam!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="team-member">
                  <img
                    src="https://unitedthemes.com/wp-content/uploads/2018/09/team2.jpg"
                    alt=""
                  />
                  <h3>Sajjad Hossain</h3>
                  <p>Mern Stack Developer</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-member">
                  <img
                    src="https://unitedthemes.com/wp-content/uploads/2018/09/team2.jpg"
                    alt=""
                  />
                  <h3>Sajjad Hossain</h3>
                  <p>Mern Stack Developer</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team-member">
                  <img
                    src="https://unitedthemes.com/wp-content/uploads/2018/09/team2.jpg"
                    alt=""
                  />
                  <h3>Sajjad Hossain</h3>
                  <p>Mern Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
