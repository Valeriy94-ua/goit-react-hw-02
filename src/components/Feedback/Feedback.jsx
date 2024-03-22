import css from './Feedback.module.css';

export default function Feedback({ feedback, totalFeedback, positiveFeedback }) {

    return (
        <div>
            <p className={css.good_option}>Good: {feedback.good} </p>
            <p className={css.neutral_option}>Neutral: {feedback.neutral}</p>
            <p className={css.bad_option}>Bad: {feedback.bad}</p>
            <p className={css.total}>Total: {totalFeedback}</p>
            <p className={css.good_option}>Positive: {positiveFeedback}%</p>
        </div>
    );
}
