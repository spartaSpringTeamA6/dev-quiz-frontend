import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PATH_BOARD, PATH_HOME, PATH_QUIZ_QUESTION } from "../../constants";
import { useCookies } from "react-cookie";
import useUserStore from "../../stores/user.store";
import { quizSubmitApi } from "../../apis/quizApis";

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

  const navigate = useNavigate();
  const location = useLocation();

  const index = location.state?.index;
  const quizzes = location.state?.quizzes;
  const [submitAnswer, setSubmitAnswer] = useState(false);
  const [selectAnswer, setSelectAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");

  const clickPassHandler = async () => {
    setSelectAnswer("0");
    const data = {
      answer: "0",
    };
    const result = await quizSubmitApi(quizzes[index].id, data);
    setCorrectAnswer(result.data.correctAnswer);
    setSubmitAnswer(true);
  };

  const clickSolveHandler = async (answer) => {
    const data = {
      answer: answer,
    };
    const result = await quizSubmitApi(quizzes[index].id, data);
    setCorrectAnswer(result.data.correctAnswer);
    setSubmitAnswer(true);
  };

  const clickNextHandler = async () => {
    if (index + 1 >= 10) {
      navigate(PATH_HOME);
      return;
    }
    setSubmitAnswer(false);
    setSelectAnswer("");
    setCorrectAnswer("");
    navigate(PATH_QUIZ_QUESTION, {
      state: { quizzes, index: index + 1 },
    });
  };

  useEffect(() => {
    const token = cookies.userToken;
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
              <Title>{quizzes[index].question}</Title>
              <Description>Choose the correct answer</Description>
              <AnswerContainer>
                <Answer>
                  <AnswerText
                    onClick={() => setSelectAnswer("1")}
                    color={
                      !submitAnswer
                        ? selectAnswer == "1"
                          ? "blue"
                          : "black"
                        : correctAnswer == "1" &&
                          (selectAnswer == "1" ? "blue" : "red")
                    }
                    fontWeight={selectAnswer == "1" ? "600" : "400"}
                  >
                    {quizzes[index].example[0]}
                  </AnswerText>
                </Answer>
                <Answer>
                  <AnswerText
                    onClick={() => setSelectAnswer("2")}
                    color={selectAnswer == "2" ? "blue" : "black"}
                    fontWeight={selectAnswer == "2" ? "600" : "400"}
                  >
                    {quizzes[index].example[1]}
                  </AnswerText>
                </Answer>
                <Answer>
                  <AnswerText
                    onClick={() => setSelectAnswer("3")}
                    color={selectAnswer == "3" ? "blue" : "black"}
                    fontWeight={selectAnswer == "3" ? "600" : "400"}
                  >
                    {quizzes[index].example[2]}
                  </AnswerText>
                </Answer>
                <Answer>
                  <AnswerText
                    onClick={() => setSelectAnswer("4")}
                    color={selectAnswer == "4" ? "blue" : "black"}
                    fontWeight={selectAnswer == "4" ? "600" : "400"}
                  >
                    {quizzes[index].example[3]}
                  </AnswerText>
                </Answer>
              </AnswerContainer>
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
              <ToLink to={PATH_BOARD}>
                <BoardTextButton>Ask on the Board</BoardTextButton>
              </ToLink>
            </ContentContainer>
          </MainContainer>
        </Wrap>
      )}
    </>
  );
}
