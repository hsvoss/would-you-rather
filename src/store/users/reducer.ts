import {RECEIVE_USERS, UPDATE_USER_ASKED_QUESTION, UPDATE_USER_VOTES, UsersState, UsersTypes} from "./types";
import User from "../../service/model/User";


export default function usersReducer(state: UsersState = {users: []}, action: UsersTypes): UsersState {
    switch (action.type) {
        case RECEIVE_USERS :
            return {
                users: JSON.parse(JSON.stringify(action.users))
            };
        case UPDATE_USER_VOTES:
            const copiedAuthedUser = JSON.parse(JSON.stringify(action.authedUser));
            const copiedAnswer = JSON.parse(JSON.stringify(action.authedUser));
            let copiedUsers: User[] = JSON.parse(JSON.stringify(state.users));
            copiedUsers = copiedUsers.filter(user => user.id !== copiedAuthedUser.id);
            copiedAuthedUser.answers.push(copiedAnswer);
            copiedUsers.push(copiedAuthedUser);
            return {
                users: copiedUsers
            };
        case UPDATE_USER_ASKED_QUESTION:
            let copiedUsers2: User[] = JSON.parse(JSON.stringify(state.users));
            copiedUsers2 = copiedUsers2.map(user => {
                if (user.id === action.authedUserId) {
                    user.questionIDs.push(action.questionId);
                }
                return user;
            });
            return {
                users: copiedUsers2
            };
        default :
            return state
    }
}