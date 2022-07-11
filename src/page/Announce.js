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
          <p>{strings.etransfer}</p>
          <p className="importantMessage">{strings.recipientName} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {strings.recipientEmail}</p>
          <p className="importantMessage">{strings.messageRequired}</p>
          <p>{strings.etransNotice}</p>
          <p>{strings.securityQuestion}</p>
          <AnnoGrid />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Announce;
