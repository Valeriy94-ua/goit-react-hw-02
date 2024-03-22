import css from './Notification.module.css'

export default function Notification () {
    return (
        <div>
            <p className={css.notification}>
                No Feedback yet!
            </p>
        </div>
    );
}