import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./MyProfile.scss";

export default function MyProfile() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const handleNext = () => {
    setStep(step + 1);
    
  };

  const handlePrev = () => {
    setStep(step - 1);
    navigate('/profile');
  };

  return (
    <div className="myprofile-container">
      {step === 1 && (
        <div className="Personal_info">
        
          <div>
          <h1>Personal Info</h1>
          <label>vaccination date</label>
          <input type="text" placeholder="enter name" />
        </div>
        <div>
          <label>Bread name</label>
          <select>
            <option> Labrador Retriever</option>
            <option>German Shepherd</option>
          </select>
        </div>
        <div>
            <label>Profile images</label>

            <input type="file" accept="image/jpeg" />
        </div>
        <div>
          <label>DOB</label>
          <input type="date" />
        </div>
        <div className="gender-container">
    <label>gender</label>
    <input type="radio" name="gender" value="male" /> Male
    <input type="radio" name="gender" value="female" /> Female
  </div>
        </div>
      )}
      {step === 2 && (
        <div className="Medical_info">
          <div>
          <h1>Medical Info</h1>
          <label>vaccination date</label>
          <input type="date" placeholder="vaccination date" />
        </div>
        <div>
          <label>owner name</label>
          <input type="input" placeholder="owner name" />
        </div>
        <div>
         <label>Owner address</label>
         <input type="text" placeholder="owner address" />
         <button> Address Edit</button>
         <button> Address delete</button>
       </div>
    
           
        </div>
      )}
      <div className="myprofile-prevnxtbtn">
        {step !== 1 && <button onClick={handlePrev}>Previous</button>}
        {step !== 2 && <button onClick={handleNext}>Next</button>}
      </div>
    </div>
  );
}
