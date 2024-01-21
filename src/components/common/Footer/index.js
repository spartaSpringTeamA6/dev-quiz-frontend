import React from "react";
import styled from "styled-components";

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
  gap: 60px;
  height: 40px;
  justify-content: center;
  position: relative;
`;

const Div = styled.div`
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
`;

export default function Footer() {
  return (
    <Section>
      <Container>
        <Div>Contact us</Div>
        <Div>About</Div>
        <Div>Privacy Policy</Div>
      </Container>
    </Section>
  );
}
