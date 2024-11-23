import React, { useState, useEffect } from "react";
import "../styles/SkinPage.css";

const SkinPage = () => {
  const [skins, setSkins] = useState([]);
  const [selectedSkins, setSelectedSkins] = useState([]); // 선택된 스킨 ID 배열
  const [error, setError] = useState(null);

  const fetchSkins = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/skin/purchasable", {
        method: "GET",
      });
      if (!response.ok) throw new Error("스킨 데이터를 가져오지 못했습니다.");

      const data = await response.json();
      console.log("Fetched Skins:", data); // 디버깅용 데이터 출력
      setSkins(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  const purchaseSkin = async (skinId) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/skin/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: "test",
          skinId: skinId,
        }),
      });
      if (!response.ok) throw new Error("스킨 구매에 실패했습니다.");
      alert("스킨이 성공적으로 구매되었습니다!");
      fetchSkins(); // 스킨 리스트 갱신
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSkinSelect = (skinId) => {
    setSelectedSkins((prevSelectedSkins) => {
      if (prevSelectedSkins.includes(skinId)) {
        return prevSelectedSkins.filter((id) => id !== skinId); // 선택 해제
      } else {
        return [...prevSelectedSkins, skinId]; // 선택 추가
      }
    });
  };

  useEffect(() => {
    fetchSkins();
  }, []);

  return (
    <div className="skin-page">
      <h1 className="skin-title">스킨 설정</h1>
      {error && <p className="skin-error">{error}</p>}
      <div className="skin-list">
        {skins.map((skin) => (
          <div key={skin.id} className="skin-card">
            <img src={skin.image} alt={skin.name} />
            <p className="skin-name">{skin.name}</p>
            <input
              type="checkbox"
              checked={selectedSkins.includes(skin.id)}
              onChange={() => handleSkinSelect(skin.id)}
            />
            <button
              className="skin-purchase-button"
              onClick={() => purchaseSkin(skin.id)}
            >
              구매
            </button>
          </div>
        ))}
      </div>
      <div className="button-wrapper">
        <button
          className="action-button"
          onClick={() =>
            selectedSkins.forEach((skinId) => purchaseSkin(skinId))
          }
        >
          선택한 스킨 구매
        </button>
      </div>
    </div>
  );
};

export default SkinPage;
