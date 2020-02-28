import {LOADINGSTART, LoadingState, LOADINGSTOP, LoadingTypes} from "./types";


export default function loadingReducer(state: LoadingState = {loading: false}, action: LoadingTypes): LoadingState {

    switch (action.type) {
        case LOADINGSTART:
            return {
                loading: true
            };
        case LOADINGSTOP:
            return {
                loading: false
            };
        default :
            return state
    }
}