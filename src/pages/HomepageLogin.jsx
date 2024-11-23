import "../styles/Homepage.css";
import "../styles/layout.css";
import DiaryWriting from "./DiaryWriting";

function HomepageLogin() {
  return (
    <div>
      <div className="header"></div>
      <div className="homepage-wrapper">
        <div className="sidebar"></div>
        <div className="homepage-container">
          {/* <img className="diary" src="src\assets\diary1.svg" /> */}
          <DiaryWriting />
        </div>
      </div>
    </div>
  );
}

export default HomepageLogin;
