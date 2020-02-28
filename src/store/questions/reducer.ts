import {ANSWER_QUESTION, AnswerQuestions, QuestionsState, QuestionsTypes, RECEIVE_QUESTION} from "./types";
import Question from "../../service/model/Question";


export default function questionsReducer(state: QuestionsState = {questions: []}, action: QuestionsTypes): QuestionsState {

    function answerQuestion(currentState: QuestionsState, action: AnswerQuestions): QuestionsState {
        let copiedQuestion: Question = action.question;
        let copiedQuestions: Question[] = [...currentState.questions];

        copiedQuestion.addAnswer(action.answer, action.authedUser.id);
        copiedQuestions = copiedQuestions.filter(question => question.id !== copiedQuestion.id);
        copiedQuestions.push(copiedQuestion);
        return {
            questions: copiedQuestions
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