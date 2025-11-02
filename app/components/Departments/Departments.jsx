import React from "react";
import "./departments.scss";
import { ArrowRight, Eye } from "lucide-react";

const Departments = () => {
  const cardInfo = [
    {
      title: "Рефракционная лазерная хирургия",
      description:
        "Отделение рефракционной хирургии в клинике «SIHAT KO’Z» занимается всеми хирургическими и консервативными способами коррекции аномалий рефракции…",
    },
    {
      title: "Витреоретинальная хирургия",
      description:
        "Витреоретинальное отделение SIHAT KO'Z специализируется на разработке и внедрении современных хирургических технологий при различных патологиях переднего и...",
    },
    {
      title: "Интраокулярная лазерная хирургия",
      description:
        "В отделениях внедрены все самые современные методики диагностики, флюоресцентной ангиографии глазного дна и оптической когерентной томографии сетчатки и зрительного нерва...",
    },
  ];

  return (
    <section className="services">
      <div className="services__department department">
        <p className="department__pre-heading">— Отделения</p>
        <div className="department__info">
          <h2 className="department__heading">
            У нас для вас всё <br /> самое лучшее
          </h2>
          <p className="department__text">
            В отделениях внедрены все самые современные методики <br /> лечения
            для наших любимых пациентов
          </p>
          <button className="department__button">
            Все отделения <ArrowRight />
          </button>
        </div>
      </div>

      <div className="services__cards-container">
        {cardInfo.map((item) => (
          <div key={item.title} className="services__card card">
            <div className="card__icon">
              <Eye />
            </div>
            <div className="card__content">
              <h3 className="card__title">{item.title}</h3>
              <p className="card__description">{item.description}</p>
              <a className="card__link" href="#">
                Читать далее <ArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Departments;
