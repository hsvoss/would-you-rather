import Question from "../../service/model/Question";
import {QuestionsTypes, RECEIVE_QUESTION} from "./types";


export function receiveQuestions(questions: Question[]): QuestionsTypes {
    return {
        type: RECEIVE_QUESTION,
        questions,
    }
}

