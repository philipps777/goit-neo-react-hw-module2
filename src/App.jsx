import { useState, useEffect } from "react";
import Feedback from "./components/Feedback.jsx";
import Options from "./components/Options.jsx";
import Description from "./components/Description.jsx";
import Notification from "./components/Notification.jsx";
import style from "./App.module.css";
const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const localStorageFeedback = localStorage.getItem("localFeedback");
    if (!localStorageFeedback) {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }

    return JSON.parse(localStorageFeedback);
  });

  useEffect(() => {
    localStorage.setItem("localFeedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.bad + feedback.neutral + feedback.good;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div className={style.wrapper}>
      <Description />
      <Options
        options={feedback}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        total={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          options={feedback}
          totalQuantity={totalFeedback}
          positiveQuantity={positiveFeedback}
        />
      )}
    </div>
  );
};
export default App;
