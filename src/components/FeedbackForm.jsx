import React, { useEffect } from "react";
import Card from "../shared/Card";
import Button from "./Button";
import { useState, useContext } from "react";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackForm() {
  const { feedbackAdd, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
      setBtnDisabled(false);
    }
  }, [feedbackEdit]);

  const select = (rating) => {
    setRating(rating);
  };

  const handleSubmit = (eve) => {
    eve.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        feedbackAdd(newFeedback);
      }
    }
    setText("");
  };

  const handleTextChange = (eve) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be atleast 10 characters long");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(eve.target.value);
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service with you?</h2>
        <RatingSelect select={select} />
        <div className="input-group">
          <input
            className="reverse"
            type="text"
            placeholder="Enter review"
            value={text}
            onChange={handleTextChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
