import {CharacterActionTypes, LOGOUT, LogoutAction, SET_CHOSEN_CHARACTER} from "./types";

export function setChosenCharacter(characterId: string): CharacterActionTypes {
    return {
        type: SET_CHOSEN_CHARACTER,
        characterId: characterId
    };
}

export function logout(characterId: string): LogoutAction {
    return {
        type: LOGOUT,
        characterId: null
    };
}