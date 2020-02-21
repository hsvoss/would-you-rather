export const SET_CHOSEN_CHARACTER: string = 'SET_CHOSEN_CHARACTER';
export const LOGOUT: string = 'LOGOUT';

export interface CharacterState {
    characterId: string | null
}

export interface ChoseCharacterAction {
    type: typeof SET_CHOSEN_CHARACTER,
    characterId: string
}

export interface LogoutAction {
    type: typeof LOGOUT
}

export type CharacterActionTypes = ChoseCharacterAction | LogoutAction
