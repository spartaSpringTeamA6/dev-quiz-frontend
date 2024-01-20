import React from "react";
import "./style.css";

export default function Page () {
  return (
    <div className="page">
      <div className="section">
        <div className="container">
          <div className="title">Welcome to DevQuiz</div>
        </div>
        <img className="vector" alt="Vector" src="vector-200.svg" />
      </div>
      <div className="div">
        <div className="avatar" />
        <div className="container-2">
          <div className="text-wrapper">User</div>
          <div className="chip-group">
            <div className="chip">
              <div className="text">Programming</div>
            </div>
            <div className="div-wrapper">
              <div className="text">Design</div>
            </div>
            <div className="div-wrapper">
              <div className="text">Writing</div>
            </div>
            <div className="chip">
              <div className="text">Marketing</div>
            </div>
          </div>
        </div>
        <button className="button">
          <button className="button-2">
            <div className="seconday">
              <div className="title-2">save</div>
            </div>
          </button>
        </button>
        <img className="img" alt="Vector" src="image.svg" />
      </div>
      <div className="section-2">
        <div className="container-3">
          <div className="title-3">Change Username</div>
          <div className="description">Update your username</div>
          <div className="input">
            <div className="title-4">New Username</div>
            <div className="textfield">
              <div className="text-2">Enter your new username</div>
            </div>
          </div>
          <button className="button-2">
            <div className="primary">
              <div className="title-5">Save</div>
            </div>
          </button>
        </div>
        <img className="vector-2" alt="Vector" src="vector-200-2.svg" />
      </div>
      <div className="section-2">
        <div className="container-3">
          <div className="title-3">Choose Skills</div>
          <div className="description">Select your skills</div>
          <div className="selection">
            <div className="title-4">Skills</div>
            <div className="chip-group">
              <div className="chip">
                <div className="text">Programming</div>
              </div>
              <div className="div-wrapper">
                <div className="text">Design</div>
              </div>
              <div className="div-wrapper">
                <div className="text">Writing</div>
              </div>
              <div className="chip">
                <div className="text">Marketing</div>
              </div>
            </div>
            <div className="info">Select multiple skills</div>
          </div>
          <button className="button-2">
            <div className="primary">
              <div className="title-5">Save</div>
            </div>
          </button>
        </div>
        <img className="vector-3" alt="Vector" src="vector-200-3.svg" />
      </div>
      <div className="container-wrapper">
        <div className="container-4">
          <div className="title-6">Contact us</div>
          <div className="title-7">About</div>
          <div className="title-8">Privacy Policy</div>
        </div>
      </div>
      <div className="top-bar">
        <img className="devquiz-logo" alt="Devquiz logo" src="devquiz-logo-2.png" />
        <div className="title-9">DevQuiz</div>
        <div className="navbar">
          <div className="tab">Quiz</div>
          <div className="tab">Rank</div>
          <div className="tab">Board</div>
          <div className="tab">Group</div>
        </div>
        <div className="title-10">{""}</div>
        <button className="primary-wrapper">
          <div className="primary">
            <div className="title-5">User</div>
          </div>
        </button>
      </div>
    </div>
  );
};