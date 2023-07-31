import React, { useContext } from "react";
import PropTypes from "prop-types";
import Card from "../shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
  const { feedbackDelete, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => feedbackDelete(item.id)} className="close">
        <FaTimes color="purple"></FaTimes>
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple"></FaEdit>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
