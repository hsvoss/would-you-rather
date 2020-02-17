import {QuestionsTypes, RECEIVE_QUESTION} from "./types";

export default function questionsReducer(state = null, action: QuestionsTypes) {
    switch (action.type) {
        case RECEIVE_QUESTION :
            return action.questions;
        default :
            return state
    }
}