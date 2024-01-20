import React from "react";
import "./style.css";

export default function Page () {
  return (
    <div className="page">
    
      <div className="section">
        <div className="container">
          <div className="text-wrapper">Create a New Team</div>
          <p className="description">Fill in the details to create a team.</p>
          <div className="input">
            <input className="div" placeholder="Team Name" type="text" />
          </div>
          <button className="button">
            <div className="primary">
              <div className="title-2">Next</div>
            </div>
          </button>
        </div>
        <img className="vector" alt="Vector" src="vector-200.svg" />
      </div>
    </div>
  );
};