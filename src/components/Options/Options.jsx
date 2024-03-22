import css from './Options.module.css';

export default function Options({ handleClicks, totalFeedback, resetButton }) {
    return (
        <div>
            <button className={css.good_option} onClick={() => handleClicks('good')}>Good: </button>
            <button className={css.neutral_option} onClick={() => handleClicks('neutral')}>Neutral</button>
            <button className={css.bad_option} onClick={() => handleClicks('bad')}>Bad</button>
            {totalFeedback !== 0 && <button className={css.reset_option} onClick={() => resetButton()}>Reset</button>}
        </div>
    );
}
