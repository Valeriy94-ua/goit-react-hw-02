import css from './Feedback.module.css';

export default function Feedback({ feedback, totalFeedback, positiveFeedback }) {
    if (totalFeedback === 0|| !feedback) {
        return (
            <div>
                <p>
                    No Feedback yet!
                </p>
            </div>
        );
    }
    return (
        <div>
            <p>Good: {feedback.good} </p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive: {positiveFeedback}%</p>
        </div>
    );
}
