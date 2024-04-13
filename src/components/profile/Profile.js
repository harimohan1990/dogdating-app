import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { setProfileData } from "../../redux/profileSlice";
import { createProfile } from "../../services/profileService";
import "./Profile.scss";

export default function Profile() {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(setProfileData({ [name]: value }));
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Check if any field is empty
    const isEmpty = Object.values(profileData).some(value => value === "");
    if (isEmpty) {
      console.error("Cannot submit form: Some fields are empty");
      // Handle the error (e.g., show an error message)
      return;
    }

    try {
      await createProfile(profileData);
      console.log("Profile updated successfully");
      // Handle successful update (e.g., show a success message)
    } catch (error) {
      console.error("Error updating profile:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="profile_wrapper">
      <div className="profile_header">
        <div className="profile_profile_moveleft">
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Profile</span>
        </div>
      </div>
      <div className="profile_info">
        <form onSubmit={onSubmitHandler}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleInputChange}
          />
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={profileData.age}
            onChange={handleInputChange}
          />
          <label>Height</label>
          <input
            type="number"
            name="height"
            value={profileData.height}
            onChange={handleInputChange}
          />
          <label>Weight</label>
          <input
            type="number"
            name="weight"
            value={profileData.weight}
            onChange={handleInputChange}
          />
          <label>Dog bread</label>
          <input
            type="text"
            name="bread"
            value={profileData.bread}
            onChange={handleInputChange}
          />
          <label>Vaccination status</label>
          <input
            type="text"
            name="vaccination"
            value={profileData.vaccination}
            onChange={handleInputChange}
          />
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={profileData.location}
            onChange={handleInputChange}
          />
          <div className="save_updateinfo">
          <button type="submit">Save info</button>
          <button type="submit">Edit info</button>
          </div>
        
        </form>
      </div>
      <div className="logout_deletetbtns">
        <div className="btns">
          <button>Logout</button>
          <button>Delete Account</button>
        </div>
      </div>
    </div>
  );
}
