// 상단 바

import React, { useState, useEffect } from "react"; 
import '../../assets/fonts/fonts.css' // 폰트가 왜 적용이 안 되죠... 
import kakaoLoginImage from '../../assets/img/kakao_login_medium_narrow.png';

const Header = () => {
    // 리워드 값 저장
    const [reward, setReward] = useState(0);

    // 로그인 여부를 확인하는 상태
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 사용자 정보 가져오기 (수정된 부분)
    const fetchReward = () => {
        // 가정: 사용자 리워드 정보를 가져오는 API 호출
        // 이 부분을 실제 백엔드 API로 변경하기
        const dummyReward = 500; // 임시로 적어놓은 값
        setReward(dummyReward); 
        console.log("리워드 값 가져옴:", dummyReward);
    };

    // 카카오 로그인 API 호출 
    const handleKakaoLogin = () => {
        console.log("카카오 로그인 API 호출");

        // 카카오 로그인 로직 구현
        window.Kakao.Auth.login({
            success: function (authObj) {
              console.log("로그인 성공", authObj);
              setIsLoggedIn(true); // 로그인 성공 시 상태 업데이트
              fetchReward(); // 로그인 성공 후 리워드 값 가져오기
            },
            fail: function (err) {
              console.error("로그인 실패", err);
            },
        });
    };

    // 로그아웃 처리
    const handleLogout = () => {
        if (window.Kakao.Auth.getAccessToken()) {
        window.Kakao.Auth.logout(() => {
            console.log("로그아웃 성공");
            setIsLoggedIn(false); // 로그아웃 후 상태 초기화
            setReward(0); // 로그아웃 시 리워드 값 초기화하기
        });
        }
    };

    // 카카오 SDK 초기화
    useEffect(() => {
        if (!window.Kakao.isInitialized()) {
        window.Kakao.init("a74b826c442adaab288751d8543f9752"); // JavaScript 키
        console.log("Kakao 초기화 완료");
        }
    }, []);

  return (
    <header style={headerStyle}>
      <div
        style={logoStyle}
        onClick={() => {
          console.log("메인 페이지로 이동");
          window.location.href = "/"; // 메인 페이지로 이동하도록 하기
        }} 
      >
        감정일기 나란
      </div>

      <div style={userInfoStyle}>
        {isLoggedIn && <span style={rewardStyle}>💰 {reward}</span>}  

        {isLoggedIn ? ( // 로그인되어 있다면 리워드와 코인 아이콘 표시하기
          <button style={buttonStyle} onClick={handleLogout} >
            🔓 로그아웃
          </button>
        ) : (           // 로그인되지 않았다면 로그인 페이지로 이동
            <img 
            src={kakaoLoginImage}
            alt="카카오 로그인"
            style={{ cursor: "pointer",
                maxWidth: "100%", // 버튼이 부모 요소의 너비를 넘지 않도록 제한
                height: "auto",   // 비율 유지하며 높이 자동 조정
                objectFit: "contain", // 내용이 버튼 영역 안에 들어오도록 설정
             }}
            onClick={handleKakaoLogin}
          />
        )}
      </div>
    </header>
  );
};

const headerStyle = {
    position: "fixed", // 상단에 고정하기
    top:0,
    left:0,
    width:"100%",
    height:"11vh",
    zIndex:1000, // 다른 요소보다 위에 위치하도록 하기
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    backgroundColor: "#182449",
    color: "white",
    fontFamily: "'Basic'",
};

const logoStyle = {
  fontSize: "43px",
  fontWeight: "bold",
  cursor: "pointer",
  fontFamily:  "'KOTRA'",
};

const userInfoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",       // 버튼과 아이콘 간 간격 유지
    overflow: "visible", // 내용이 잘리지 않도록 설정
    flexShrink: 0,     // 부모 공간이 부족해도 축소되지 않도록 설정
    justifyContent: "flex-end", // 오른쪽 정렬
    marginRight: "50px", // 부모 컨테이너의 오른쪽 여백 추가
  };

const rewardStyle = {
    fontSize: "23px",
    fontWeight: "bold",
};

const buttonStyle = {
  backgroundColor: "#182449",
  color: "#fff",
  fontSize: "23px",
  fontWeight: "bold",
  border: "none",
  borderRadius: "4px",
  padding: "5px 30px",
  cursor: "pointer",
  boxShadow: "2px 0 5px rgba(255, 255, 255, 0.1)",
};

export default Header;





