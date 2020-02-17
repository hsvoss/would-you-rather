import {SET_CHOSEN_CHARACTER} from '../actions/choseCharacter'

export default function choseUser(state = null, action: any) {
    switch (action.type) {
        case SET_CHOSEN_CHARACTER :
            return action.characterId;
        default :
            return state
    }
}