
import Description from '../Description/Description';
import Options from '../Options/Options'
import './App.css'

export const App = () => {
	const [feedbackTypes, setFeedbackTypes] = useState({
		good: 0,
		neutral: 0,
		bad: 0
	  });
	return (
		<>
			<Description/>
			<Options/>
		</>
	)
};


export default App
