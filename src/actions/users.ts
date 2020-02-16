import User from "../service/model/User";

export const RECEIVE_USERS = 'RECEIVE_USERS';

interface ReceiveUsers {
    type: typeof RECEIVE_USERS,
    users: User[]
}

export function receiveUsers(users: User[]) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}