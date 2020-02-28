import {LOADINGSTART, LOADINGSTOP, LoadingTypes} from "./types";


export function startLoading(): LoadingTypes {
    return {
        type: LOADINGSTART,
    }
}

export function stopLoading(): LoadingTypes {
    return {
        type: LOADINGSTOP,
    }
}

