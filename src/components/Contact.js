// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import style from "./contact.module.css";

const Contact = ({ data }) => {
  return (
    <div className={style.card}>
      <img className={style.card__image} src={data.photo} alt={data.name} />
      <div className={style.card__content}>
        <h5 className={style.card__phone}>{data.phone}</h5>
        <div className={style.card__body}>
          <h2 className={style.card__title}>{data.name}</h2>
          <p className={style.card__email}>{data.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;