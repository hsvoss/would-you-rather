import {CharacterActionTypes, LOGOUT, SET_CHOSEN_CHARACTER} from "./types";

export default function choseCharacterReducer(state = null, action: CharacterActionTypes) {
    switch (action.type) {
        case LOGOUT:
            return null;
        case SET_CHOSEN_CHARACTER :
            return action.characterId;
        default :
            return state
    }
}