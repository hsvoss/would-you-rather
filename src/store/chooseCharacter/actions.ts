import {CharacterActionTypes, LOGOUT, LogoutAction, SET_CHOSEN_CHARACTER} from "./types";

export function setChosenCharacter(characterId: string): CharacterActionTypes {
    return {
        type: SET_CHOSEN_CHARACTER,
        characterId: characterId
    };
}

export function logout(): LogoutAction {
    return {
        type: LOGOUT,
    };
}