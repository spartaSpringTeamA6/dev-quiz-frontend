import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import theme from "./styles/themes/default";

import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";

import {
  API_BASE_URL,
  PATH_ANY,
  PATH_LOGIN,
  PATH_MYPAGE,
  PATH_QUIZ,
  PATH_HOME,
  PATH_TEAM,
  PATH_TEAM_INFO,
  PATH_TEAM_SETTING,
  PATH_QUIZ_RESULT,
  PATH_QUIZ_GET_QUIZ,
  PATH_QUIZ_GET_QUIZZES,
  PATH_QUIZ_BOARD,
  PATH_QUIZ_BOARD_POST,
} from "./constants";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import QuizCategory from "./pages/quiz/QuizCategory";
import QuizGetQuizzes from "./pages/quiz/QuizGetQuizzes";
import MyPageProfile from "./pages/mypage/MypageProfile";
import TeamList from "./pages/team/TeamList";
import TeamInfo from "./pages/team/TeamInfo";
import TeamSetting from "./pages/team/TeamSetting";
import { useUserStore } from "./stores/user.store";
import QuizResult from "./pages/quiz/QuizResult";
import QuizGetQuiz from "./pages/quiz/QuizGetQuiz";
import QuizBoardList from "./pages/board/QuizBoardList";
import QuizBoardPost from "./pages/board/QuizBaordPost";
import { userGetMyInfoApi } from "./apis/userApis";
import { authReissueApi } from "./apis/authApis";

function App() {
  // const [connection, setConnection] = useState("");
  const [cookies] = useCookies();
  const { user, setUser, setAccessToken, removeUser, removeAccessToken } =
    useUserStore();
  const [loginUser, setLoginUser] = useState("");

  useEffect(() => {
    setLoginUser(user);
  }, [user]);

  useEffect(() => {
    const getUserInfoHandler = async () => {
      const userInfo = await userGetMyInfoApi();
      setUser(userInfo.data);
      setAccessToken(cookies.access_token);
    };

    const postAuthReissueHandler = async () => {
      const reissue = await authReissueApi();
      console.log("issue", reissue);
      if (cookies.access_token) {
        setAccessToken(cookies.access_token);
      } else {
        removeUser();
      }
    };

    if (cookies.access_token) {
      getUserInfoHandler();
    } else {
      console.log("cookies change");
      postAuthReissueHandler();
    }
  }, [cookies]);

  // useEffect(() => {
  //   const connectionTest = () => {
  //     axios
  //       .get(API_BASE_URL)
  //       .then((response) => {
  //         setConnection(response.data);
  //       })
  //       .catch((error) => {
  //         setConnection(error.message);
  //       });
  //   };

  //   connectionTest();
  // }, []);

  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route element={<MainLayout />}>
                {/* Home */}
                <Route path={PATH_ANY} element={<Home />} />
                <Route path={PATH_HOME} element={<Home />} />

                {/* User */}
                <Route path={PATH_LOGIN} element={<Login />} />
                <Route path={PATH_MYPAGE} element={<MyPageProfile />} />

                {/* Quiz */}
                <Route path={PATH_QUIZ} element={<QuizCategory />} />
                <Route path={PATH_QUIZ_GET_QUIZ} element={<QuizGetQuiz />} />
                <Route
                  path={PATH_QUIZ_GET_QUIZZES}
                  element={<QuizGetQuizzes />}
                />
                <Route path={PATH_QUIZ_RESULT} element={<QuizResult />} />

                {/* Board */}
                <Route path={PATH_QUIZ_BOARD} element={<QuizBoardList />} />
                <Route
                  path={PATH_QUIZ_BOARD_POST}
                  element={<QuizBoardPost />}
                />

                {/* Team */}
                <Route path={PATH_TEAM} element={<TeamList />} />
                <Route path={PATH_TEAM_INFO} element={<TeamInfo />} />
                <Route path={PATH_TEAM_SETTING} element={<TeamSetting />} />
              </Route>

              {/* Admin 관련 라우트도 이곳에 추가 */}
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </CookiesProvider>
  );
}

export default App;
