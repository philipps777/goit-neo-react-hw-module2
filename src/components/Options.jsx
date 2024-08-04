import style from "./Options.module.css";
const Options = ({ options, total, updateFeedback, resetFeedback }) => {
  const buttonFeedback = Object.keys(options);

  const handleClick = (feedbackType) => updateFeedback(feedbackType);

  return (
    <div className={style.casebtn}>
      {buttonFeedback.map((buttonType, idx) => {
        return (
          <button
            onClick={() => {
              handleClick(buttonType);
            }}
            className={style.btn}
            type="button"
            key={idx}
          >
            {buttonType}
          </button>
        );
      })}
      {total > 0 && (
        <button
          onClick={() => resetFeedback()}
          className={style.btn}
          type="reset"
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
