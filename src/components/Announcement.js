import React from "react";
import Countdown from "./Countdown";
import Facebook from "../facebook.png";
import Insta from "../insta.png";

function Announcement() {
  return (
    <div className="Announcement">
      <h1 className="Orange">Website coming soon</h1>
      <br />
      <h2 className="Green-light">
        You can join our pre-sale on Ulule and help us and our partners to
        realize our dream.
      </h2>
      <br />
      <h2 className="Green-light">
        If you want to get in touch, you can reach us via{" "}
        <a
          href="https://www.facebook.com/cestafric/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="Facebook link" src={Facebook} width="40" height="40" />
        </a>{" "}
        and{" "}
        <a
          href="https://www.instagram.com/cestafric/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img alt="Insta link" src={Insta} width="40" height="40" />
        </a>
      </h2>
      <a
        href="https://nl.ulule.com/cestafric-collection-s20/coming-soon/"
        target="_blank"
        rel="noopener noreferrer"
        alt="Link to Ulule Campaign"
      ></a>

      <Countdown />
    </div>
  );
}

export default Announcement;
