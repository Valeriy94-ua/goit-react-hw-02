import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Notification from '../Notification/Notification'
import './App.css'

export default function App() { 

    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = localStorage.getItem('feedback');
        return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
    });
    

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

    const handleClicks = (key) => {
        setFeedback(prevFeedback => ({
            ...prevFeedback,
            [key]: prevFeedback[key] + 1,
        }));
    }

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    const positiveFeedback =  Math.round((feedback.good / totalFeedback) * 100);


    const resetButton = () => {
        setFeedback({ good: 0, neutral: 0, bad: 0 });
    }
    
    return (
        <>
            <Description/>
            <Options handleClicks={handleClicks} resetButton={resetButton}/>
            {totalFeedback === 0 ? <Notification /> : <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/> }
        </>
    )
}
