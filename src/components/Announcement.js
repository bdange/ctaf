import React from "react";
import Countdown from "./Countdown";
import Widget from "./Widget";

function Announcement() {
  return (
    <div className="Announcement">
      <h1>Site Under Construction</h1>
      <br />
      <h2>
        Be ready to help us turn our project into a reality by participating to
        our fundraising
        <a
          href="https://nl.ulule.com/cestafric-collection-s20/coming-soon/"
          target="_blank"
        ></a>
      </h2>
      <Countdown />
      {/* <Widget /> */}
    </div>
  );
}

export default Announcement;
