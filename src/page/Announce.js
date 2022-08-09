import React from "react";
import AnnoGrid from "../AnnoGrid";
import Footer from "../Footer";
import "./Announce.css";
import { strings } from "../util/local";

function Announce() {
  return (
    <div>
      <div className="announce-container">
        <div className="announce">
          <h1>{strings.annoTitle}</h1>
          <h4>{strings.aboutPayment}</h4>
          <div className="etrans">
            <p>&nbsp;</p>
            <p>{strings.etransfer1}</p>
            <p>{strings.etransfer2}</p>
            <p>&nbsp;</p>
            <p style={{fontStyle: "italic"}}>{strings.etransfer3}</p>
            <p>{strings.etransfer4}</p>
            <p>{strings.etransfer5}</p>
            <p>{strings.etransfer6}</p>
            <p>{strings.etransfer7}</p>
            <p>&nbsp;</p>
            <p style={{fontStyle: "italic"}}>{strings.etransfer8}</p>
            <p>{strings.etransfer9}</p>
            <p>{strings.etransfer10}</p>
          </div>
          <AnnoGrid />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Announce;
