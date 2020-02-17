import {CharacterActionTypes, SET_CHOSEN_CHARACTER} from "./types";

export default function choseCharacterReducer(state = null, action: CharacterActionTypes) {
    switch (action.type) {
        case SET_CHOSEN_CHARACTER :
            return action.characterId;
        default :
            return state
    }
}