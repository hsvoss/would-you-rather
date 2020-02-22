import User from "../../service/model/User";

export const SET_CHOSEN_CHARACTER: string = 'SET_CHOSEN_CHARACTER';
export const LOGOUT: string = 'LOGOUT';

export interface CharacterState {
    authedUser: User | null
}

export interface ChoseCharacterAction {
    type: typeof SET_CHOSEN_CHARACTER,
    authedUser: User | null
}

export interface LogoutAction {
    type: typeof LOGOUT
}

export type CharacterActionTypes = ChoseCharacterAction | LogoutAction
