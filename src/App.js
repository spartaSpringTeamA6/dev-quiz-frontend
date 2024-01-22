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
  PATH_QUIZ_QUESTION,
  PATH_GROUP,
  PATH_GROUP_DETAIL,
  PATH_GROUP_SETTING,
  PATH_QUIZ_RESULT,
} from "./constants";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import QuizCategory from "./pages/quiz/QuizCategory";
import QuizQuestion from "./pages/quiz/QuizQuestion";
import MyPageProfile from "./pages/mypage/MypageProfile";
import GroupDetail from "./pages/group/GroupDetail";
import GroupList from "./pages/group/GroupList";
import GroupSetting from "./pages/group/GroupSetting";
import { useUserStore } from "./stores/user.store";
import QuizResult from "./pages/quiz/QuizResult";

function App() {
  const [connection, setConnection] = useState("");
  const [cookies] = useCookies();
  const { user } = useUserStore();
  const [userToken, setUserToken] = useState("");

  const connectionTest = () => {
    axios
      .get(API_BASE_URL)
      .then((response) => {
        setConnection(response.data);
      })
      .catch((error) => {
        setConnection(error.message);
      });
  };

  useEffect(() => {
    connectionTest(); //맨처음한번만

    const token = cookies.userToken;
    if (token) {
      setUserToken(token);
    }
  }, [user]);

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
                <Route path={PATH_QUIZ_QUESTION} element={<QuizQuestion />} />
                <Route path={PATH_QUIZ_RESULT} element={<QuizResult />} />
                {/* GROUP */}
                <Route path={PATH_GROUP} element={<GroupList />} />
                <Route path={PATH_GROUP_DETAIL} element={<GroupDetail />} />
                <Route path={PATH_GROUP_SETTING} element={<GroupSetting />} />
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
