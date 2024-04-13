import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import './Accountsetting.scss';

function AccountSetting() {
  return (
    <div className="account-setting-container">
      <div className="header">
        <span className="back-icon"><FontAwesomeIcon icon={faArrowLeft} /></span>
        <span>Edit</span>
      </div>
      <div className="form-group">
        <label>Name</label>
        <input type="text" placeholder="" />
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input type="tel" placeholder="" />
      </div>
      <div className="form-group">
        <label>Date Of Birth</label>
        <input type="date" placeholder="" />
      </div>
      <div className="save-button">
        <button>Save</button>
      </div>
    </div>
  );
}

export default AccountSetting;
