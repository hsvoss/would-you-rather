export const SET_CHOSEN_CHARACTER: string = 'SET_CHOSEN_CHARACTER';

export interface CharacterState {
    characterId: string
}

interface ChoseCharacterAction {
    type: typeof SET_CHOSEN_CHARACTER,
    characterId: string
}

export type CharacterActionTypes = ChoseCharacterAction //| OtherType