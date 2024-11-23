import { useRef, useState, useEffect } from "react";
import "../styles/Homepage.css";
import "../styles/DiaryWriting.css";
import "../styles/layout.css";
import skin1 from "../assets/skin1.png";
import skin2 from "../assets/skin2.png";
import skin3 from "../assets/skin3.png";
import skin4 from "../assets/skin4.png";

function Homepage() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [emotion, setEmotion] = useState(1);
  const [writingDate, setWritingDate] = useState(new Date());
  const textRef = useRef();

  useEffect(() => {
    if (month < 0) {
      setMonth(11);
      setYear((prevYear) => prevYear - 1);
    } else if (month > 11) {
      setMonth(0);
      setYear((prevYear) => prevYear + 1);
    }
  }, [month]);

  const renderCalendar = () => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    let date = 1;
    let startDay = firstDay.getDay();

    let calendarList = [];

    for (let i = 0; i < 6; i++) {
      let calendarTdList = [];
      let calendarKey;
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < startDay) || date > lastDay.getDate()) {
          calendarKey = `d${i}${j}`;
          calendarTdList.push(<td key={calendarKey}></td>);
        } else {
          calendarKey = `d${i}${j}`;
          calendarTdList.push(
            <td key={calendarKey}>
              <h4>{date}</h4>
              <img src={skin1} alt="skin" />
            </td>
          );
          date++;
        }
      }
      calendarKey = `r${i}`;
      calendarList.push(<tr key={calendarKey}>{calendarTdList}</tr>);
    }

    return calendarList;
  };

  const renderEmotion = () => {
    const emotions = [skin1, skin2, skin3, skin4];
    return <img src={emotions[emotion - 1]} alt={`emotion${emotion}`} />;
  };

  const onSave = () => {
    console.log(textRef.current.value);
    console.log(emotion);
    console.log(
      writingDate.getFullYear(),
      writingDate.getMonth() + 1,
      writingDate.getDate()
    );
  };

  return (
    <div>
      <div className="header"></div>
      <div className="homepage-wrapper">
        <div className="sidebar"></div>
        <div className="homepage-container">
          <div className="writing-diary">
            <div className="diary-frame">
              <div className="diary-paper-container">
                <div className="diary-paper calendar-wrapper">
                  <div className="month">
                    <button onClick={() => setMonth((prev) => prev - 1)}>
                      {"<"}
                    </button>
                    {year}년 {month + 1}월
                    <button onClick={() => setMonth((prev) => prev + 1)}>
                      {">"}
                    </button>
                  </div>
                  <table>
                    <tbody id="calendar-table">
                      <tr className="weekday">
                        <th>일</th>
                        <th>월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th>금</th>
                        <th>토</th>
                      </tr>
                      {renderCalendar()}
                    </tbody>
                  </table>
                </div>
                <div className="diary-paper writing-wrapper">
                  <div className="writing-header">
                    <span>오늘의 질문</span>
                    <div className="dropdown-container">
                      <span>오늘의 감정:</span>
                      <div className="dropdown">
                        <button>{renderEmotion()}</button>
                        <div className="dropdown-content">
                          {[skin1, skin2, skin3, skin4].map((src, index) => (
                            <img
                              key={index}
                              onClick={() => setEmotion(index + 1)}
                              className={
                                emotion === index + 1
                                  ? "selected-emotion"
                                  : ""
                              }
                              src={src}
                              alt={`emotion${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <h1 className="writing-title">
                    요즘 자주 느끼는 감정은 무엇인가요?
                  </h1>
                  <div className="writing-text">
                    <textarea rows={5} ref={textRef}></textarea>
                  </div>
                </div>
              </div>
              <div className="diary-btn-container">
                <button onClick={onSave}>저장</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;