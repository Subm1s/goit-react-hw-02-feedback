import React from "react";
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({handleIncrement}) => {
  return (
    <div className={s.feedbackOptions}>
      <button name="good" className={s.incButton} type="button" onClick={handleIncrement}>
        Good
      </button>

      <button name="neutral" className={s.incButton} type="button" onClick={handleIncrement}>
        Neutral
      </button>

      <button name="bad" className={s.incButton} type="button" onClick={handleIncrement}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
    handleIncrement: PropTypes.func.isRequired,
}

export default FeedbackOptions;
