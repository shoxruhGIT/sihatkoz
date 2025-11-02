import React from "react";
import "./stats-panel.scss";

const StatsPanel = () => {
  return (
    <section className="stats-panel-section">
      <div className="stats-panel-section__wrapper">
        <div className="stats-panel">
          <div className="stats-panel__rating rating-block">
            <div className="rating-block__score">4.7</div>
            <div className="rating-block__details">
              <span className="rating-block__label">из 5</span>
              <div className="rating-block__stars">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
            </div>
          </div>

          {/* 2. Statistik elementlar */}
          <div className="stats-panel__items-container">
            <div className="stats-panel__item stat-item">
              <div className="stat-item__value">20+</div>
              <div className="stat-item__label stat-item__label--top">
                видов
              </div>
              <div className="stat-item__label stat-item__label--bottom">
                анализов
              </div>
            </div>

            <div className="stats-panel__item stat-item">
              <div className="stat-item__value">100+</div>
              <div className="stat-item__label stat-item__label--top">
                Предоставляемых
              </div>
              <div className="stat-item__label stat-item__label--bottom">
                услуг
              </div>
            </div>

            <div className="stats-panel__item stat-item">
              <div className="stat-item__value">12</div>
              <div className="stat-item__label stat-item__label--top">
                Количество
              </div>
              <div className="stat-item__label stat-item__label--bottom">
                врачей
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsPanel;
