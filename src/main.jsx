import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './index.css';
import './App.css';
import Layout from './components/Layout/Layout';
import Mypage from './components/Layout/Layout'; //임시 마이페이지로 변경하기
import DiaryWriting from './components/Layout/Layout2';
import SkinPage from './pages/SkinPage';

// 라우터 설정
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />
  },
  {
    path: '/mypage',
    element: <Mypage />
  },
  {
    path: '/diary',
    element: <DiaryWriting />
  },
  {
    path: '/SkinPage',
    element: <SkinPage />
  },
]);

// React 앱 렌더링
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);