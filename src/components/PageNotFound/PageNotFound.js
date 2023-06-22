import React from "react";

function PageNotFound() {
  function goBack() {
    window.history.back();
  }
  return (
    <div className="not-found">
      <h1 className="not-found__text not-found__text_title">404</h1>
      <p className="not-found__text not-found__text_subtitle">
        Страница не найдена
      </p>
      <button onClick={goBack} className="not-found__button not-found__text">
        Назад
      </button>
    </div>
  );
}

export default PageNotFound;
