import React, { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
function RatingSelect({ select }) {
  const { feedbackEdit } = useContext(FeedbackContext);
  const [selected, setSelected] = useState(10);
  const handleChange = (eve) => {
    setSelected(+eve.target.value);
    select(+eve.target.value);
  };
  useEffect(() => {
    if (feedbackEdit.edit) setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);
  const listitems = [];
  for (let i = 0; i < 11; i++) {
    listitems.push(
      <li key={i}>
        <input
          type="radio"
          name="rating"
          id={`num${i}`}
          value={i}
          onChange={handleChange}
          checked={selected === i}
        />
        <label htmlFor={`num${i}`}>{i}</label>
      </li>
    );
  }
  return <ul className="rating">{listitems}</ul>;
}

export default RatingSelect;
