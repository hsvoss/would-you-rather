import {CharacterActionTypes, CharacterState, LOGOUT, SET_CHOSEN_CHARACTER} from "./types";

function initCharState(): CharacterState {
    return {
        authedUser: null,
    };
}

export default function choseCharacterReducer(state: CharacterState = initCharState(), action: CharacterActionTypes): CharacterState {
    switch (action.type) {
        case LOGOUT:
            return {
                authedUser: null,
            };
        case SET_CHOSEN_CHARACTER :
            return {
                authedUser: "authedUser" in action ? action.authedUser : null,
            };
        default:
            return state
    }
}
