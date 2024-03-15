export default function Feedback({ feedback, totalFeedback }) {
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
        </div>
    );
}
