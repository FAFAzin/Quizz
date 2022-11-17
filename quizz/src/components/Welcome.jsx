import Quiz from '../image/quiz.svg';

import './Welcome.css';

const Welcome = () => {
    return (
        <div id='Welcome'>
            <h2>Seja bem-vindo</h2>
            <p>Clique no botão abaixo para começar</p>
            <button>Iniciar</button>
            <img src={Quiz} alt="Inicio do Quiz" />
        </div>
    )
}

export default Welcome