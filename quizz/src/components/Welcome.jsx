//context
import { useContext } from 'react';
import { QuizContext } from '../context/quiz'

import Quiz from '../image/quiz.svg';

import './Welcome.css';

const Welcome = () => {

    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div id='Welcome'>
            <div className="titulo">
                <h1>Quiz</h1>
                <h3>programação</h3>
            </div>
            <button id='btn' onClick={() => dispatch({ type: 'CHANGE_STATE' })}>Iniciar</button>

        </div>
    )
}

export default Welcome