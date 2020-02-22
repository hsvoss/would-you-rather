import Question from "../../service/model/Question";
import User from "../../service/model/User";
import Answer from "../../service/model/Answer";

export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';

export interface QuestionsState {
    questions: Question[]
}

interface ReceiveQuestions {
    type: typeof RECEIVE_QUESTION,
    questions: Question[]
}

export interface AnswerQuestions {
    type: typeof ANSWER_QUESTION,
    question: Question,
    answer: Answer,
    authedUser: User
}


export type QuestionsTypes = ReceiveQuestions | AnswerQuestions