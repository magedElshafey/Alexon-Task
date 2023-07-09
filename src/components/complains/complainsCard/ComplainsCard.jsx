import React from "react";
import style from "./complainsCard.module.css";
const ComplainsCard = ({ data }) => {
  return (
    <div className="d-flex gap-3 justify-content-center align-items-center flex-wrap">
      {data.map((item, index) => (
        <div
          key={index}
          style={{ backgroundColor: item.bg }}
          className={style.mainContainer}
        >
          <p className={`m-0 p-0 ${style.title}`}>{item.title}</p>
          <p className={`m-0 p-0 ${style.num}`}>{item.num}</p>
        </div>
      ))}
    </div>
  );
};

export default ComplainsCard;
