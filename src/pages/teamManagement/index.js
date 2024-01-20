import React from "react";
import "./style.css";
export default function Page () {
  return (
    <div className="page">
      <div className="top-bar">
        <div className="rectangle" />
        <div className="title">팀 관리 페이지</div>
      </div>
      <div className="section">
        <div className="container">
          <div className="text-wrapper">팀 관리</div>
          <p className="description">팀 상세 정보와 관리 기능을 제공합니다.</p>
        </div>
        <img className="vector" alt="Vector" src="image.svg" />
      </div>
      <div className="section">
        <div className="container">
          <div className="text-wrapper">팀에 유저 초대</div>
          <div className="input">
            <div className="div">초대할 유저 이메일</div>
            <div className="textfield" />
          </div>
          <button className="button">
            <div className="primary">
              <div className="title-2">저장</div>
            </div>
          </button>
        </div>
        <img className="img" alt="Vector" src="vector-200.svg" />
      </div>
      <div className="section">
        <div className="container">
          <div className="text-wrapper">팀 이름 변경</div>
          <div className="input">
            <div className="div">새로운 팀 이름</div>
            <div className="textfield" />
          </div>
          <button className="primary-wrapper">
            <div className="title-wrapper">
              <div className="title-2">변경</div>
            </div>
          </button>
        </div>
        <img className="img" alt="Vector" src="vector-200-2.svg" />
      </div>
      <div className="section">
        <div className="container">
          <div className="text-wrapper">팀 관리자 변경</div>
          <button className="primary-wrapper">
            <div className="title-wrapper">
              <div className="title-2">변경</div>
            </div>
          </button>
        </div>
        <img className="vector-2" alt="Vector" src="vector-200-3.svg" />
      </div>
      <div className="section">
        <div className="container">
          <div className="text-wrapper">팀 멤버 추방</div>
          <div className="selection">
            <div className="div">추방할 멤버 이름</div>
            <div className="chip-group">
              <div className="chip">
                <div className="text">멤버 1</div>
              </div>
              <div className="chip">
                <div className="text">멤버 2</div>
              </div>
              <div className="chip">
                <div className="text">멤버 3</div>
              </div>
            </div>
          </div>
          <button className="primary-wrapper">
            <div className="title-wrapper">
              <div className="title-2">추방</div>
            </div>
          </button>
        </div>
        <img className="img" alt="Vector" src="vector-200-4.svg" />
      </div>
      <div className="section">
        <div className="container">
          <div className="text-wrapper">팀 삭제</div>
          <div className="input">
            <div className="div">팀 삭제 확인</div>
            <div className="textfield" />
          </div>
          <button className="primary-wrapper">
            <div className="title-wrapper">
              <div className="title-2">삭제</div>
            </div>
          </button>
        </div>
        <img className="img" alt="Vector" src="vector-200-5.svg" />
      </div>
    </div>
  );
};