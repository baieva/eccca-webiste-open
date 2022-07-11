import React from "react";
import "./Evergreen.css";
import EverGrid from "../EverGrid";
import Footer from "../Footer";

function Evergreen() {
    return(
        <div>
            <div className="evergreen-container">
                <div className="evergreen">
                    <div className="evergreen-title"><div className="evergreen-pic"></div></div>
                    <EverGrid />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Evergreen;