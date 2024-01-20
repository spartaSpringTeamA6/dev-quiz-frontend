import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 60px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  display: inline-flex;
`;

const StyledTitle = styled.div`
  color: #000000;
  font-family: "Roboto-Bold", Helvetica;
  font-size: 40px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
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
`;

const ButtonContainer = styled.div`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
  display: inline-flex;
`;

const Button = styled.button`
  width: 160px;
  padding: 12px;
  border-radius: 8px;
  border: 1px black solid;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  background: none;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const ButtonText = styled.div`
  color: black;
  font-size: 16px;
  font-family: "Roboto";
  font-weight: 500;
  line-height: 24px;
  word-wrap: break-word;
`;

const NonMemberButton = styled.button`
  text-align: center;
  color: rgba(0, 0, 0, 0.38);
  font-size: 12px;
  font-family: "Roboto";
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    color: black;
  }
`;

export default function Login() {
  return (
    <>
      <Container>
        <StyledTitle>Welcome to DevQuiz</StyledTitle>
      </Container>
      <Container>
        <Title>Login</Title>
        <Description>Welcome to our login page!</Description>
        <ButtonContainer>
          <Button>
            <ButtonText>Google</ButtonText>
          </Button>
          <Button>
            <ButtonText>Github</ButtonText>
          </Button>
        </ButtonContainer>
        <NonMemberButton>start as a non-member</NonMemberButton>
      </Container>
    </>
  );
}
