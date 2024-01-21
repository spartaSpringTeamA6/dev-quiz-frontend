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
import TeamCreate from "./pages/team/teamCreate";
import TeamSetup from "./pages/team/teamSetup";
import TeamManagement from "./pages/team/teamManagement";
import Profile from "./pages/mypage/profile";

import {
  API_BASE_URL,
  PATH_ANY,
  PATH_LOGIN,
  PATH_QUIZ,
  PATH_MYPAGE,
  PATH_TEAMNAMECHANGE,
  PATH_TEAMSETUP,
  PATH_TEAMMANAGEMENT,
  PATH_USERMANAGEMENT,
} from "./constants";

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
                <Route path={PATH_TEAMNAMECHANGE} element={<TeamCreate />} />
                <Route path={PATH_TEAMSETUP} element={<TeamSetup />} />
                <Route
                  path={PATH_TEAMMANAGEMENT}
                  element={<TeamManagement />}
                />
                <Route
                  path={PATH_USERMANAGEMENT}
                  element={<UserManagement />}
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
