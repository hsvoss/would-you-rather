export const SET_CHOOSEN_CHARACTER: string = 'SET_CHOOSEN_CHARACTER';


export function setChoosenCharactr(characterId: string) {
    return {
        type: SET_CHOOSEN_CHARACTER,
        characterId: characterId
    };
}