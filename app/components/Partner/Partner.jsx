import React from "react";
import "./partner.scss";

const Partner = () => {
  return (
    <section className="partner">
      <div className="partner__container partner">
        <p className="partner__pre-heading">— Наши партнёры — </p>
        <h2 className="partner__heading">Партнёры нашей клиники</h2>
      </div>

      <div className="partner__list">
        <img className="partner__list-img" src="/reichert.jpg" alt="reichert" />
        <img className="partner__list-img" src="/zeiss.jpg" alt="reichert" />
        <img className="partner__list-img" src="/reichert.jpg" alt="reichert" />
      </div>
    </section>
  );
};

export default Partner;
