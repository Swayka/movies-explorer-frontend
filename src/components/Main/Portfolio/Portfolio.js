import React from "react";
import PortfolioLink from "../PortfolioLink/PortfolioLink";

function Portfolio(props) {
  return (
    <section className="portfolio page__container-small">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <PortfolioLink
            text="Статичный сайт"
            link="https://swayka.github.io/how-to-learn/"
          />
        </li>
        <li className="portfolio__list-item">
          <PortfolioLink
            text="Адаптивный сайт"
            link="https://swayka.github.io/russian-travel-NM/"
          />
        </li>
        <li className="portfolio__list-item">
          <PortfolioLink
            text="Одностраничное приложение"
            link="https://swayka.github.io/mesto-react/"
          />
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
