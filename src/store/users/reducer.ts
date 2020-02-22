import {RECEIVE_USERS, UPDATE_USER_VOTES, UsersState, UsersTypes} from "./types";


export default function usersReducer(state: UsersState = {users: []}, action: UsersTypes): UsersState {
    switch (action.type) {
        case RECEIVE_USERS :
            return {
                users: action.users
            };
        case UPDATE_USER_VOTES:
            const authedUser = action.authedUser;
            const users = state.users.filter(user => user.id !== authedUser.id);
            authedUser.answers.push(action.answer);
            users.push(authedUser);
            return {
                users: users
            };
        default :
            return state
    }
}