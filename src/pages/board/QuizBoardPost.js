import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { PATH_HOME, PATH_QUIZ_BOARD } from "../../constants";
import { userGetMyInfoApi } from "../../apis/userApis";
import { boardCreateApi } from "../../apis/boardApis";
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

const TitleWrapper = styled.div`
  align-items: flex-start;
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 24px;
  padding: 10px;
  position: relative;
  width: 800px;
  text-align: left;
`;

const Input2 = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 780px;
`;

const Textfield = styled.input`
  align-items: center;
  background-color: #ffffff;
  border-radius: 6px;
  display: flex;
  flex: 1;
  flex-grow: 1;
  border: none;
  font-size: 34px;
  font-weight: 600;
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
  margin-left: 5px;
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
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex: 0 0 auto;
  gap: 16px;
  justify-content: flex-end;
  padding: 10px;
  position: relative;
  width: 768px;
`;

const TextWrapper = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: 748px;
`;

const FrameWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
  height: 35px;
  justify-content: flex-end;
  position: relative;
  width: 780px;
`;

const DivWrapper = styled.button`
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
  justify-content: center;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const Div = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #000000;
  display: -webkit-box;
  font-family: "Roboto", Helvetica;
  font-size: 20px;
  font-weight: 500;
  height: 20px;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 60px;
`;

export default function QuizBoardPost() {
  const navigate = useNavigate();
  const { quizId } = useParams();

  const [newBoardTitle, setNewBoardTitle] = useState("");
  const [newBoardContent, setNewBoardContent] = useState("");

  const { user, setUser } = useUserStore();

  const createBoardHandler = async () => {
    if (newBoardTitle.length === 0) {
      alert("Please enter your title.");
      return;
    }

    if (newBoardContent.length === 0) {
      alert("Please enter your content.");
      return;
    }

    const data = {
      title: newBoardTitle,
      content: newBoardContent,
    };

    const response = await boardCreateApi(quizId, data);

    if (response.status === 201) {
      navigate(PATH_QUIZ_BOARD.replace(":quizId", quizId));
    } else if (response.status === 404) {
      alert(response.message);
    }

    setNewBoardTitle("");
    setNewBoardContent("");
  };

  const setNewBoardContentHandler = async (e) => {
    setNewBoardContent(e.target.value);
  };

  const setNewBoardTitleHandler = async (e) => {
    setNewBoardTitle(e.target.value);
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

  useEffect(() => {
    getUserInfoHandler();
  }, []);

  return (
    <>
      {user && (
        <IndexWrapper>
          <Section>
            <Container>
              <Input2>
                <Textfield
                  value={newBoardTitle}
                  onChange={setNewBoardTitleHandler}
                  placeholder="게시글 제목을 입력해주세요."
                />
              </Input2>
              <Subtitle>작성자: {user.username}</Subtitle>
            </Container>
            <Frame>
              <Card>
                <Input2>
                  <Contentfield
                    value={newBoardContent}
                    onChange={setNewBoardContentHandler}
                    placeholder="게시글 내용을 입력해주세요."
                  />
                </Input2>
                <FrameWrapper>
                  <DivWrapper onClick={() => createBoardHandler()}>
                    <Div>post</Div>
                  </DivWrapper>
                </FrameWrapper>
              </Card>
            </Frame>
          </Section>
        </IndexWrapper>
      )}
    </>
  );
}
