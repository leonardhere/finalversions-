import { connect } from "react-redux";
import { useState } from "react";
import Rate from '../../rate';
import { addReview } from '../../../redux/features/reviews';

import style from './review-form.module.css';
import ValidationPopUp from "../../validation-pop-up/validation-pop-up";

const INIT_FORM_STATE = {
  name: '',
  text: '',
  rating: ''
};

function ReviewForm({ handleSubmit }) {

  const [formValues, setFormValues] = useState(INIT_FORM_STATE);
  const [isFormValid, setIsFormValid] = useState(true);

  //TODO Вынести в свой собственный ХУК
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormValues(
      {
        ...formValues,
        [name]: value
      }
    )
  }

  const handleRateChange = (idx) => {
    setFormValues(
      {
        ...formValues,
        rating: idx
      }
    )
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (validateFormValues(formValues)) {
      handleSubmit(formValues)
    }
    //TODO Добавить способ обнуления значений формы!
  }

  const validateFormValues = () => {
    if (formValues.name === '' || formValues.text === '') {
      setIsFormValid(false);
      setTimeout(() => {
        setIsFormValid(true);
      }, 5000);
      return false;
    }
    return true;
  }

  return (
    <>
      {isFormValid ? '' : <ValidationPopUp message={'Invalid Form Data'} />}
      <div div className={style.reviewForm} >
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="user">User</label>
          <input
            type="text"
            name="name"
            placeholder="insert username"
            onChange={handleInputChange}
          />
          <label htmlFor="review">Review</label>
          <textarea
            name="text"
            placeholder="review"
            onChange={handleInputChange}
          />
          <div>
            <Rate handleRateChange={handleRateChange} />
          </div>
          <button>Add review</button>
        </form>
      </div>
    </>
  )
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    handleSubmit: (review) => dispatch(addReview(review, props))
  }
}

export default connect(null, mapDispatchToProps)(ReviewForm);