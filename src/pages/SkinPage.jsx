import React, { useState, useEffect } from "react";
import "../styles/SkinPage.css";

const SkinPage = () => {
  const [skins, setSkins] = useState([]);
  const [selectedSkins, setSelectedSkins] = useState([]);
  const [error, setError] = useState(null);

  const fetchSkins = async () => {
    try {
      const response = await fetch("/api/skins", { method: "GET" });
      if (!response.ok) throw new Error("스킨 데이터를 가져오지 못했습니다.");
      const data = await response.json(); 
      setSkins(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const purchaseSkin = async (skinId) => {
    try {
      const response = await fetch(`/api/skins/${skinId}/purchase`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error("스킨 구매에 실패했습니다.");
      alert("스킨이 성공적으로 구매되었습니다!");
      fetchSkins();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSkinSelect = (skinId) => {
    if (selectedSkins.includes(skinId)) {
      setSelectedSkins(selectedSkins.filter((id) => id !== skinId));
    } else {
      setSelectedSkins([...selectedSkins, skinId]);
    }
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
        <button className="action-button">스킨 구매</button>
        <button className="action-button">스킨 설정</button>
      </div>
    </div>
  );
};

export default SkinPage;
