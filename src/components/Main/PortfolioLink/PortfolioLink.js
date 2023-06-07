import React from "react";
import arrow from "../../../images/Arrow.svg";

function PortfolioLink(props) {
  return (
    <a
      className="portfolio-link"
      href={props.link}
      target="_blank"
      rel="noreferrer"
    >
      {props.text}
      <img className="portfolio-link__logo" src={arrow} alt="Стрелочка" />
    </a>
  );
}

export default PortfolioLink;
