export const SET_CHOSEN_CHARACTER = 'SET_CHOSEN_CHARACTER';
export const LOGOUT = 'LOGOUT';


export interface CharacterState {
    authedUserId: string
}

interface ChoseCharacterAction {
    type: typeof SET_CHOSEN_CHARACTER,
    authedUserId: string
}

export interface LogoutAction {
    type: typeof LOGOUT
}

export type CharacterActionTypes = ChoseCharacterAction | LogoutAction
