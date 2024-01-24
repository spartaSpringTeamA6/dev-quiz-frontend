import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { quizGetQuizApi } from "../../apis/quizApis";
import { boardGetListApi } from "../../apis/boardApis";

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
  gap: 24px;
  position: relative;
  width: 800px;
`;

const Title = styled.div`
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 48px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  width: 520px;
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
  gap: 10px;
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
  width: 800px;
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
  gap: 8px;
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

const Title3 = styled.div`
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 34px;
  margin-top: -1px;
  position: relative;
  width: 515px;
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

const Img = styled.img`
  height: 1px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 360px;
  width: 1440px;
`;

export default function QuizBoardList() {
  const navigate = useNavigate();
  const { quizId } = useParams();

  const [quiz, setQuiz] = useState();
  const [boards, setBoards] = useState();

  const getQuizHandler = async () => {
    return await quizGetQuizApi(quizId).data;
  };

  const getBoardsHandler = async () => {
    return await boardGetListApi(quizId).data;
  };

  useEffect(() => {
    setQuiz(getQuizHandler);
    setBoards(getBoardsHandler);
  }, []);

  return (
    <>
      {quiz && boards && (
        <IndexWrapper>
          <Section>
            <Container>
              <Title>문제 {quiz.id}번</Title>
              <Description>문제 내용</Description>
              <Div>
                <TextWrapper>문항</TextWrapper>
                <Description>문항</Description>
                <Description>문항</Description>
                <Description>문항</Description>
              </Div>
              <Button>
                <Primary>
                  <Title2>게시글 생성</Title2>
                </Primary>
              </Button>
            </Container>
          </Section>
          <Section>
            <ListWrapper>
              <List>
                <Row>
                  <Article>
                    <Frame>
                      <Frame2>
                        <Subtitle>1231</Subtitle>
                        <Title3>
                          ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
                        </Title3>
                        <User />
                        <Subtitle2>김철수</Subtitle2>
                        <User2>
                          <IconButtons>
                            <Icon>👍</Icon>
                            <Icon2>111</Icon2>
                          </IconButtons>
                          <IconButtons>
                            <Icon>💬</Icon>
                            <Icon2>111</Icon2>
                          </IconButtons>
                        </User2>
                      </Frame2>
                    </Frame>
                    <Frame>
                      <Frame2>
                        <Subtitle>1231</Subtitle>
                        <Title3>
                          ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
                        </Title3>
                        <User />
                        <Subtitle2>김철수</Subtitle2>
                        <User2>
                          <IconButtons>
                            <Icon>👍</Icon>
                            <Icon2>111</Icon2>
                          </IconButtons>
                          <IconButtons>
                            <Icon>💬</Icon>
                            <Icon2>111</Icon2>
                          </IconButtons>
                        </User2>
                      </Frame2>
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
