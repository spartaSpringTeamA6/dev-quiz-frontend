import React from "react";
import styled from "styled-components";
import { PATH_QUIZ } from "../../constants";
import { Link } from "react-router-dom";
import { img_dogzip } from "../../assets/images";
import { authReissueApi } from "../../apis/authApis";

const IndexWrapper = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 600px;
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
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 400px;
`;

const Title = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 48px;
  margin-top: -1px;
  position: relative;
`;

const TextWrapper = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  position: relative;
`;

const ButtonGroup = styled.div`
  justify-content: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 12px;
  position: relative;
  width: 100%;
  padding: 0 auto;
`;

const PrimaryButton = styled.div`
  align-items: center;
  background-color: #000000;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  position: relative;
  width: 160px;
`;

const ButtonText = styled.div`
  color: ${(props) => (props.primary ? "#ffffff" : "#000000")};
  font-family: "Roboto", Helvetica;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const ImageContainer = styled.div`
  align-items: flex-start;
  display: flex;
  height: 400px;
  padding: 4px 0px;
  position: relative;
  width: 400px;
`;

const Image = styled.img`
  /* align-self: stretch; */
  background-color: #d8d8d880;
  border-radius: 6px;
  flex: 1;
  flex-grow: 1;
  position: relative;
  width: 380px;
  height: 380px;
`;

const ToLink = styled(Link)`
  &:hover {
    text-decoration-line: none;
  }
`;

export default function Home() {
  return (
    <IndexWrapper>
      <Section>
        <Container>
          <Title>Welcome to DevQuiz</Title>
          <TextWrapper>Computer Science Quizzes</TextWrapper>
          <ButtonGroup>
            <ToLink to={PATH_QUIZ}>
              <PrimaryButton>
                <ButtonText primary>Start Quiz</ButtonText>
              </PrimaryButton>
            </ToLink>
          </ButtonGroup>
        </Container>
        <ImageContainer>
          <Image alt="Dog Foot Zip" src={img_dogzip} />
        </ImageContainer>
      </Section>
    </IndexWrapper>
  );
}
