import React from "react";
import "./why-us.scss";

const WhyUs = () => {
  return (
    <section className="why-us">
      <div className="why-us__container">
        <div className="why-us__content">
          <p className="why-us__pre-heading">— Почему выбирают нас?</p>
          <h2 className="why-us__heading">
            Мы - ведущая офтальмологическая клиника
          </h2>

          <p className="why-us__text">
            Офтальмологическая клиника SIHAT KO'Z работает с 2009 года. За это
            время наши врачи провели более 35 000 высокотехнологичных операций и
            более 50 000 лазерных вмешательств при различных заболеваниях глаза.
          </p>

          <div className="why-us__stats stats">
            <div className="stats__item">
              <p className="stats__label">Удовлетворенность клиентов</p>
              <div className="stats__bar-container">
                <div className="stats__bar stats__bar--clients"></div>
                <span className="stats__value">90%</span>
              </div>
            </div>
            <div className="stats__item">
              <p className="stats__label">Успех хирургии</p>
              <div className="stats__bar-container">
                <div className="stats__bar stats__bar--surgery"></div>
                <span className="stats__value">95%</span>
              </div>
            </div>
            <div className="stats__item">
              <p className="stats__label">Рейтинг врачей</p>
              <div className="stats__bar-container">
                <div className="stats__bar stats__bar--doctors"></div>
                <span className="stats__value">85%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-us__video">
          <div className="why-us__play-button"></div>
      </div>
    </section>
  );
};

export default WhyUs;
