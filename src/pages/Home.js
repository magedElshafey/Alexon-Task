import React, { useState } from "react";
import Card from "../components/utils/card/Card";
import { useNavigate } from "react-router-dom";
const Home = ({ data }) => {
  const navigate = useNavigate();

  const [activeId, setActiveId] = useState(null);
  return (
    <div className="container">
      <p className="text-center title my-5">اختر نوع الشكوي</p>
      <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
        {data.map((item, index) => (
          <Card
            activeId={activeId}
            setActiveId={setActiveId}
            key={index}
            data={item}
          />
        ))}
      </div>
      <div className="my-5 d-flex justify-content-center">
        <button
          onClick={() => navigate(`/complain/${activeId}`)}
          className={`btn ${activeId !== null ? "activeBtn" : null}`}
          disabled={activeId === null}
        >
          تأكيد
        </button>
      </div>
    </div>
  );
};

export default Home;
