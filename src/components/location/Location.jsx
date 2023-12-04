import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faHouseLaptop,
} from "@fortawesome/free-solid-svg-icons";
import "./location.css";

const Location = () => {
  return (
    <>
      <div className="location-box">
        <div className="location-section">
          Current Location{" "}
          <FontAwesomeIcon lassName="icon" icon={faLocationDot} />
          <p>New York Metropolitan Area</p>
        </div>
        <div className="location-section">
          Relocation Possibilities{" "}
          <FontAwesomeIcon lassName="icon" icon={faLocationDot} />
          <p>Maryland, DC, Virginia</p>
        </div>
        <div className="location-section">
          Always Avaiable for Work{" "}
          <FontAwesomeIcon lassName="icon" icon={faHouseLaptop} />
          <p>Remote</p>
        </div>
      </div>
    </>
  );
};

export default Location;
