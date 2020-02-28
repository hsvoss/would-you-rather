import {
    ANSWER_QUESTION,
    AnswerQuestions,
    CREATE_QUESTION,
    QuestionsState,
    QuestionsTypes,
    RECEIVE_QUESTION
} from "./types";
import Question, {addAnswer} from "../../service/model/Question";


export default function questionsReducer(state: QuestionsState = {questions: []}, action: QuestionsTypes): QuestionsState {

    function answerQuestion(currentState: QuestionsState, action: AnswerQuestions): QuestionsState {
        let oldQuestion: Question | undefined = currentState.questions.find(question => question.id === action.answer.questionId);


        if (oldQuestion) {
            let copiedQuestion: Question = {
                ...oldQuestion,
                optionOne: {...oldQuestion.optionOne},
                optionTwo: {...oldQuestion.optionTwo},
            };
            let copiedQuestions: Question[] = JSON.parse(JSON.stringify(currentState.questions));

            addAnswer(action.answer, action.authedUser.id, copiedQuestion);

            copiedQuestions = copiedQuestions.filter(question => question.id !== copiedQuestion.id);
            copiedQuestions.push(copiedQuestion);
            return {
                questions: copiedQuestions
            };
        } else {
            return {
                ...currentState
            }
        }
    }

    switch (action.type) {
        case RECEIVE_QUESTION :
            return {
                questions: JSON.parse(JSON.stringify(action.questions))
            };
        case ANSWER_QUESTION:
            return answerQuestion(state, action);
        case CREATE_QUESTION:
            let questionsCopy = JSON.parse(JSON.stringify(state.questions));
            questionsCopy.push(action.question);
            return {
                questions: questionsCopy
            };
        default :
            return state
    }
}