import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { PATH_QUIZ } from "../../constants";

const StyledPage = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 1072px;
  padding: 80px 0px 0px;
  position: relative;
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
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 1000px;
`;

const Title = styled.div`
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

const List = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  padding: 40px 0px;
  position: relative;
  width: 100%;
`;

const Item = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 12px 0px;
  position: relative;
  width: 100%;
`;

const Frame = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  position: relative;
  width: 100%;
`;

const TextWrapper = styled.div`
  align-self: stretch;
  color: ${(props) => props.color || "black"};
  font-family: "Roboto-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
  text-align: center;
`;

const Score = styled.div`
  color: ${(props) => props.color || "black"};
  font-family: "Roboto-Bold", Helvetica;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 48px;
  position: relative;
  text-align: center;
  width: 520px;
`;

const Primary = styled.button`
  align-items: center;
  background-color: #000000;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  position: relative;
  width: 160px;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Title2 = styled.div`
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

const ToLink = styled(Link)`
  &:hover {
    text-decoration-line: none;
  }
`;

export default function QuizResult(props) {
  const location = useLocation();
  const correct = location.state?.correct;
  const pass = location.state?.pass;

  return (
    <>
      {correct != undefined && pass != undefined && (
        <StyledPage>
          <Section>
            <Container>
              <Title>Quiz Result</Title>
              <Description>Thank you for solving the questions</Description>
              <List>
                <Item>
                  <Frame>
                    <TextWrapper>total</TextWrapper>
                  </Frame>
                  <Score>10</Score>
                </Item>

                <Item>
                  <Frame>
                    <TextWrapper color={"blue"}>correct</TextWrapper>
                  </Frame>
                  <Score color={"blue"}>{correct}</Score>
                </Item>
                <Item>
                  <Frame>
                    <TextWrapper color={"red"}>incorrect</TextWrapper>
                  </Frame>
                  <Score color={"red"}>{10 - correct - pass}</Score>
                </Item>
                <Item>
                  <Frame>
                    <TextWrapper color={"dartgray"}>pass</TextWrapper>
                  </Frame>
                  <Score color={"dartgray"}>{pass}</Score>
                </Item>
              </List>
              <ToLink to={PATH_QUIZ}>
                <Primary>
                  <Title2>return;</Title2>
                </Primary>
              </ToLink>
            </Container>
          </Section>
        </StyledPage>
      )}
    </>
  );
}
