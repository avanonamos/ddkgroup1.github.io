import React, { useContext } from "react";
import Log from "../components/Log";
import { UidContext } from "../components/AppContext.js";
import UpdateProfil from "../components/Profil/UpdateProfil.js";

const Profil = () => {
  const uid = useContext(UidContext);

  return (
    <div className="profil-page">
      {uid ? (
        <UpdateProfil />
      ) : (
        <div className="log-container">
          <Log signin={false} signup={true} />
          <div className="img-container">
            <img src="./img/16.png" alt="img-log" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
