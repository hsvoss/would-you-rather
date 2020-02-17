import {RECEIVE_USERS, UsersTypes} from "./types";

export default function usersReducer(state = null, action: UsersTypes) {
    switch (action.type) {
        case RECEIVE_USERS :
            return action.users;
        default :
            return state
    }
}