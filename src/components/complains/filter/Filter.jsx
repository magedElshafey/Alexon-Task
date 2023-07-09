import React from "react";
import style from "./filter.module.css";
const Filter = () => {
  return (
    <div className="py-5 d-block d-md-flex justify-content-between align-items-center">
      <p className={` mx-0 mb-4 mb-md-0 mt-0 p-0 ${style.title}`}>
        الشكاوي الجديدة
      </p>
      <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap">
        <div className="d-flex align-items-center gap-2">
          <label htmlFor="date" className={style.label}>
            التاريخ
          </label>
          <select className={style.select} id="date">
            <option value="">الكل</option>
            <option value="">الكل</option>
            <option value="">الكل</option>
            <option value="">الكل</option>
          </select>
        </div>

        <div className="d-flex align-items-center gap-2">
          <label htmlFor="category" className={style.label}>
            التصنيف
          </label>
          <select className={style.select} id="category">
            <option value="">الكل</option>
            <option value="">الكل</option>
            <option value="">الكل</option>
            <option value="">الكل</option>
          </select>
        </div>
        <div className="d-flex align-items-center gap-2">
          <label htmlFor="state" className={style.label}>
            الحالة
          </label>
          <select className={style.select} id="state">
            <option value="">الكل</option>
            <option value="">الكل</option>
            <option value="">الكل</option>
            <option value="">الكل</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
