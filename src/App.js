import { CookiesProvider } from "react-cookie";
import React from "react"; // useState와 useEffect가 사용되지 않으므로 import 제거
import "./App.css";
import theme from "./styles/themes/default";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/home";
import { PATH_ANY } from "./constants";

function App() {
  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route element={<MainLayout />}>
                <Route path={PATH_ANY} element={<Home />} />
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
