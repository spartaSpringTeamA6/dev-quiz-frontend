import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import theme from "./styles/themes/default";

import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home";
import Login from "./pages/login";
import Quiz from "./pages/quiz";
import UserManagement from "./pages/mypage/userManagement";
import Profile from "./pages/mypage/profile";

import {
  API_BASE_URL,
  PATH_ANY,
  PATH_LOGIN,
  PATH_MYPAGE,
  PATH_MYPAGE_MANAGEMENT,
  PATH_QUIZ,
  PATH_GROUP_CREATE,
  PATH_GROUP_SETTING,
  PATH_GROUP_MANAGEMENT,
} from "./constants";
import GroupCreate from "./pages/group/groupCreate";
import GroupSetup from "./pages/group/groupSetup";
import GroupManagement from "./pages/group/groupManagement";

function App() {
  const [connection, setConnection] = useState("");

  const [cookies] = useCookies();

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

  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route element={<MainLayout />}>
                <Route path={PATH_ANY} element={<Home />} />
                <Route path={PATH_LOGIN} element={<Login />} />
                <Route path={PATH_QUIZ} element={<Quiz />} />
                <Route path={PATH_MYPAGE} element={<Profile />} />
                <Route
                  path={PATH_MYPAGE_MANAGEMENT}
                  element={<UserManagement />}
                />
                <Route path={PATH_GROUP_CREATE} element={<GroupCreate />} />
                <Route path={PATH_GROUP_SETTING} element={<GroupSetup />} />
                <Route
                  path={PATH_GROUP_MANAGEMENT}
                  element={<GroupManagement />}
                />
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
