import User from "../../service/model/User";
import {RECEIVE_USERS, UsersTypes} from "./types";

export function receiveUsers(users: User[]): UsersTypes {
    return {
        type: RECEIVE_USERS,
        users,
    }
}