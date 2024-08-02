import { useState, useEffect } from "react";

import { Description, Options, Feedback, Notification } from "@components";

const App = () => {
  // const [feedback, setFeedback] = useState(() => {
  //   const localStorageFeedback = localStorage.getItem("localStorageStoryBook");
  //   if (!localStorageFeedback) {
  //     return {
  //       good: 0,
  //       neutral: 0,
  //       bad: 0,
  //     };
  //   }
  //   return JSON.parse(localStorageFeedback);
  // });
  // useEffect(() => {
  //   localStorage.setItem("localStorageStoryBook", JSON.stringify(feedback));
  // }, [feedback]);
  // const handleFeedback = (feedbackType) => {
  //   setFeedback((prevFeedback) => ({
  //     ...prevFeedback,
  //     [feedbackType]: prevFeedback[feedbackType] + 1,
  //   }));
  // };
  // const handleReset = () => {
  //   setFeedback({
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   });
  // };
  // const totalFeedback = feedback.bad + feedback.neutral + feedback.good;
  // const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  // return (
  //   <main>
  //     <Description />
  //     <Options
  //       options={feedback}
  //       updateFeedback={updateFeedback}
  //       resetFeedback={resetFeedback}
  //       total={totalFeedback}
  //     />
  //     {totalFeedback === 0 ? (
  //       <Notification />
  //     ) : (
  //       <Feedback
  //         options={feedback}
  //         totalPoints={totalFeedback}
  //         positivePoints={positiveFeedback}
  //       />
  //     )}
  //   </main>
  // );
};
export default App;
