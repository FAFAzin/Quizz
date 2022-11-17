//context
import { createContext, useReducer } from 'react';
import questions from '../data/questions';

//array de stagios
const STAGES = ['Start', 'Playing', 'End'];

//objeto de estagios
const initialStage = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
}

//funcão que retorna o estágio(em breve refatorar com useState)
const quizReducer = (state, action) => {

    switch (action.type) {
        case 'CHANGE_STATE':
            return {
                ...state,
                gameStage: STAGES[1]
            };
        case 'REORDER_QUESTIONS':
            const reorderQuestions = questions.sort(() => {
                return Math.random() - 0.5;
            })
            return {
                ...state,
                questions: reorderQuestions,
            };

        default:
            return state;
    }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialStage)

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}