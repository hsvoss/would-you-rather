import User from "../../service/model/User";

export const RECEIVE_USERS = 'RECEIVE_USERS';

interface ReceiveUsers {
    type: typeof RECEIVE_USERS,
    users: User[]
}

export type UsersTypes = ReceiveUsers //| OtherType