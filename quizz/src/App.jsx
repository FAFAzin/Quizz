import { useContext, useEffect } from 'react';

import Welcome from './components/Welcome'
import Question from './components/Question';
import GameOver from './components/GameOver';


import './App.css'
import { QuizContext } from './context/quiz';


function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  //embaralhar as questões
  useEffect(() => {
    dispatch({ type: 'REORDER_QUESTIONS' })
  }, [])


  return (
    <div className="App">
     
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Question />}
      {quizState.gameStage === 'End' && <GameOver />}


    </div>
  )
}

export default App
