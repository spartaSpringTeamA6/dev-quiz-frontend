import { CookiesProvider } from 'react-cookie';
import React from 'react'; // useState와 useEffect가 사용되지 않으므로 import 제거
import './App.css';
import theme from './styles/themes/default';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MainPage from './pages/home/MainPage'; // 경로 수정
import Main from './pages/home/main'; 
import Homepage from './pages/home/homepage';
import { PATH_ANY } from './constants';

function App() {
  // 상태 관리 및 API 연결 관련 코드는 주석 처리되어 있습니다.

  return (
    <CookiesProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route element={<MainLayout />}>
                <Route path={PATH_ANY} element={<Main />} /> // 'exact' 제거 및 'path'로 변경
              </Route>
              {/* Admin 관련 라우트도 이곳에 추가 */}
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </CookiesProvider>
  );
}

export default App; // App 컴포넌트를 default로 export
