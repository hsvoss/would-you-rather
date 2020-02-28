import Question from "../../service/model/Question";
import User from "../../service/model/User";
import Answer from "../../service/model/Answer";

export const LOADINGSTART = 'LOADINGSTART';
export const LOADINGSTOP = 'LOADINGSTOP';

export interface LoadingState {
    loading: boolean
}

interface LoadingStart {
    type: typeof LOADINGSTART,
}

export interface LoadingStop {
    type: typeof LOADINGSTOP,
}

export type LoadingTypes = LoadingStart | LoadingStop