import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  // backgroundColor: "rgba(0,0,0,0.05)";
  box-shadow: rgba(0, 0, 0, 0.06) 0px -5px 10px;
  top: -10px;
  position: relative;
`;

const Section = styled.div`
  align-items: center;
  display: flex;
  gap: 60px;
  justify-content: center;
  padding: 60px;
  position: relative;
`;

const Container = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 30px;
  justify-content: center;
  position: relative;
  flex-direction: column;
`;

const Container2 = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 60px;
  justify-content: center;
  position: relative;
  font-size: 20px;
  line-height: 20px;
`;

const Div = styled.div`
  align-self: stretch;
  color: rgba(0, 0, 0, 0.7);
  font-family: "Roboto-Regular", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20px;
  position: relative;
  text-align: center;
`;

const Div2 = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: "Roboto-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20px;
  position: relative;
  text-align: center;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Section>
        <Container>
          <Container2>
            <Div>개인정보 처리방침</Div>
            <Div>홈페이지 이용약관</Div>
            <Div>오픈소스 라이선스</Div>
          </Container2>
          <Container2>
            <Div2>DevQuiz Github</Div2>
            <Div2>Version 1.0.0</Div2>
          </Container2>
          <Container2>
            <Div>Copyright © 2024 DevQiuz. All Right Reserved.</Div>
          </Container2>
        </Container>
      </Section>
    </Wrapper>
  );
}
