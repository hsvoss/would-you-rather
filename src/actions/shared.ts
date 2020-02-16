import DataServiceMock from "../service/DataServiceMock";
import {RECEIVE_QUESTION, receiveQuestions} from "./question";
import Question from "../service/model/Question";
import {Action, Dispatch} from "redux";
import {hideLoading, showLoading} from "react-redux-loading";
import {receiveUsers} from "./users";
import {setChoosenCharactr} from "./chooseCharacter";

const CHOOSEN_ID = 'micky';

interface Shared {
    type: typeof RECEIVE_QUESTION,
    questions: Question[]
}

function getInitialData() {
    return Promise.all([
        DataServiceMock.getUsers(),
        DataServiceMock.getQuestions()
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}

export default async function handleInitialData(dispatch: Dispatch<Action>) {
    dispatch(showLoading());
    dispatch(setChoosenCharactr(CHOOSEN_ID));
    const {users, questions} = await getInitialData();
    dispatch(receiveUsers(users));
    dispatch(receiveQuestions(questions));
    dispatch(hideLoading());
}
