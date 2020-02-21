import DataServiceMock from "../service/DataServiceMock";
// import {getUsers_2} from "../service/DataServiceMock"
import {hideLoading, showLoading} from "react-redux-loading";
import Question from "../service/model/Question";
import User from "../service/model/User";
import {setChosenCharacter} from "./chooseCharacter/actions";
import {receiveUsers} from "./users/actions";
import {receiveQuestions} from "./questions/actions";
import {Dispatch} from "redux";

const getInitialData = async () => {
    const [users, questions] = await Promise.all<User[], Question[]>([
        DataServiceMock.getUsers(),
        DataServiceMock.getQuestions()
    ]);
    return {
        users,
        questions
    }
};

export default function handleInitialData(): Function {
    return async (dispatch: Dispatch) => {
        dispatch(showLoading());
        const {users, questions}: { users: User[], questions: Question[] } = await getInitialData();
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading());
    };
}
