import React from "react";
import styled from 'styled-components';

const StyledPage = styled.div`
  align-items: center;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  padding: 80px 0px 0px;
  position: relative;
`;

const TopBar = styled.div`
  align-items: center;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 6px #0000001f;
  display: flex;
  gap: 20px;
  height: 80px;
  justify-content: center;
  left: 0;
  padding: 20px;
  position: absolute;
  top: 0;
  width: 1440px;
`;

const Rectangle = styled.div`
  background-color: #0000001a;
  border-radius: 100px;
  height: 40px;
  position: relative;
  width: 40px;
`;

const StyledTitle = styled.div`
  color: #000000;
  flex: 1;
  font-family: "Roboto-Medium", Helvetica;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 36px;
  position: relative;
`;

const Navigation = styled.div`
  align-items: center;
  background-color: #FFFFFF;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 40px;
  justify-content: center;
  position: relative;
`;

const Tab = styled.div`
  color: #000000;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const TextField = styled.div`
  align-items: center;
  border: 1px solid;
  border-color: #0000001a;
  border-radius: 6px;
  display: flex;
  gap: 4px;
  justify-content: flex-end;
  padding: 8px;
  position: relative;
  width: 200px;
`;

const Text = styled.div`
  color: #00000080;
  flex: 1;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  position: relative;
`;

const IconSearch = styled.div`
  height: 20px;
  position: relative;
  width: 20px;
`;

const Section = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 60px;
  justify-content: center;
  overflow: hidden;
  padding: 60px 170px;
  position: relative;
  width: 100%;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 24px;
  position: relative;
`;

const TextWrapper = styled.div`
  color: #000000;
  font-family: "Roboto-Bold", Helvetica;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 48px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 520px;
`;

const Description = styled.p`
  color: #000000;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  position: relative;
  text-align: center;
  width: 520px;
`;

const Input = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  position: relative;
  width: 360px;
`;

const Div = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: stretch;
  background-color: #FFFFFF;
  border: 1px solid;
  border-color: #0000001a;
  border-radius: 6px;
  color: #00000080;
  display: -webkit-box;
  flex: 1;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  overflow: hidden;
  padding: 8px 12px;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

const Button = styled.div`
  all: unset;
  align-items: flex-start;
  box-sizing: border-box;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;

const Primary = styled.div`
  align-items: center;
  background-color: #000000;
  border-radius: 8px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  position: relative;
  width: 160px;
`;

const Title2 = styled.div`
  color: #FFFFFF;
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

const Vector = styled.img`
  height: 1px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 348px;
  width: 1440px;
`;

const ContainerWrapper = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 60px;
  justify-content: center;
  padding: 60px;
  position: relative;
  width: 100%;
`;

const TitleWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 60px;
  height: 100px;
  justify-content: center;
  position: relative;
`;

const P = styled.p`
  align-self: stretch;
  color: #000000;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 362px;
`;

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