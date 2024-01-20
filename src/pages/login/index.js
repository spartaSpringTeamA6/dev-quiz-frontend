import React from "react";
import "./style.css";

export default function Page () {

    const navigateToNaver = () => {
        window.location.href = 'https://www.naver.com';
      };

  return (
    <div className="page">
      <div className="section">
        <div className="container">
          <div className="title-2">Welcome to DevQuiz</div>
        </div>
      </div>
      <div className="container-2">
        <p className="description">Welcome to our login page!</p>
        <div className="button-2">
          <button className="seconday">
            <div className="title-4">Google</div>
          </button>
          <button className="title-wrapper">
            <div className="title-4">Github</div>
          </button>
        </div>
        <div className="non-member" onClick={navigateToNaver}> start as a non-member </div>
      </div>
      
    </div>
  );
};