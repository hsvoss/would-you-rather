import {combineReducers} from 'redux'

import {loadingBarReducer} from 'react-redux-loading'
import chooseUser from "./chooseCharacter";

export default combineReducers({
    chooseUser: chooseUser,
    loadingBar: loadingBarReducer,
})