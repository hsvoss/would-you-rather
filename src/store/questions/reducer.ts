import {ANSWER_QUESTION, AnswerQuestions, QuestionsState, QuestionsTypes, RECEIVE_QUESTION} from "./types";


export default function questionsReducer(state: QuestionsState = {questions: []}, action: QuestionsTypes): QuestionsState {

    function answerQuestion(currentState: QuestionsState, action: AnswerQuestions): QuestionsState {
        let currentQuestion = action.question;
        currentQuestion.addAnswer(action.answer, action.authedUser.id);

        let questions = currentState.questions.filter(question => question.id !== currentQuestion.id);
        questions.push(currentQuestion);
        return {
            questions: questions
        };
    }

    switch (action.type) {
        case RECEIVE_QUESTION :
            return {
                questions: action.questions
            };
        case ANSWER_QUESTION:
            return answerQuestion(state, action);
        default :
            return state
    }
}