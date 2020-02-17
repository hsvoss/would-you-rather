import DataServiceMock from "../service/DataServiceMock";
import {RECEIVE_QUESTION, receiveQuestions} from "./question";
import Question from "../service/model/Question";
import {hideLoading, showLoading} from "react-redux-loading";
import {receiveUsers} from "./users";

const CHOSEN_ID = 'micky';

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

export default function handleInitialData() {
    return (dispatch: any) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(hideLoading())
            })
    }
}

// export default async function handleInitialData(dispatch: Dispatch<Action>) {
//     dispatch(showLoading());
//     dispatch(setchosenCharactr(choseN_ID));
//     const {users, questions} = await getInitialData();
//     dispatch(receiveUsers(users));
//     dispatch(receiveQuestions(questions));
//     dispatch(hideLoading());
// }

