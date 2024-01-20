import React from "react";
import "./style.css";

export default function Page () {
  return (
    <div className="page">
      
      <div className="section">
        <div className="container">
          <div className="text-wrapper">팀 상세 정보</div>
          <div className="primary">
            <div className="div">관리</div>
          </div>
        </div>
        <div className="list">
          <div className="row">
            <div className="article">
              <div className="image-container">
                <div className="image" />
              </div>
              <div className="frame">
                <div className="title-2">팀 이름</div>
                <div className="subtitle">팀명</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="article">
              <div className="image-container">
                <div className="image" />
              </div>
              <div className="frame">
                <div className="title-2">팀 관리자</div>
                <div className="subtitle">관리자명</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="article">
              <div className="image-container">
                <div className="image" />
              </div>
              <div className="frame">
                <div className="title-2">팀 멤버</div>
                <div className="subtitle">멤버 수</div>
              </div>
            </div>
          </div>
        </div>
        <img className="vector" alt="Vector" src="vector-200.svg" />
      </div>
      
    </div>
  );
};
