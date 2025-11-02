import React from "react";
import "./blog.scss";
import { ArrowRight, Eye } from "lucide-react";

const Blog = () => {
  const cardInfo = [
    {
      title: "Рефракционная лазерная хирургия",
      img: "/card-1.jpg",
      description:
        "Отделение рефракционной хирургии в клинике «SIHAT KO’Z» занимается всеми хирургическими и консервативными способами коррекции аномалий рефракции…",
    },
    {
      title: "Витреоретинальная хирургия",
      img: "/card-1.jpg",
      description:
        "Витреоретинальное отделение SIHAT KO'Z специализируется на разработке и внедрении современных хирургических технологий при различных патологиях переднего и...",
    },
    {
      title: "Интраокулярная лазерная хирургия",
      img: "/card-1.jpg",
      description:
        "В отделениях внедрены все самые современные методики диагностики, флюоресцентной ангиографии глазного дна и оптической когерентной томографии сетчатки и зрительного нерва...",
    },
  ];

  return (
    <section className="blog">
      <div className="blog__container news">
        <p className="news__pre-heading">— Блог и новости — </p>
        <h2 className="news__heading">Последние новости</h2>
        <p className="news__text">
          Открывая мир четкого зрения: инновации, точность, забота. Наша клиника
          воплощает будущее офтальмологии с <br /> передовыми технологиями и
          индивидуальным подходом к каждому пациенту.
        </p>
      </div>

      <div className="blog__cards-container">
        {cardInfo.map((item) => (
          <div key={item.title} className="blog__card">
            <img className="blog__card-img" src={item.img} alt={item.title} />

            <div className="blog__card-content">
              <h3 className="blog__card-title">{item.title}</h3>
              <p className="blog__card-description">{item.description}</p>
              <button className="department__button">Читать далее</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
