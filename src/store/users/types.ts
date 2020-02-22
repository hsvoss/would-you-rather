import User from "../../service/model/User";
import Answer from "../../service/model/Answer";

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const UPDATE_USER_VOTES = 'UPDATE_USER_VOTES';

export interface UsersState {
    users: User[]
}

interface UpdateUserVote {
    type: typeof UPDATE_USER_VOTES,
    authedUser: User,
    answer: Answer
}

interface ReceiveUsers {
    type: typeof RECEIVE_USERS,
    users: User[]
}

export type UsersTypes = ReceiveUsers | UpdateUserVote