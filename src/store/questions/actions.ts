import Question from "../../service/model/Question";
import {ANSWER_QUESTION, QuestionsTypes, RECEIVE_QUESTION} from "./types";
import User from "../../service/model/User";
import DataServiceMock from "../../service/DataServiceMock";
import Answer from "../../service/model/Answer";
import {Dispatch} from "redux";


export function receiveQuestions(questions: Question[]): QuestionsTypes {
    return {
        type: RECEIVE_QUESTION,
        questions,
    }
}

// export default function handleInitialData(): Function {
//     return async (dispatch: Dispatch) => {
//         dispatch(showLoading());
//         const {users, questions}: { users: User[], questions: Question[] } = await getInitialData();
//         dispatch(receiveUsers(users));
//         dispatch(receiveQuestions(questions));
//         dispatch(hideLoading());
//     };
// }

export function answerQuestion(answer: Answer, authedUser: User): Function {

    return (dispatch: Dispatch): void => {
        const promise: Promise<void> = DataServiceMock.saveQuestionAnswer(authedUser, answer);
        promise
            .then(value => {
                console.log("promise resolved", value);
                const action: QuestionsTypes = {
                    type: ANSWER_QUESTION,
                    authedUser: authedUser,
                    answer: answer,
                    question: DataServiceMock.getInstantQuestion(),
                };
                dispatch(action);
            })
            .catch(reason => {
                console.log("promise Failed", reason);
            })

    };

}

