import Question from "../../service/model/Question";

export const RECEIVE_QUESTION = 'RECEIVE_QUESTION';

interface ReceiveQuestions {
    type: typeof RECEIVE_QUESTION,
    questions: Question[]
}


export type QuestionsTypes = ReceiveQuestions //| OtherType