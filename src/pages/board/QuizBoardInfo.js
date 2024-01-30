import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { quizGetQuizApi } from "../../apis/quizApis";
import { boardGetApi } from "../../apis/boardApis";
import {
  commentCreateApi,
  commentGetListApi,
  commentLikeApi,
  commentUnlikeApi,
} from "../../apis/commentApis";
import { userGetMyInfoApi } from "../../apis/userApis";
import { PATH_HOME, PATH_QUIZ_BOARD_INFO } from "../../constants";
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
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 60px;
  justify-content: center;
  overflow: hidden;
  padding: 60px 0px;
  position: relative;
`;

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 800px;
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
  text-align: left;
`;

const Subtitle = styled.div`
  align-self: stretch;
  color: #00000080;
  font-family: "Roboto", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20px;
  position: relative;
  text-align: left;
`;

const Frame = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 8px;
  position: relative;
  width: 800px;
`;

const TextWrapper = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
  text-align: left;
`;

const Div = styled.div`
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  overflow: hidden;
  padding: 60px 0px;
  position: relative;
`;

const Container2 = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 14px;
  position: relative;
  width: 800px;
`;

const Title2 = styled.div`
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

const Subtitle2 = styled.div`
  color: #00000080;
  font-family: "Roboto", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const Card = styled.div`
  align-items: center;
  align-self: stretch;
  background-color: #0000000d;
  border-radius: 6px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  overflow: hidden;
  padding: 16px;
  position: relative;
  width: 100%;
`;

const Avatar = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  height: 32px;
  position: relative;
  width: 768px;
`;

const DivWrapper = styled.div`
  background-color: #0000001a;
  border-radius: 32px;
  height: 24px;
  overflow: hidden;
  position: relative;
  width: 24px;
`;

const TextWrapper2 = styled.div`
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 14px;
  font-weight: 400;
  left: 4px;
  letter-spacing: 0;
  position: absolute;
  text-align: center;
  top: 3px;
  white-space: nowrap;
`;

const TitleWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-grow: 1;
  position: relative;
`;

const Title3 = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #000000;
  display: -webkit-box;
  flex: 1;
  font-family: "Roboto", Helvetica;
  font-size: 14px;
  font-weight: 500;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`;

const Frame2 = styled.div`
  flex: 1;
  flex-grow: 1;
  position: relative;
`;

const Icon = styled.button`
  border: none;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #000000;
  display: -webkit-box;
  font-family: "Roboto", Helvetica;
  font-size: 16px;
  font-weight: 400;
  height: 24px;
  letter-spacing: 0;
  line-height: 20px;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 24px;
`;

const Title4 = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #000000;
  display: -webkit-box;
  font-family: "Roboto", Helvetica;
  font-size: 14px;
  font-weight: 500;
  height: 24px;
  letter-spacing: 0;
  line-height: 24px;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 24px;
`;

const Avatar2 = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 16px;
  position: relative;
  width: 768px;
`;

const Frame3 = styled.div`
  align-items: flex-start;
  border-radius: 5px;
  display: flex;
  flex: 1;
  flex-grow: 1;
  padding: 0px 10px;
  position: relative;
`;

const Title5 = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  color: #000000;
  display: -webkit-box;
  flex: 1;
  font-family: "Roboto", Helvetica;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 32px;
  margin-top: -1px;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  text-align: left;
`;

const Frame4 = styled.div`
  align-items: flex-end;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  height: 35px;
  justify-content: flex-end;
  position: relative;
  width: 100%;
`;

const Title6 = styled.button`
  all: unset;
  align-items: center;
  box-sizing: border-box;
  font-weight: 500;
  height: 35px;
  display: flex;
  flex: 0 0 auto;
  border-radius: 8px;
  flex-direction: column;
  background-color: #ffffff;
  position: relative;
  width: 60px;
  justify-content: center;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const List = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  position: relative;
  width: 800px;
`;

const Input2 = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 768px;
`;

const Contentfield = styled.textarea`
  height: 200px;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #0000001a;
  border-radius: 6px;
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 4px;
  padding: 8px 12px;
  position: relative;
  &:focus {
    outline: none;
    border-color: black;
    color: black;
  }
  &:hover {
    border-color: black;
  }
`;

