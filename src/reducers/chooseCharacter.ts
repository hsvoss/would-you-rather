import {SET_CHOOSEN_CHARACTER} from '../actions/chooseCharacter'

export default function chooseUser(state = null, action: any) {
    switch (action.type) {
        case SET_CHOOSEN_CHARACTER :
            return action.characterId;
        default :
            return state
    }
}