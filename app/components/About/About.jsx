import React from "react";
import Image from "next/image";
import "./about.scss";
import { Check } from "lucide-react";

const servicePoints = [
  "улучшение зрения",
  "сохранение зрения",
  "восстановление зрения",
  "рутинные проверки",
  "лазерная коррекция",
  "хирургические вмешательства",
];

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-section__image-col">
          <img src="/hero_banner.jpg" alt="children" className="main-image" />

          <img src="/img.jpg" alt="doctors" className="floating-image" />
        </div>

        <div className="about-section__content-col">
          <p className="caption">О нас</p>
          <h2 className="title">Мы – ведущая офтальмологическая клиника</h2>
          <p className="description">
            Мы применяем современное диагностическое оборудование, уникальные
            микрохирургические системы, лазерные установки, передовые методики и
            технологии для решения самых разных проблем со зрением не только в
            стандартных, но и в сложных случаях
          </p>

          <div className="list-grid">
            {servicePoints.map((point, index) => (
              <div className="list-item" key={index}>
                <Check size={14} style={{ color: "#7CBFC5" }} />
                <span className="list-item__text">{point}</span>
              </div>
            ))}
          </div>

          <button className="cta-button">Читать далее</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
