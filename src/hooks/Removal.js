import { useState, useEffect } from "react";
import { dbFireStore } from "../db/config.js";

const Removal = (collection, ref) => {
    // const [status, setStatus] = useState(false);
    // const [error, setError] = useState("");

        dbFireStore.collection(collection).doc(ref).delete();
            // .then(() => {
            //     setStatus(true);
            // }).catcch(() => {
            //     setError("error");
            // });

    return ;
};

export default Removal;