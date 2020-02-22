import {CharacterActionTypes, LOGOUT, LogoutAction, SET_CHOSEN_CHARACTER} from "./types";
import User from "../../service/model/User";

export function setChosenCharacter(authedUser: User): CharacterActionTypes {
    return {
        type: SET_CHOSEN_CHARACTER,
        authedUser: authedUser
    };
}

export function logout(): LogoutAction {
    return {
        type: LOGOUT,
    };
}