import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  padding: 80px 0 0 0;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 170px;
  padding-right: 170px;
  padding-top: 60px;
  padding-bottom: 60px;
  justify-content: center;
  align-items: center;
  gap: 60px;
  display: inline-flex;
`;

const ContentContainer = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  display: inline-flex;
`;

const Title = styled.div`
  width: 520px;
  text-align: center;
  color: black;
  font-size: 40px;
  font-family: "Roboto";
  font-weight: 700;
  line-height: 48px;
  word-wrap: break-word;
`;

const Description = styled.div`
  width: 520px;
  text-align: center;
  color: black;
  font-size: 16px;
  font-family: "Roboto";
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
  color: rgba(0, 0, 0, 0.5);
`;

const AnswerContainer = styled.div`
  align-self: stretch;
  height: 408px;
  padding-top: 40px;
  padding-bottom: 40px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  display: flex;
`;

const Answer = styled.div`
  align-self: stretch;
  height: 52px;
  padding-top: 12px;
  padding-bottom: 12px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  display: flex;
`;

const AnswerText = styled.button`
  align-self: stretch;
  text-align: center;
  color: ${(props) => props.color || "black"};
  font-size: 20px;
  font-family: "Roboto";
  font-weight: ${(props) => props.fontWeight || "400"};
  line-height: 28px;
  word-wrap: break-word;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    font-weight: 600;
    color: blue;
  }
`;

const Confirmation = styled.div`
  height: 48px;
  padding: 12px;
  border-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ConfirmationText = styled.div`
  color: ${(props) => props.color || "black"};
  font-size: 24px;
  font-family: "Roboto";
  font-weight: 700;
  line-height: 24px;
  word-wrap: break-word;
`;

const ButtonContainer = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 50px;
  display: inline-flex;
`;

const Button = styled.button`
  width: 160px;
  padding: 12px;
  border-radius: 8px;
  border: 1px black solid;
  background: ${(props) => props.background || "none"};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: ${(props) => (props.background === "black" ? 0.7 : 0 || "none")};
    background-color: ${(props) =>
      props.background === "black" ? "none" : "none" || "none"};
  }
`;

const ButtonText = styled.div`
  color: ${(props) => props.color || "black"};
  font-size: 16px;
  font-family: "Roboto";
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
`;

export default function QuizQuestion() {
  return (
    <Wrap>
      <MainContainer>
        <ContentContainer>
          <Title>My Question</Title>
          <Description>Choose the correct answer</Description>
          <AnswerContainer>
            <Answer>
              <AnswerText>1. Clearness</AnswerText>
            </Answer>
            <Answer>
              <AnswerText color="#1400FF" fontWeight="700">
                2. Clearness
              </AnswerText>
            </Answer>
            <Answer>
              <AnswerText>3. Cloudiness</AnswerText>
            </Answer>
            <Answer>
              <AnswerText>4. Rain</AnswerText>
            </Answer>
          </AnswerContainer>
          <Confirmation>
            <ConfirmationText color="#1400FF">맞았습니다!</ConfirmationText>
          </Confirmation>
          <ButtonContainer>
            <Button>
              <ButtonText>Board</ButtonText>
            </Button>
            <Button>
              <ButtonText>Pass</ButtonText>
            </Button>
            <Button background="black">
              <ButtonText color="white">Solve</ButtonText>
            </Button>
          </ButtonContainer>
        </ContentContainer>
      </MainContainer>
    </Wrap>
  );
}
