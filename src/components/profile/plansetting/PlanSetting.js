import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './plansetting.scss';

function PlanSetting() {
  return (
    <div className="plan-setting-container">
      <div className="header">
        <span className="back-icon"><FontAwesomeIcon icon={faArrowLeft} /></span>
        <span>Manage subscription</span>
      </div>
      <div className="current-plan">
        <div className="plan-details">
          <span>Current Plan</span>
          <span><Link to="#">Free</Link></span>
        </div>
        <div className="plan-details">
          <span>Time Period</span>
          <span>12/12/2024-12/12/2024</span>
        </div>
        <div className="buttons">
          <button className="unsubscribe">Unsubscribe</button>
          <button className="upgrade">Upgrade</button>
        </div>
      </div>
      <div className="get-gold-plan">
        <div className="plan-details">
          <h1>Get GOLD plan</h1>
          <FontAwesomeIcon icon={faHeart} />
          <h2>Unlimited Likes</h2>
          <p>Send as many likes as you want</p>
        </div>
        <div className="plans">
          <div>
            <span>12-month plan</span>
            <span>price</span>
          </div>
          <div>
            <span>12-month plan</span>
            <span>price</span>
          </div>
          <div>
            <span>12-month plan</span>
            <span>price</span>
          </div>
        </div>
        <div className="continue-button">
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default PlanSetting;
