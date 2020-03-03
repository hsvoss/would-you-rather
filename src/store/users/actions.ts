import User from "../../service/model/User";
import {RECEIVE_USERS, UPDATE_USER_ASKED_QUESTION, UPDATE_USER_VOTES, UsersTypes} from "./types";
import Answer from "../../service/model/Answer";

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

export function userAnsweredQuestion(user: User, answer: Answer): UsersTypes {
    return {
        type: UPDATE_USER_VOTES,
        authedUser: user,
        answer: answer
    }
}
