import React from "react";
import "./hero.scss";
import { ArrowRightIcon } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Офтальмологическая <br /> клиника SIHAT KO'Z
          </h1>
          <p className="hero__description">
            Мы предлагаем полный спектр офтальмологических услуг, нацеленных на
            улучшение, сохранение, восстановление зрения и хирургические
            вмешательства высочайшего уровня сложности.
          </p>
          <button className="hero__button">
            Связаться
            <span className="icon">
              <ArrowRightIcon size={15} />
            </span>
          </button>
          <div className="hero__pagination">
            <div className="hero__dot">
              <p className="hero__dot-overlay"></p>
            </div>
            <div className="hero__dot">
              <p className="hero__dot-overlay"></p>
            </div>
            <div className="hero__dot">
              <p className="hero__dot-overlay"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
