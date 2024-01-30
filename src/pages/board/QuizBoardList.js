import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { quizGetQuizApi } from "../../apis/quizApis";
import { boardGetListApi } from "../../apis/boardApis";
import {
  PATH_HOME,
  PATH_QUIZ_BOARD_INFO,
  PATH_QUIZ_BOARD_POST,
} from "../../constants";
import useUserStore from "../../stores/user.store";

const IndexWrapper = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Section = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 60px;
  justify-content: center;
  overflow: hidden;
  padding: 60px 0px;
  position: relative;
  width: 100%;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 30px;
  position: relative;
  width: 800px;
`;

const Title = styled.div`
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 520px;
`;

const Title3 = styled.div`
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 36px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 1000px;
`;

const Description = styled.div`
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  position: relative;
  text-align: center;
  width: 520px;
`;

const Div = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  position: relative;
  width: 100%;
`;

const TextWrapper = styled.div`
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 520px;
`;

const Button = styled.button`
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
  color: #ffffff;
  font-family: "Roboto", Helvetica;
  font-size: 14px;
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
  top: 438px;
  width: 1440px;
`;

const ListWrapper = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  position: relative;
`;

const List = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  padding: 20px 0px;
  position: relative;
  width: 1000px;
`;

const Row = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  position: relative;
  width: 100%;
`;

const Article = styled.div`
  align-items: center;
  align-self: stretch;
  border: 1px solid;
  border-color: #0000001a;
  border-radius: 6px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  position: relative;
  width: 100%;
`;

const Frame = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 100%;
`;

const Frame2 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 14px;
  padding: 4px 0px;
  position: relative;
  width: 100%;
`;

const Subtitle = styled.div`
  color: #00000080;
  font-family: "Roboto", Helvetica;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 34px;
  margin-top: -1px;
  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
`;

const BoardTitle = styled.button`
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 34px;
  margin-top: -1px;
  position: relative;
  width: 850px;
  border: none;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  &:focus {
    outline: none;
    border-color: black;
    color: black;
  }
  text-align: left;
`;

const User = styled.div`
  flex: 1;
  flex-grow: 1;
  position: relative;
`;

const Subtitle2 = styled.div`
  color: #00000080;
  font-family: "Roboto", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 34px;
  margin-top: -1px;
  position: relative;
  text-align: right;
  white-space: nowrap;
  width: fit-content;
`;

const User2 = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 14px;
  padding: 4px 0px;
  position: relative;
`;

const IconButtons = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  position: relative;
`;

const Icon = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #000000;
  display: -webkit-box;
  font-family: "Roboto", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 24px;
`;

const Icon2 = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #000000;
  display: -webkit-box;
  font-family: "Roboto", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: fit-content;
`;

const BoardTitle2 = styled.div`
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 48px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

export default function QuizBoardList() {
  const navigate = useNavigate();

  const { quizId } = useParams();

  const [quiz, setQuiz] = useState();
  const [boards, setBoards] = useState();

  const { user } = useUserStore();

  const moveToCreateBoard = () => {
    navigate(PATH_QUIZ_BOARD_POST.replace(":quizId", quizId));
  };

  const moveToBoardInfo = (boardId) => {
    navigate(
      PATH_QUIZ_BOARD_INFO.replace(":quizId", quizId).replace(
        ":boardId",
        boardId
      )
    );
  };

  const getQuizHandler = async () => {
    const response = await quizGetQuizApi(quizId);

    if (response.status === 200) {
      setQuiz(response.data);
    } else {
      alert(response.message);
      navigate(PATH_HOME);
    }
  };

  const getBoardsHandler = async () => {
    const response = await boardGetListApi(quizId);
    if (response.status === 200) {
      setBoards(response.data);
    } else {
      alert(response.message);
      navigate(PATH_HOME);
    }
  };

  useEffect(() => {
    getQuizHandler();
    getBoardsHandler();
  }, []);

  return (
    <>
      {quiz && (
        <IndexWrapper>
          <Section>
            <Container>
              <Title>문제 {quiz.id}번</Title>
              <Title3>{quiz.question}</Title3>
              <Div>
                <Description>{quiz.example[0]}</Description>
                <Description>{quiz.example[1]}</Description>
                <Description>{quiz.example[2]}</Description>
                <Description>{quiz.example[3]}</Description>
              </Div>
              {user && (
                <Button onClick={() => moveToCreateBoard()}>
                  <Primary>
                    <Title2>Create Board</Title2>
                  </Primary>
                </Button>
              )}
            </Container>
          </Section>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#0000001f",
            }}
          ></div>
          <Section>
            <ListWrapper>
              <List>
                <BoardTitle2>Board</BoardTitle2>
                <Row>
                  <Article>
                    <Frame>
                      {boards &&
                        boards.map((board, idx) => (
                          <Frame2
                            key={board.id}
                            onClick={() => moveToBoardInfo(board.boardId)}
                          >
                            <Subtitle>{idx + 1}</Subtitle>
                            <BoardTitle>{board.title}</BoardTitle>
                            <User />
                            <Subtitle2>{board.username}</Subtitle2>
                            <User2>
                              <IconButtons>
                                <Icon>💬</Icon>
                                <Icon2>{board.countComment}</Icon2>
                              </IconButtons>
                            </User2>
                          </Frame2>
                        ))}
                    </Frame>
                  </Article>
                </Row>
              </List>
            </ListWrapper>
          </Section>
        </IndexWrapper>
      )}
    </>
  );
}
