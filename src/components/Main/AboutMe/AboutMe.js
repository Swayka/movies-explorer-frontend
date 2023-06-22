import React from "react";
import Title from "../../Title/Title"
import photo from "../../../images/Nata.jpg";

function AboutMe(props) {
  return (
    <>
      <Title title="Студент" />
      <section className="about-me" id="student">
        <article className="about-me__info">
          <div>
            <h3 className="about-me__name">Наталья</h3>
            <p className="about-me__prof">Фронтенд-разработчик, 36 лет</p>
            <p className="about-me__about">
              Я&nbsp;родилась и живу в&nbsp;городе Элиста, закончила физмат
              по&nbsp;специальности &laquo;Математика&raquo; КалмГУ.
              У&nbsp;меня есть&nbsp;дочь. Я&nbsp;люблю слушать музыку,
              и&nbsp;рисовать акварелью. Учусь на&nbsp;курсе Я.Практикума &laquo;Веб-разработчик&raquo;.
            </p>
          </div>
          <a
            className="about-me__link"
            href="https://github.com/Swayka"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </article>
        <img className="about-me__photo" src={photo} alt="Фотография" />
      </section>
    </>
  );
}

export default AboutMe;
