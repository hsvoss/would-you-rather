import {RECEIVE_USERS, UsersState, UsersTypes} from "./types";


export default function usersReducer(state: UsersState = {users: []}, action: UsersTypes): UsersState {
    switch (action.type) {
        case RECEIVE_USERS :
            return {
                users: action.users
            };
        default :
            return state
    }
}