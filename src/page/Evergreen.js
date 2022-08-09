import React, { useState } from "react";
import "./Evergreen.css";
import EverGrid from "../EverGrid";
import EverImage from "../EverImage";
import Modal from "../Modal";
import Footer from "../Footer";

function Evergreen() {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div>
            <div className="evergreen-container">
                <div className="evergreen">
                    <div className="evergreen-title"><div className="evergreen-pic"></div></div>
                    <div className="evergrids">
                        <EverGrid />
                        <EverImage setSelectedImg={setSelectedImg} />
                        {selectedImg && (
                            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Evergreen;