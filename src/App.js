import { CookiesProvider } from "react-cookie";
import React from "react"; // useState와 useEffect가 사용되지 않으므로 import 제거
import "./App.css";
import theme from "./styles/themes/default";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home";
import NewHome from "./pages/newHome";
import Login from "./pages/login";
import Quiz from "./pages/quiz";
import UserPage from "./pages/userPage";
import TeamNameChane from "./pages/teamNameChange";
import TeamSetup from "./pages/teamSetup";
import TeamManagement from "./pages/teamManagement";
import UserManagement from "./pages/userManagement";
import { PATH_ANY, PATH_LOGIN, PATH_QUIZ, PATH_USERPAGE, PATH_TEAMNAMECHANGE, PATH_TEAMSETUP, PATH_TEAMMANAGEMENT, PATH_USERMANAGEMENT, PATH_NEWHOME } from "./constants";

function App() {
  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route element={<MainLayout />}>
                <Route path={PATH_ANY} element={<Home />} />
                <Route path={PATH_NEWHOME} element={<NewHome />} />
                <Route path={PATH_LOGIN} element={<Login />} />
                <Route path={PATH_QUIZ} element={<Quiz />} />
                <Route path={PATH_USERPAGE} element={<UserPage />} />
                <Route path={PATH_TEAMNAMECHANGE} element={<TeamNameChane />} />
                <Route path={PATH_TEAMSETUP} element={<TeamSetup />} />
                <Route path={PATH_TEAMMANAGEMENT} element={<TeamManagement />} />
                <Route path={PATH_USERMANAGEMENT} element={<UserManagement />} />
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
