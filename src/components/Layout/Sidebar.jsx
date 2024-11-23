// 왼쪽 메뉴

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside style={sidebarStyle}>
      <nav style={navStyle}>
        <ul style={menuListStyle}>
          <li style={menuItemStyle}>
            <Link to="/mypage" style={linkStyle}>
              <span style={iconStyle}>👤</span> 마이 페이지
            </Link>
          </li>
          <li style={menuItemStyle}>
            <Link to="/write-diary" style={linkStyle}>
              <span style={iconStyle}>📖</span> 일기 작성
            </Link>
          </li>
          <li style={menuItemStyle}>
            <Link to="/SkinPage" style={linkStyle}>
              <span style={iconStyle}>🎨</span> 스킨 페이지
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

// 사이드바 스타일
const sidebarStyle = {
  width: "250px",
  height: "100vh",
  backgroundColor: "#fff",
  boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
  position: "fixed",
  top: "11vh",
  left: "0",
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  paddingLeft: "3px",
  boxSizing: "border-box",
};

const navStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "60px", // 메뉴 간 간격
  alignItems: "center",
};

// 메뉴 제목 스타일
const menuTitleStyle = {
  fontSize: "25px",
  fontWeight: "bold",
  FontFace: "Basic",
  marginBottom: "20px",
  color: "#123",
};

// 메뉴 리스트 스타일
const menuListStyle = {
  listStyle: "none",
  padding:"0",
  margin: "0",
};

// 개별 메뉴 아이템 스타일
const menuItemStyle = {
  marginBottom: "30px",
};

// 링크 메뉴 글씨 스타일
const linkStyle = {
  textDecoration: "none",
  color: "#000",
  fontSize: "19px",
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
};

// 아이콘 스타일
const iconStyle = {
  marginRight: "10px",
  fontSize: "22px",
};

export default Sidebar;
