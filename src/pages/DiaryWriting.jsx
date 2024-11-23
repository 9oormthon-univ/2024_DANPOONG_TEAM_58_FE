import { useRef, useState } from "react";
import "../styles/DiaryWriting.css";
import "../styles/layout.css";

function DiaryWriting() {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [emotion, setEmotion] = useState(1);
  const [writingDate, setWritingDate] = useState(new Date());
  const textRef = useRef();

  const prevMonth = () => {
    setMonth((prevMonth) => prevMonth - 1);
    if (month < 1) {
      setMonth(11);
      setYear((prevYear) => prevYear - 1);
    }
  };

  const nextMonth = () => {
    setMonth((prevMonth) => prevMonth + 1);
    if (month > 10) {
      setMonth(0);
      setYear((prevYear) => prevYear + 1);
    }
  };

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
              <img src="src\assets\skin1.png" />
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
    switch (emotion) {
      case 1:
        return <img src="src\assets\skin1.png" />;
      case 2:
        return <img src="src\assets\skin2.png" />;
      case 3:
        return <img src="src\assets\skin3.png" />;
      case 4:
        return <img src="src\assets\skin4.png" />;
    }
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
    <>
      <div className="writing-diary">
        <div className="diary-frame">
          <div className="diary-paper-container">
            <div className="diary-paper calendar-wrapper">
              {/*  */}
              <div className="month">
                <button onClick={prevMonth}>{"<"}</button>
                {year}년 {month + 1}월<button onClick={nextMonth}>{">"}</button>
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
                    <button>
                      <svg
                        width="10"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.90148 7.29802L6.5 7.83887L6.09852 7.29802L2.20141 2.04802L1.60903 1.25H2.60289H10.3971H11.391L10.7986 2.04802L6.90148 7.29802Z"
                          fill="#D9D9D9"
                          stroke="black"
                        />
                      </svg>
                      {renderEmotion()}
                    </button>
                    <div className="dropdown-content">
                      <img
                        onClick={() => setEmotion(1)}
                        className={emotion == 1 ? "seleted-emtion" : ""}
                        src="src\assets\skin1.png"
                      />
                      <img
                        onClick={() => setEmotion(2)}
                        className={emotion == 2 ? "seleted-emtion" : ""}
                        src="src\assets\skin2.png"
                      />
                      <img
                        onClick={() => setEmotion(3)}
                        className={emotion == 3 ? "seleted-emtion" : ""}
                        src="src\assets\skin3.png"
                      />
                      <img
                        onClick={() => setEmotion(4)}
                        className={emotion == 4 ? "seleted-emtion" : ""}
                        src="src\assets\skin4.png"
                      />
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
    </>
  );
}

export default DiaryWriting;
