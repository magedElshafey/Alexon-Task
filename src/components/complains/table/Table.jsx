import React from "react";
import style from "./table.module.css";
import eye from "../../../assets/eye.svg";
import colorfullEye from "../../../assets/colorfullEye.svg";
const Table = ({ data }) => {
  return (
    <div className="table-responsive text-center">
      <table className="table">
        <thead>
          <tr>
            <th>رقم الشكوي</th>
            <th>نوع الشكوي</th>
            <th>تاريخ الشكوي</th>
            <th>المدينة</th>
            <th>الادارة</th>
            <th>الحالة</th>
            <th>عرض</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className={item.bgNormal ? null : "bgTr"} key={index}>
              <td className={`py-3 ${style.num}`}>{item.num}</td>
              <td className={`py-3 ${style.text}`}>{item.type}</td>
              <td className={`py-3 ${style.text}`}>{item.date}</td>
              <td className={`py-3 ${style.text}`}>{item.city}</td>
              <td className={`py-3 ${style.text}`}>{item.managment}</td>
              <td className={`py-3 ${style.state}`}>{item.status}</td>
              <td className="py-3">
                {item.bgNormal ? (
                  <img
                    alt="eye/icon"
                    className={style.eyeImg}
                    loading="lazy"
                    src={eye}
                  />
                ) : (
                  <img
                    alt="eye/icon"
                    className={style.eyeImg}
                    loading="lazy"
                    src={colorfullEye}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
/*
     <table className=" w-100 mx-auto ">
      <thead className={`p-3 ${style.tHead}`}>
        <tr className="w-100 d-flex align-items-center justify-content-between">
          <th>رقم الشكوي</th>
          <th>نوع الشكوي</th>
          <th>تاريخ الشكوي</th>
          <th>المدينة</th>
          <th>الادارة</th>
          <th>الحالة</th>
          <th>عرض</th>
        </tr>
      </thead>
      <tbody>
       
      </tbody>
    </table>
*/
/*
      <table class="table text-center">
      <thead className="text-white">
        <tr className="text-white">
         
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
        
        ))}
      </tbody>
    </table>
*/
