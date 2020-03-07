import {CharacterActionTypes, LOGOUT, LogoutAction, SET_CHOSEN_CHARACTER} from "./types";

export function setChosenCharacter(authedUserId: string): CharacterActionTypes {
    return {
        type: SET_CHOSEN_CHARACTER,
        authedUserId: authedUserId
    };
}

export function logout(): LogoutAction {
    return {
        type: LOGOUT
    };
}
