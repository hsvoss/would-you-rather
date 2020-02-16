import User from "../service/model/User";
import {Action} from "redux";

export const RECEIVE_USERS = 'RECEIVE_USERS';

interface ReceiveUsers extends Action {
    type: typeof RECEIVE_USERS,
    users: User[]
}

export function receiveUsers(users: User[]): ReceiveUsers {
    return {
        type: RECEIVE_USERS,
        users,
    }
}