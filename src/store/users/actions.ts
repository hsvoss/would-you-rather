import User from "../../service/model/User";
import {RECEIVE_USERS, UPDATE_USER_ASKED_QUESTION, UsersTypes} from "./types";

export function receiveUsers(users: User[]): UsersTypes {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function askQuestion(userId: string, questionId: string): UsersTypes {
    return {
        type: UPDATE_USER_ASKED_QUESTION,
        authedUserId: userId,
        questionId: questionId
    }
}
