import React from "react";
import "./reviews.scss";

const Reviews = () => {
  return (
    <section className="reviews-section">
      <div className="reviews-content">
        <div className="reviews-section__image-col">
          <img
            src="/doctor-man.jpg"
            alt="children"
            className="reviews__main-image"
          />

          <img
            src="/doctor-women.jpg"
            alt="doctors"
            className="reviews__floating-image"
          />
        </div>

        <div className="reviews-section__content-col">
          <p className="caption">Отзывы</p>
          <h2 className="title">Что говорят о нашей клинике</h2>
          <div className="reviews-section__comment-container">
            <div className="reviews-section__comment">
              <p className="comment-description">
                Дорогой профессор, врачи и весь мед персонал клиники Сихат Куз!
                Выражаем искреннюю благодарность за операцию – Лазерная
                коррекция глаз. Это для нас огромное счастье, неописуемая
                радость. Благодарим, благодарим от всей души! Низкий вам поклон
                Всем Вам!!!
              </p>
              <div className="comment-person">
                <div className="person-info">
                  <img className="person-img" src="/person.jpg" alt="person" />
                  <p className="person-name">
                    Холлиева <br /> Нафосат
                  </p>
                </div>
                <img className="person-icon" src="/quote.png" alt="quote" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
