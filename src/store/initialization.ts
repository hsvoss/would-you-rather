import DataServiceMock from "../service/DataServiceMock";
// import {getUsers_2} from "../service/DataServiceMock"
import Question from "../service/model/Question";
import User from "../service/model/User";
import {receiveUsers} from "./users/actions";
import {receiveQuestions} from "./questions/actions";
import {Dispatch} from "redux";
import {startLoading, stopLoading} from "./loading/actions";

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
        dispatch(startLoading());
        const {users, questions}: { users: User[], questions: Question[] } = await getInitialData();
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(stopLoading());
    };
}
