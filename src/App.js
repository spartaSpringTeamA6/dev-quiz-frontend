import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import theme from "./styles/themes/default";

import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import UserPage from "./pages/UserPage";
import TeamNameChane from "./pages/TeamNameChange";
import TeamSetup from "./pages/TeamSetup";
import TeamManagement from "./pages/TeamManagement";
import UserManagement from "./pages/UserManagement";
import {
  API_BASE_URL,
  PATH_ANY,
  PATH_LOGIN,
  PATH_QUIZ,
  PATH_USERPAGE,
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
                <Route path={PATH_USERPAGE} element={<UserPage />} />
                <Route path={PATH_TEAMNAMECHANGE} element={<TeamNameChane />} />
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
