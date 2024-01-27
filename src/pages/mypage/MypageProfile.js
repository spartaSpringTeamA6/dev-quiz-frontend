import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { authLogoutApi } from "../../apis/authApis";
import useUserStore from "../../stores/user.store";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { PATH_HOME, PATH_MYPAGE_SETTING } from "../../constants";
import {
  userGetCorrectQuizApi,
  userGetFailQuizApi,
  userGetPassQuizApi,
} from "../../apis/userApis";

const Index = styled.div`
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
  gap: 60px;
  justify-content: center;
  overflow: hidden;
  padding: 60px 170px;
  position: relative;
  width: 100%;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 24px;
  position: relative;
`;

const Title = styled.div`
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 40px;
  font-weight: 700;
  height: 36px;
  letter-spacing: 0;
  line-height: 36px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: 865px;
`;

const Div = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 40px;
  justify-content: center;
  overflow: hidden;
  padding: 60px 170px;
  position: relative;
  width: 100%;
`;

const Avatar = styled.div`
  background-color: #d8d8d880;
  border-radius: 50px;
  height: 100px;
  position: relative;
  width: 100px;
`;

const Icon = styled.div`
  color: #000000;
  display: flex;
  font-size: 64px;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Container2 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 560px;
`;

const TextWrapper = styled.div`
  text-align: left;
  align-self: stretch;
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 32px;
  margin-top: -1px;
  position: relative;
`;

const ChipGroup = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 8px;
  position: relative;
  width: 100%;
`;

const Chip = styled.div`
  align-items: center;
  background-color: #0000000d;
  border-radius: 6px;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 8px 10px;
  position: relative;
`;

const Text = styled.div`
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const Button = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  width: 100px;
`;

const Button2 = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;

const Secondary = styled.button`
  align-items: center;
  border: 1px solid;
  border-color: #000000;
  border-radius: 8px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  position: relative;
  width: 100px;
  background-color: white;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Title2 = styled.div`
  color: #000000;
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

const Primary = styled.button`
  align-items: center;
  background-color: #000000;
  border-radius: 8px;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  position: relative;
  width: 100px;
  border: none;
  &:focus {
    outline: none;
    cursor: pointer;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

const Title3 = styled.div`
  color: #ffffff;
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

const Section2 = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 60px;
  justify-content: center;
  overflow: hidden;
  padding: 60px;
  position: relative;
  width: 100%;
`;

const Container3 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 1000px;
`;

const Title4 = styled.div`
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

const List = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  width: 70%;
  margin: 0 auto;
`;

const Metric = styled.div`
  align-items: flex-start;
  border: 1px solid;
  border-color: #0000001a;
  border-radius: 6px;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 4px;
  overflow: hidden;
  padding: 16px;
  position: relative;
  width: 200px;
`;

const Title5 = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: stretch;
  color: #00000080;
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
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Data = styled.div`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  align-self: stretch;
  color: #000000;
  display: -webkit-box;
  font-family: "Roboto", Helvetica;
  font-size: 28px;
  font-weight: 500;
  height: 36px;
  letter-spacing: 0;
  line-height: 36px;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Change = styled.div`
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
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 30px;
`;

const ContainerWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  width: 600px;
`;

const Container4 = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 600px;
`;

const Title6 = styled.div`
  align-self: stretch;
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 48px;
  margin-top: -1px;
  padding: 0 0 48px 0;
  position: relative;
  text-align: center;
`;

const Section3 = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 20px 20px;
  justify-content: center;
  overflow: hidden;
  padding: 10px 20px;
  position: relative;
  width: 100%;
`;

const TextWrapper2 = styled.button`
  color: #000000;
  font-family: "Roboto", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 20px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  &:hover {
    font-weight: 600;
  }
`;

