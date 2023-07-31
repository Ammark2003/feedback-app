import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackData from "../data/FeedbackData";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const updateFeedback = (id, upditem) => {
    setFeedback(
      feedback.map((item) => (id === item.id ? { ...item, ...upditem } : item))
    );
    feedbackEdit.edit = false;
  };

  const feedbackDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this item ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const feedbackAdd = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackDelete,
        feedbackAdd,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
