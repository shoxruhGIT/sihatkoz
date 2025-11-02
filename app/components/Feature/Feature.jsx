import React from "react";
import "./feature.scss";

const Feature = () => {
  const featuresData = [
    {
      iconSrc: "/doctor_icon.png",
      title: "Лицензированные врачи",
      description:
        "У нас работают высококлассные врачи-офтальмологи, опыт которых насчитывает десятилетия.",
    },
    {
      iconSrc: "/eye_icon.png",
      title: "Качественное обслуживание",
      description:
        "Мы смогли обеспечить всех наших пациентов комфортом и гарантируем им неизменное высокое качество услуг.",
    },
    {
      iconSrc: "/tech_icon.png",
      title: "Современные технологии",
      description:
        "Наша клиника оборудована медицинским оборудованием, изготовленным в США, Японии и Германии.",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-content">
        <div className="section-header">
          <div className="section-header__content">
            <p className="section-header__caption">— Преимущества</p>
            <h2 className="section-header__title">
              Преимущества при уходе за глазами
            </h2>
          </div>
          <p className="info-text">
            Мы предлагаем полный спектр услуг по диагностике и лечению глазных
            <br /> заболеваний, как для взрослых, так и для детей.
          </p>
        </div>

        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-card__icon-wrapper">
                <img src={feature.iconSrc} alt={feature.title} />
              </div>
              <div className="feature-card__content">
                <h3 className="feature-card__title">{feature.title}</h3>
                {feature.subtitle && (
                  <p className="feature-card__subtitle">{feature.subtitle}</p>
                )}
                <p className="feature-card__description">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
