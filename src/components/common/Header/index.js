import React from "react";
import "./style.css";

import { logo_devquiz } from "../../../assets/images";

export default function Header() {
  return (
    <div className="top-bar">
      <img className="devquiz-logo" alt="Devquiz logo" src={logo_devquiz} />
      <button className="title">DevQuiz</button>
      <div className="navbar">
        <button className="tab">Quiz</button>
        <button className="tab">Rank</button>
        <button className="tab">Board</button>
        <button className="tab">Group</button>
      </div>
      <div className="text-wrapper">{""}</div>
      <button className="button">
        <div className="primary">
          <div className="div">Login</div>
        </div>
      </button>
    </div>
  );
}
