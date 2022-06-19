// Kalian bisa menambahkan CSS di src/components/Header.css
import React from "react";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={style.header__container}>
      <div className={style.header__content}>
        <h1 className={style.header__title}>Call a Friend</h1>
        <p className={style.header__desc}>your friendly contact app</p>
      </div>
    </header>
  );
};

export default Header;