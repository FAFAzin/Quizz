import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Welldone from '../image/welldone.svg';

import './GameOver.css';

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (

        <div id="gameover">
            <h2>Fim de Jogo</h2>
            <div className="pontos">
                <p>Pontuação: {quizState.score}</p>
                <button id="butao" onClick={() => dispatch({ type: 'NEW_GAME' })}>Reiniciar</button>
            </div>
        </div>


    )
}

export default GameOver