import {CharacterActionTypes, CharacterState, LOGOUT, SET_CHOSEN_CHARACTER} from "./types";

function initCharState(): CharacterState {
    return {
        authedUserId: "",
    };
}

export default function choseCharacterReducer(state: CharacterState = initCharState(), action: CharacterActionTypes): CharacterState {
    switch (action.type) {
        case LOGOUT:
            return {
                authedUserId: "",
            };
        case SET_CHOSEN_CHARACTER :
            return {
                authedUserId: action.authedUserId as string,
            };
        default:
            return state
    }
}
