import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { PATH_BOARD } from "../../constants";
import { useCookies } from "react-cookie";
import useUserStore from "../../stores/user.store";

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
  text-align: center;
  color: black;
  font-size: 30px;
  font-family: "Roboto";
  font-weight: 700;
  line-height: 48px;
  word-wrap: break-word;
`;

const Description = styled.div`
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
  flex-wrap: nowrap;
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

const BoardTextButton = styled.button`
  width: 520px;
  text-align: center;
  color: black;
  font-size: 16px;
  font-family: "Roboto";
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: underline;
  background-color: transparent;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    border: none;
    color: black;
  }
`;

const ToLink = styled(Link)`
  &:hover {
    text-decoration-line: none;
  }
`;

export default function QuizQuestion(props) {
  const [cookies] = useCookies();
  const { user } = useUserStore();
  const [userToken, setUserToken] = useState("");

  const location = useLocation();
  const quizzes = location.state?.quizzes;
  const [isSolved, setIsSolved] = useState();
  const [selectAnswer, setSelectAnswer] = useState("");

  useEffect(() => {
    const token = cookies.userToken;
    if (token) {
      setUserToken(token);
    }
  }, [user]);

  return (
    <>
      {quizzes.length > 0 ? (
        <Wrap>
          <MainContainer>
            <ContentContainer>
              <Title>{quizzes[0].question}</Title>
              <Description>Choose the correct answer</Description>
              <AnswerContainer>
                <Answer>
                  <AnswerText
                    onClick={() => {
                      setSelectAnswer("1");
                    }}
                  >
                    1. {quizzes[0].example[0]}
                  </AnswerText>
                </Answer>
                <Answer>
                  <AnswerText
                    onClick={() => {
                      setSelectAnswer("2");
                    }}
                  >
                    2. {quizzes[0].example[1]}
                  </AnswerText>
                </Answer>
                <Answer>
                  <AnswerText
                    onClick={() => {
                      setSelectAnswer("3");
                    }}
                  >
                    3. {quizzes[0].example[2]}
                  </AnswerText>
                </Answer>
                <Answer>
                  <AnswerText
                    onClick={() => {
                      setSelectAnswer("4");
                    }}
                  >
                    4. {quizzes[0].example[3]}
                  </AnswerText>
                </Answer>
              </AnswerContainer>
              <ButtonContainer>
                <Button>
                  <ButtonText>Pass</ButtonText>
                </Button>
                <Button background="black">
                  <ButtonText color="white">Solve</ButtonText>
                </Button>
              </ButtonContainer>
              <ToLink to={PATH_BOARD}>
                <BoardTextButton>Ask on the Board</BoardTextButton>
              </ToLink>
            </ContentContainer>
          </MainContainer>
        </Wrap>
      ) : (
        <></>
      )}
    </>
  );
}
