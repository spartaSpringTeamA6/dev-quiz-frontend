import React from "react";
import styled from "styled-components";
import { logo_devquiz } from "../../../assets/images";

const TopBar = styled.div`
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px #0000001f;
  display: flex;
  gap: 20px;
  height: 80px;
  justify-content: center;
  padding: 20px;
  position: relative;
  margin: 0 0 10px 0;
`;

const DevQuizLogo = styled.img`
  height: 60px;
  margin-bottom: -10px;
  margin-top: -10px;
  position: relative;
  width: 60px;
`;

const TitleButton = styled.button`
  color: #000000;
  font-family: "Roboto-Medium", Helvetica;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 36px;
  position: relative;
  width: 130px;
  border: none;
  background-color: white;
  &:focus {
    outline: none;
  }
`;

const NavBar = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 20px;
  justify-content: center;
  position: relative;
`;

const Tab = styled.button`
  color: #000000;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  padding: 15px;
  width: 80px;
  background-color: #ffffff;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    font-weight: 600;
  }
`;

const TextWrapper = styled.div`
  color: #000000;
  flex: 1;
  font-family: "Roboto-Medium", Helvetica;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 36px;
  position: relative;
`;

const PrimaryButton = styled.div`
  align-items: center;
  background-color: #000000;
  border-radius: 8px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  position: relative;
  width: 100px;
`;

const PrimaryButtonText = styled.div`
  color: #ffffff;
  font-family: "Roboto-Medium", Helvetica;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

export default function Header() {
  return (
    <TopBar>
      <DevQuizLogo alt="Devquiz logo" src={logo_devquiz} />
      <TitleButton>DevQuiz</TitleButton>
      <NavBar>
        <Tab>Quiz</Tab>
        <Tab>Rank</Tab>
        <Tab>Board</Tab>
        <Tab>Group</Tab>
      </NavBar>
      <TextWrapper>{""}</TextWrapper>
      <button className="button">
        <PrimaryButton>
          <PrimaryButtonText>Login</PrimaryButtonText>
        </PrimaryButton>
      </button>
    </TopBar>
  );
}
