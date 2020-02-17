import {combineReducers} from 'redux'

import {loadingBarReducer} from 'react-redux-loading'
import choseUser from "./choseCharacter";

export default combineReducers({
    choseUser: choseUser,
    loadingBar: loadingBarReducer,
})