import css from './Options.module.css';

export default function Options({ handleClicks, totalFeedback, resetButton }) {
    return (
        <div>
            <button onClick={() => handleClicks('good')}>Good: </button>
            <button onClick={() => handleClicks('neutral')}>Neutral</button>
            <button onClick={() => handleClicks('bad')}>Bad</button>
            {totalFeedback !== 0 && <button onClick={() => resetButton()}>Reset</button>}
        </div>
    );
}
