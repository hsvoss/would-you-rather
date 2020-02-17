import {applyMiddleware, combineReducers, createStore} from "redux";

import {loadingBarReducer} from 'react-redux-loading'
import choseCharacterReducer from "./chooseCharacter/reducer";
import questionsReducer from "./questions/reducer";
import usersReducer from "./users/reducer";
import thunk from "redux-thunk";
import logger from "./middleware/logger";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    choseCharacter: choseCharacterReducer,
    questions: questionsReducer,
    users: usersReducer,
    loadingBar: loadingBarReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [thunk, logger];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    return createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    );
}
