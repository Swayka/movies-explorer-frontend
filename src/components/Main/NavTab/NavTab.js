import React from "react";

function NavTab() {
  return (
    <ul className="navtab">
      <li className="navtab__item"><a className="navtab__link" href="#aboutproject">О проекте</a></li>
      <li className="navtab__item"><a className="navtab__link" href="#techs">Технологии</a></li>
      <li className="navtab__item"><a className="navtab__link" href="#student">Студент</a></li>
    </ul>
  );
}

export default NavTab;