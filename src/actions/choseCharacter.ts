import { Action } from "redux";

export const SET_CHOSEN_CHARACTER: string = 'SET_CHOSEN_CHARACTER';


interface choseCharacter extends Action {
    type: typeof SET_CHOSEN_CHARACTER,
    characterId: string
}



export function setChosenCharacter(characterId: string) {
    return {
        type: SET_CHOSEN_CHARACTER,
        characterId: characterId
    };
}