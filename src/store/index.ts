import {applyMiddleware, combineReducers, createStore} from "redux";

import choseCharacterReducer from "./chooseCharacter/reducer";
import questionsReducer from "./questions/reducer";
import usersReducer from "./users/reducer";
import thunk from "redux-thunk";
import logger from "./middleware/logger";
import {composeWithDevTools} from "redux-devtools-extension";
import loadingReducer from "./loading/reducer";

const rootReducer = combineReducers({
    choseCharacter: choseCharacterReducer,
    questionState: questionsReducer,
    userState: usersReducer,
    loadingBar: loadingReducer,
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
