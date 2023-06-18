import React from 'react';

import { useLocation } from 'react-router-dom';
import { useFormWithValidation } from "../../../utils/validation";

function SearchForm({ handleSubmitForm, handleCheckbox, isChecked, setIsChecked }) {

  const location = useLocation().pathname;
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  function handleSubmitSeachForm(e) {
    e.preventDefault();

    if (!isValid) {
      console.log(errors);
    } else {
      handleSubmitForm({ request: values.search__input });
    }
  }

  React.useEffect(() => {
    if (location === '/movies' && localStorage.getItem('searchedText')) {
      const searchedText = localStorage.getItem('searchedText');
      values.search__input = searchedText;
    }

    if (localStorage.getItem('checkboxMovies') === 'true') {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [location]);

  return (
    <section className="searchform">
      <form className="searchform__search-block" name='search__form' onSubmit={handleSubmitSeachForm}>
        <fieldset className="searchform__input-container">
          <input
            type="text"
            className="searchform__search-field"
            placeholder="Фильм"
            required
            name="search__input"
            onChange={handleChange}
            minLength="1"
            value={values.search__input || ''}
          />
        </fieldset>
        <fieldset className="searchform__button-container">
          <button
            className={!isValid ? 'searchform__button_error' : 'searchform__button'}
            type="submit"
          >
          </button>
        </fieldset>
      </form>

      <fieldset className="filtercheckbox__checkbox-container">
        <label className="filtercheckbox__checkbox-label">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            checked={isChecked}
            onChange={handleCheckbox}
          />
          <div className="filtercheckbox__checkbox-slider round"></div>
        </label>
        <label htmlFor="checkbox" className="filtercheckbox__checkbox-labeltext">
          Короткометражки
        </label>
      </fieldset>
    </section>
  );
}

export default SearchForm;