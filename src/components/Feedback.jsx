import style from "./Feedback.module.css";

const Feedback = ({ options, totalQuantity, positiveQuantity }) => {
  const { good, neutral, bad } = options;

  return (
    <div className={style.container}>
      <ul className={style.list}>
        <li className={style.item}>
          <p className={style.stats}>Good:</p>
          <p className={style.value}>{good}</p>
        </li>
        <li className={style.item}>
          <p className={style.stats}>Neutral:</p>
          <p className={style.value}>{neutral}</p>
        </li>
        <li className={style.item}>
          <p className={style.stats}>Bad:</p>
          <p className={style.value}>{bad}</p>
        </li>
        <li className={style.item}>
          <p className={style.stats}>Total:</p>
          <p className={style.value}>{totalQuantity}</p>
        </li>
        <li className={style.item}>
          <p className={style.stats}>Positive feedback:</p>
          <p className={style.value}>{positiveQuantity} %</p>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
