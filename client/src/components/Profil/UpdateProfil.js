import React, { useState } from "react";
import LeftNav from "../LeftNav.js";
import { useDispatch, useSelector } from "react-redux";
import UploadImg from "./UploadImg.js";
import { updateBio } from "../../actions/user.actions.js";
import FollowHandler from "./FollowHandler.js";
const UpdateProfil = () => {
  const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
  const userData = useSelector((state) => state.userReducer);
  const usersData = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  const [followingPopup, setFollowingPopup] = useState(false);
  const [followersPopup, setFollowersPopup] = useState(false);
  const error = useSelector((state) => state.errorReducer.userError);

  const handleUpdate = () => {
    dispatch(updateBio(userData._id, bio));
    setUpdateForm(false);
  };
  return (
    <div className="profil-container">
      <LeftNav />
      <h1>Profil de {userData.pseudo} </h1>
      <div className="update-container">
        <div className="left-part">
          <h3>Photo de Profil</h3>
          <img src={userData.picture} alt="user-pic" />
          <UploadImg />
          <p>{error.maxSize}</p>
          <p>{error.format}</p>
        </div>
        <div className="right-part">
          <div className="bio-update">
            <h3>BIO</h3>
            {updateForm === false && (
              <>
                <p onClick={() => setUpdateForm(!updateForm)}>
                  {" "}
                  {userData.bio}{" "}
                </p>
                <button onClick={() => setUpdateForm(!updateForm)}>
                  Modifier bio
                </button>
              </>
            )}
            {updateForm && (
              <>
                <textarea
                  style={{ background: "DarkSlateGray" }}
                  type="text"
                  defaultValue={userData.bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
                <button onClick={handleUpdate}>Valider Modication</button>
              </>
            )}
          </div>
          <h4>Membre depuis le:{userData.createdAt}</h4>
          <h5
            onClick={() => setFollowingPopup(true)}
            style={{ background: "orange", color: "black" }}
          >
            Abonnement : {userData.following ? userData.following.length : ""}{" "}
          </h5>

          <h5
            onClick={() => setFollowersPopup(true)}
            style={{ background: "orange", color: "black" }}
          >
            Abonnés : {userData.followers ? userData.followers.length : ""}{" "}
          </h5>
        </div>
      </div>
      {followingPopup && (
        <div className="popup-profil-container">
          <div className="modal">
            <h3>Abonnements</h3>
            <span className="cross" onClick={() => setFollowingPopup(false)}>
              {" "}
              &#10005;
            </span>
            <ul>
              {usersData.map((user) => {
                for (let i = 0; i < userData.following.length; i++) {
                  if (user._id === userData.following[i]) {
                    return (
                      <li key={user._id}>
                        <img src={user.picture} alt="user-pic" />
                        <h4>{user.pseudo}</h4>
                        <FollowHandler
                          idToFollow={user._id}
                          type={"suggestion"}
                        />
                      </li>
                    );
                  }
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      )}

      {followersPopup && (
        <div className="popup-profil-container">
          <div className="modal">
            <h3>Abonnés</h3>
            <span className="cross" onClick={() => setFollowersPopup(false)}>
              {" "}
              &#10005;
            </span>
            <ul>
              {usersData.map((user) => {
                for (let i = 0; i < userData.followers.length; i++) {
                  if (user._id === userData.followers[i]) {
                    return (
                      <li key={user._id}>
                        <img src={user.picture} alt="user-pic" />
                        <h4>{user.pseudo}</h4>
                        <FollowHandler
                          idToFollow={user._id}
                          type={"suggestion"}
                        />
                      </li>
                    );
                  }
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProfil;