export default function QuizBoardInfo() {
  const navigate = useNavigate();
  const { quizId, boardId } = useParams();

  const { user, setUser } = useUserStore();
  const [boardInfo, setBoardInfo] = useState();
  const [comments, setComments] = useState();
  const [newCommentContent, setNewCommentContent] = useState();

  const commentLikeHandler = async (commentId) => {
    const response = await commentLikeApi(commentId);

    if (response.status === 201) {
      window.location.replace(
        PATH_QUIZ_BOARD_INFO.replace(":quizId", quizId).replace(
          ":boardId",
          boardId
        )
      );
    } else if (response.status === 400) {
      await commentUnlikeApi(commentId);
      window.location.replace(
        PATH_QUIZ_BOARD_INFO.replace(":quizId", quizId).replace(
          ":boardId",
          boardId
        )
      );
    } else if (response.status === 404) {
      alert(response.message);
    }
  };

  const createCommentHandler = async () => {
    if (newCommentContent.length === 0) {
      alert("Please enter your comment.");
      return;
    }

    const data = {
      content: newCommentContent,
    };

    const response = await commentCreateApi(boardId, data);

    if (response.status === 201) {
      window.location.replace(
        PATH_QUIZ_BOARD_INFO.replace(":quizId", quizId).replace(
          ":boardId",
          boardId
        )
      );
    } else if (response.status === 404) {
      alert(response.message);
    }

    setNewCommentContent("");
  };

  const setNewCommentContentHandler = async (e) => {
    setNewCommentContent(e.target.value);
  };

  const getUserInfoHandler = async () => {
    const response = await userGetMyInfoApi();

    if (response.status === 200) {
      setUser(response.data);
    } else {
      alert(response.message);
      navigate(PATH_HOME);
    }
  };

  const getBoardInfoHandler = async () => {
    const response = await boardGetApi(boardId);

    if (response.status === 200) {
      setBoardInfo(response.data);
    } else {
      alert(response.message);
      navigate(PATH_HOME);
    }
  };

  const getCommentsHandler = async () => {
    const response = await commentGetListApi(boardId);

    if (response.status === 200) {
      setComments(response.data);
    } else {
      alert(response.message);
      navigate(PATH_HOME);
    }
  };

  useEffect(() => {
    getBoardInfoHandler();
    getCommentsHandler();
    getUserInfoHandler();
  }, []);

  return (
    <>
      {boardInfo && (
        <IndexWrapper>
          <Section>
            <Container>
              <Title>{boardInfo.title}</Title>
              <Subtitle>{boardInfo.username}</Subtitle>
            </Container>
            <Frame>
              <TextWrapper>{boardInfo.content}</TextWrapper>
            </Frame>
          </Section>
          <Div>
            <Container2>
              <Title2>Comments</Title2>
              <Subtitle2>{boardInfo.countComment}</Subtitle2>
            </Container2>
            <List>
              {comments &&
                comments.map((comment) => (
                  <Card key={comment.commentId}>
                    <Avatar>
                      <DivWrapper>
                        <TextWrapper2>🐶</TextWrapper2>
                      </DivWrapper>
                      <TitleWrapper>
                        <Title3>{comment.username}</Title3>
                      </TitleWrapper>
                      <Frame2 />
                      <Icon
                        onClick={() => commentLikeHandler(comment.commentId)}
                      >
                        👍
                      </Icon>
                      <Title4>{comment.likeCount}</Title4>
                    </Avatar>
                    <Avatar2>
                      <Frame3>
                        <Title5>{comment.content}</Title5>
                      </Frame3>
                    </Avatar2>
                  </Card>
                ))}
            </List>
            <Card>
              <Avatar>
                <DivWrapper>
                  <TextWrapper2>🐶</TextWrapper2>
                </DivWrapper>
                <TitleWrapper>
                  <Title3>{user.username}</Title3>
                </TitleWrapper>
                <Frame2 />
              </Avatar>
              <Avatar2>
                <Input2>
                  <Contentfield
                    value={newCommentContent}
                    onChange={setNewCommentContentHandler}
                    placeholder="Please enter your comment."
                  />
                </Input2>
              </Avatar2>
              <Frame4>
                <Title6 onClick={() => createCommentHandler()}>Write</Title6>
              </Frame4>
            </Card>
          </Div>
        </IndexWrapper>
      )}
    </>
  );
}
