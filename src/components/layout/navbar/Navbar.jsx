import React, { useState, useEffect } from "react";
import style from "./navbar.module.css";
import logo from "../../../assets/logo.png";
import bell from "../../../assets/bell.png";
import avatarImg from "../../../assets/avatar.png";
import { useLocation } from "react-router-dom";
import searchIcon from "../../../assets/search.svg";
const Navbar = () => {
  const { pathname } = useLocation();
  const [complainPage, setComplainPage] = useState(false);
  useEffect(() => {
    console.log(pathname);
    if (pathname === "/") {
      setComplainPage(false);
    } else {
      setComplainPage(true);
    }
  }, [pathname]);

  return (
    <div className={style.mainContainer}>
      <div className="container d-flex align-items-center justify-content-between ">
        <img loading="lazy" alt="logo/img" src={logo} className={style.logo} />
        {complainPage && (
          <div className={`d-none d-md-block ${style.inpContainer}`}>
            <input
              className={style.inp}
              type="text"
              placeholder="ما الذي تبحث عنه"
            />
            <img
              loading="lazy"
              className={style.searchIcon}
              alt="searc/icon"
              src={searchIcon}
            />
          </div>
        )}
        <div className="d-flex  align-items-center gap-3">
          <button className={style.btn}>
            <img
              loading="lazy"
              alt="notification/img"
              src={bell}
              className={style.bell}
            />
          </button>
          <button className={style.btn}>Ar</button>
        </div>
        {complainPage && (
          <div className="d-flex align-items-center gap-1">
            <img
              loading="lazy"
              alt="avatart/img"
              className={style.avatarImg}
              src={avatarImg}
            />
            <div className="d-flex flex-column">
              <p className={`m-0 p-0 ${style.name}`}>فهد</p>
              <p className={`m-0 p-0 ${style.jobTitle}`}>مدقق شكاوي</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
