import React from "react";
import "./style.css";

export default function Page () {
  return (
    <div className="page">
      <div className="section">
        <div className="container">
          <div className="title">Welcome to DevQuiz</div>
        </div>
        <img className="vector" alt="Vector" src="image.svg" />
      </div>
      <div className="section">
        <div className="container">
          <div className="text-wrapper">My Question</div>
          <div className="description">Choose the correct answer</div>
          <div className="list">
            <div className="item">
              <div className="frame">
                <div className="div">1. Clearness</div>
              </div>
            </div>
            <div className="item">
              <div className="frame">
                <div className="title-2">2. Clearness</div>
              </div>
            </div>
            <div className="item">
              <div className="frame">
                <div className="div">3. Cloudiness</div>
              </div>
            </div>
            <div className="item">
              <div className="frame">
                <div className="div">4. Rain</div>
              </div>
            </div>
          </div>
          <div className="button">
            <div className="seconday">
              <div className="title-3">Pass</div>
            </div>
            <div className="primary">
              <div className="title-4">Solve</div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-bar">
        <img className="devquiz-logo" alt="Devquiz logo" src="devquiz-logo-2.png" />
        <div className="title-8">DevQuiz</div>
        <div className="navbar">
          <div className="tab">Quiz</div>
          <div className="tab">Rank</div>
          <div className="tab">Board</div>
          <div className="tab">Group</div>
        </div>
        <div className="title-9">{""}</div>
        <button className="primary-wrapper">
          <div className="title-wrapper">
            <div className="title-4">Login</div>
          </div>
        </button>
      </div>
    </div>
  );
};
