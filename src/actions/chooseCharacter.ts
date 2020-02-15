export const SET_CHOOSEN_CHARACTER = 'SET_CHOOSEN_CHARACTER';

interface ChooseCharacter {
    type: typeof SET_CHOOSEN_CHARACTER,
    characterId: string
}

export function setChoosenCharactr(characterId: string): ChooseCharacter {
    return {
        type: SET_CHOOSEN_CHARACTER,
        characterId,
    }
}