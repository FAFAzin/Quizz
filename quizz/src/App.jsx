import { useContext, useEffect } from 'react';

import Welcome from './components/Welcome'
import Question from './components/Question';


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
      <h1>Quiz de programação</h1>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Question />}

    </div>
  )
}

export default App
