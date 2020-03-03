import {
  CharacterActionTypes,
  LOGOUT,
  SET_CHOSEN_CHARACTER,
  LogoutAction
} from "./types";

export function setChosenCharacter(authedUserId: string): CharacterActionTypes {
  return {
    type: SET_CHOSEN_CHARACTER,
    authedUserId: authedUserId
  };
}

export function logout(): LogoutAction {
  return {
    type: LOGOUT
  };
}