const Container5 = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 600px;
`;

export default function MyPageProfile() {
  const { user, removeUser } = useUserStore();
  const [userInfo, setUserInfo] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const [correctQuizList, setCorrectQuizList] = useState();
  const [failQuizList, setFailQuizList] = useState();
  const [passQuizList, setPassQuizList] = useState();

  const logoutHandler = async () => {
    const response = await authLogoutApi();
    removeCookie("access_token", { path: "/" });
    removeUser();
    navigate(PATH_HOME);
  };

  const moveMypageSettingHandler = () => {
    navigate(PATH_MYPAGE_SETTING);
  };

  useEffect(() => {
    const getCorrectQuizListHandler = async () => {
      const response = await userGetCorrectQuizApi(userInfo.userId);
      if (response) {
        if (response.status === 200) {
          setCorrectQuizList(response.data);
        } else {
          alert(response.message);
        }
      }
    };

    const getFailQuizListHandler = async () => {
      const response = await userGetFailQuizApi(userInfo.userId);
      if (response) {
        if (response.status === 200) {
          setFailQuizList(response.data);
        } else {
          alert(response.message);
        }
      }
    };

    const getPassQuizListHandler = async () => {
      const response = await userGetPassQuizApi(userInfo.userId);
      if (response) {
        if (response.status === 200) {
          setPassQuizList(response.data);
        } else {
          alert(response.message);
        }
      }
    };

    if (userInfo) {
      getCorrectQuizListHandler();
      getFailQuizListHandler();
      getPassQuizListHandler();
    }
  }, [userInfo]);

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  return (
    <>
      {userInfo && (
        <Index>
          <Section>
            <Container>
              <Title>Welcome to DevQuiz</Title>
            </Container>
          </Section>
          <Div>
            <Avatar>
              <Icon>🧑🏻‍💻</Icon>
            </Avatar>
            <Container2>
              <TextWrapper>{userInfo.username}</TextWrapper>
              <ChipGroup>
                <Chip>
                  <Text>Programming</Text>
                </Chip>
                <Chip>
                  <Text>Design</Text>
                </Chip>
                <Chip>
                  <Text>Writing</Text>
                </Chip>
                <Chip>
                  <Text>Marketing</Text>
                </Chip>
              </ChipGroup>
            </Container2>
            <Button>
              <Button2>
                <Secondary onClick={() => moveMypageSettingHandler()}>
                  <Title2>Edit</Title2>
                </Secondary>
                <Primary onClick={() => logoutHandler()}>
                  <Title3>Logout</Title3>
                </Primary>
              </Button2>
            </Button>
          </Div>
          {correctQuizList && failQuizList && passQuizList && (
            <>
              <Section2>
                <Container3>
                  <Title4>User Status</Title4>
                  <List>
                    <Metric>
                      <Title5>Correct</Title5>
                      <Data>{correctQuizList.quizList.length}</Data>
                    </Metric>
                    <Metric>
                      <Title5>Fail</Title5>
                      <Data>{failQuizList.quizList.length}</Data>
                    </Metric>
                    <Metric>
                      <Title5>Pass</Title5>
                      <Data>{passQuizList.quizList.length}</Data>
                    </Metric>
                  </List>
                </Container3>
              </Section2>
              <Section>
                <ContainerWrapper>
                  <Container4>
                    <Title6>맞은 문제</Title6>
                    <Section3>
                      {correctQuizList !== undefined &&
                        correctQuizList.quizList.map((quiz, index) => (
                          <TextWrapper2>{quiz.id}</TextWrapper2>
                        ))}
                    </Section3>
                  </Container4>
                </ContainerWrapper>
              </Section>
              <Section>
                <Container5>
                  <Title6>틀린 문제</Title6>
                  <Section3>
                    {failQuizList !== undefined &&
                      failQuizList.quizList.map((quiz, index) => (
                        <TextWrapper2>{quiz.id}</TextWrapper2>
                      ))}
                  </Section3>
                </Container5>
              </Section>
              <Section>
                <ContainerWrapper>
                  <Container4>
                    <Title6>모르는 문제</Title6>
                    <Section3>
                      {passQuizList !== undefined &&
                        passQuizList.quizList.map((quiz, index) => (
                          <TextWrapper2>{quiz.id}</TextWrapper2>
                        ))}
                    </Section3>
                  </Container4>
                </ContainerWrapper>
              </Section>
            </>
          )}
        </Index>
      )}
    </>
  );
}
