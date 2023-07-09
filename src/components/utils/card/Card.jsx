import React from "react";
import style from "./card.module.css";

const Card = ({ data, activeId, setActiveId }) => {
  return (
    <div
      onClick={() => setActiveId(data.id)}
      className={`pointer p-2 ${style.mainContainer} ${
        activeId === data.id ? style.active : null
      }`}
    >
      <div className="d-flex flex-column gap-1 justify-content-center align-items-center">
        <div className={style.imgContainer}>
          <img
            loading="lazy"
            alt="complain/img"
            src={data.img}
            className={`${style.complainImg} ${
              activeId === data.id ? style.filter : null
            }`}
          />
        </div>

        <div
          className={`m-0 p-0 text-center ${style.title} ${
            activeId === data.id ? "text-white" : null
          }`}
          dangerouslySetInnerHTML={{ __html: data.title }}
        ></div>
      </div>
    </div>
  );
};

export default Card;
