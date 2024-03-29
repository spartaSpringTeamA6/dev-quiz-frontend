import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  PATH_QUIZ_BOARD,
  PATH_QUIZ_LIST,
  PATH_QUIZ_RESULT,
} from "../../constants";
import { useCookies } from "react-cookie";
import useUserStore from "../../stores/user.store";
import { quizSubmitAnswerApi, quizSubmitPassApi } from "../../apis/quizApis";
import ProgressBar from "react-bootstrap/ProgressBar";

const Wrap = styled.div`
  padding: 80px 0;
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

const ProgressWrapper = styled.div`
  width: 500px;
`;

const SubTitle = styled.div`
  text-align: center;
  color: black;
  font-size: 20px;
  font-family: "Roboto";
  font-weight: 700;
  line-height: 20px;
  word-wrap: break-word;
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

const SubmitAnswerText = styled.text`
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

export default function QuizList(props) {
  const [cookies] = useCookies();
  const { user } = useUserStore();
  const [userToken, setUserToken] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const index = location.state?.index;
  const quizzes = location.state?.quizzes;
  const correct = location.state?.correct;
  const pass = location.state?.pass;
  const [progress, setProgress] = useState();
  const [submitAnswer, setSubmitAnswer] = useState(false);
  const [selectAnswer, setSelectAnswer] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState();

  const clickPassHandler = async () => {
    setSelectAnswer(0);
    const response = await quizSubmitPassApi(quizzes[index].id);
    setCorrectAnswer(response.data.correctAnswer);
    setSubmitAnswer(true);
  };

  const clickSolveHandler = async (answer) => {
    if (selectAnswer === 0) {
      return;
    }
    const data = {
      choiceSequence: answer,
    };
    const response = await quizSubmitAnswerApi(quizzes[index].id, data);
    setCorrectAnswer(response.data.correctAnswer);
    setSubmitAnswer(true);
  };

  const clickNextHandler = async () => {
    setSubmitAnswer(false);
    if (selectAnswer === 0) {
      moveNextPageHandler(correct, pass + 1);
    } else if (correctAnswer === selectAnswer) {
      moveNextPageHandler(correct + 1, pass);
    } else {
      moveNextPageHandler(correct, pass);
    }
  };

  const moveNextPageHandler = (c, p) => {
    setSelectAnswer(0);
    setCorrectAnswer(0);
    if (index + 1 >= 10) {
      navigate(PATH_QUIZ_RESULT, { state: { correct: c, pass: p } });
    } else {
      navigate(PATH_QUIZ_LIST, {
        state: { quizzes, index: index + 1, correct: c, pass: p },
      });
      return;
    }
  };

  const moveBoardHandler = (id) => {
    navigate(PATH_QUIZ_BOARD.replace(":quizId", id));
  };

  const customColor = (click) => {
    if (selectAnswer === click && selectAnswer === correctAnswer) {
      return "blue";
    } else {
      if (correctAnswer === click) {
        return "blue";
      }
      if (selectAnswer === click) {
        return "red";
      }
    }
  };

  const customFontWeight = (click) => {
    if (selectAnswer === click && selectAnswer === correctAnswer) {
      return "600";
    } else {
      if (correctAnswer === click) {
        return "600";
      }
      if (selectAnswer === click) {
        return "600";
      }
    }
  };

  useEffect(() => {
    if (!submitAnswer) {
      setProgress(index * 10);
    } else {
      setProgress(index * 10 + 10);
    }
  }, [submitAnswer]);

  useEffect(() => {
    const token = cookies.access_token;
    if (token) {
      setUserToken(token);
    }
  }, [user]);

  return (
    <>
      {quizzes.length > 0 && (
        <Wrap>
          <MainContainer>
            <ContentContainer>
              <ProgressWrapper>
                <ProgressBar
                  style={{
                    height: "20px",
                    borderRadius: "10px",
                  }}
                  now={progress}
                />
              </ProgressWrapper>
              <SubTitle>문제 {quizzes[index].id}번</SubTitle>
              <Title>{quizzes[index].quizTitle}</Title>
              <Description>Choose the correct answer</Description>
              <AnswerContainer>
                <Answer>
                  {!submitAnswer ? (
                    <AnswerText
                      onClick={() => setSelectAnswer(1)}
                      color={selectAnswer === 1 && "blue"}
                      fontWeight={selectAnswer === 1 && "600"}
                    >
                      {quizzes[index].quizChoices[0].choiceContent}
                    </AnswerText>
                  ) : (
                    <SubmitAnswerText
                      color={() => customColor(1)}
                      fontWeight={() => customFontWeight(1)}
                    >
                      {quizzes[index].quizChoices[0].choiceContent}
                    </SubmitAnswerText>
                  )}
                </Answer>
                <Answer>
                  {!submitAnswer ? (
                    <AnswerText
                      onClick={() => setSelectAnswer(2)}
                      color={selectAnswer === 2 && "blue"}
                      fontWeight={selectAnswer === 2 && "600"}
                    >
                      {quizzes[index].quizChoices[1].choiceContent}
                    </AnswerText>
                  ) : (
                    <SubmitAnswerText
                      color={() => customColor(2)}
                      fontWeight={() => customFontWeight(2)}
                    >
                      {quizzes[index].quizChoices[1].choiceContent}
                    </SubmitAnswerText>
                  )}
                </Answer>
                <Answer>
                  {!submitAnswer ? (
                    <AnswerText
                      onClick={() => setSelectAnswer(3)}
                      color={selectAnswer === 3 && "blue"}
                      fontWeight={selectAnswer === 3 && "600"}
                    >
                      {quizzes[index].quizChoices[2].choiceContent}
                    </AnswerText>
                  ) : (
                    <SubmitAnswerText
                      color={() => customColor(3)}
                      fontWeight={() => customFontWeight(3)}
                    >
                      {quizzes[index].quizChoices[2].choiceContent}
                    </SubmitAnswerText>
                  )}
                </Answer>
                <Answer>
                  {!submitAnswer ? (
                    <AnswerText
                      onClick={() => setSelectAnswer(4)}
                      color={selectAnswer === 4 && "blue"}
                      fontWeight={selectAnswer === 4 && "600"}
                    >
                      {quizzes[index].quizChoices[3].choiceContent}
                    </AnswerText>
                  ) : (
                    <SubmitAnswerText
                      color={() => customColor(4)}
                      fontWeight={() => customFontWeight(4)}
                    >
                      {quizzes[index].quizChoices[3].choiceContent}
                    </SubmitAnswerText>
                  )}
                </Answer>
              </AnswerContainer>
              <Confirmation>
                {submitAnswer && (
                  <>
                    {selectAnswer === 0 ? (
                      <ConfirmationText color="green">
                        넘어갑니다!
                      </ConfirmationText>
                    ) : (
                      <>
                        {selectAnswer === correctAnswer ? (
                          <ConfirmationText color="blue">
                            맞았습니다!
                          </ConfirmationText>
                        ) : (
                          <ConfirmationText color="red">
                            틀렸습니다!
                          </ConfirmationText>
                        )}
                      </>
                    )}
                  </>
                )}
              </Confirmation>
              <ButtonContainer>
                {!submitAnswer ? (
                  <>
                    <Button onClick={() => clickPassHandler()}>
                      <ButtonText>Pass</ButtonText>
                    </Button>
                    <Button
                      background="black"
                      onClick={() => clickSolveHandler(selectAnswer)}
                    >
                      <ButtonText color="white">Solve</ButtonText>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      background="black"
                      onClick={() => clickNextHandler()}
                    >
                      <ButtonText color="white">Next</ButtonText>
                    </Button>
                  </>
                )}
              </ButtonContainer>
              <BoardTextButton
                onClick={() => moveBoardHandler(quizzes[index].id)}
              >
                Ask on the Board
              </BoardTextButton>
            </ContentContainer>
          </MainContainer>
        </Wrap>
      )}
    </>
  );
}
