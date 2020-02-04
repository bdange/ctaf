import React from "react";
import Countdown from "./Countdown";
import { SocialIcon } from "react-social-icons";

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
        <SocialIcon
          url="https://www.instagram.com/cestafric/"
          target="_blank"
        />{" "}
        and{" "}
        <SocialIcon url="https://www.facebook.com/cestafric/" target="_blank" />
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
