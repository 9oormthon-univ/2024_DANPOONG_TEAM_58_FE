import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div style={layoutStyle}>
      <Header /> {/* 위쪽에 고정 */}
      <div style={contentWrapperStyle}>
        <Sidebar /> {/* 왼쪽에 고정 */}
        <div style={mainContentStyle}>{children}</div> {/* 페이지 내용 */}
      </div>
    </div>
  );
};

// 레이아웃 스타일
const layoutStyle = {
  display: "flex", // 전체 레이아웃 설정
  flexDirection: "column", // Header를 위쪽에 배치
  height: "100vh", // 전체 화면 높이
  backgroundColor: "#f4f4f4", // 배경색 (필요 시 변경)
};

// 콘텐츠 래퍼 스타일
const contentWrapperStyle = {
  display: "flex", // Sidebar와 Main Content를 가로로 배치
  flex: 1, // 남은 공간을 다 채우기
};

// 메인 콘텐츠 스타일
const mainContentStyle = {
  flex: 1, // Sidebar를 제외한 나머지 공간
  padding: "20px", // 여백
  overflowY: "auto", // 스크롤 허용
  backgroundColor: "#ffffff", // 콘텐츠 배경색
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", // 약간의 그림자 효과
  borderRadius: "8px", // 모서리 둥글게
};

export default Layout;