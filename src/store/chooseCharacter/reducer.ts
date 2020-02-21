import {CharacterActionTypes, CharacterState, ChoseCharacterAction, LOGOUT, SET_CHOSEN_CHARACTER} from "./types";

export default function choseCharacterReducer(state: CharacterState = {characterId: null}, action: CharacterActionTypes): CharacterState {
    switch (action.type) {
        case LOGOUT:
            return {
                characterId: null
            };
        case SET_CHOSEN_CHARACTER :
            return {
                characterId: (action as ChoseCharacterAction).characterId
            };
        default:
            return state
    }
}
