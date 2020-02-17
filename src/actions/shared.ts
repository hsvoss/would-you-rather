import DataServiceMock from "../service/DataServiceMock";
// import {getUsers_2} from "../service/DataServiceMock"
import {RECEIVE_QUESTION, receiveQuestions} from "./question";
import Question from "../service/model/Question";
import {showLoading, hideLoading} from "react-redux-loading";
import {setChosenCharacter} from "./choseCharacter";
import User from "../service/model/User";
import { receiveUsers } from "./users";

const CHOSEN_ID = "micky";

interface Shared {
    type: typeof RECEIVE_QUESTION;
    questions: Question[];
}

function getInitialData(): any {
    // console.log("A")

    // const promiseOfUsers:Promise<User[]> = DataServiceMock.getUsers();
    // promiseOfUsers.then(users => console.log(users))


    return Promise.all<User[], Question[]>([
        DataServiceMock.getUsers(),
        DataServiceMock.getQuestions()
    ]).then(([users, questions]) => {
    
      console.log("then", users);
      return{
        users,
        questions
      }
    }).catch(e => {
      console.log("Carlos error: ", e)
    })
}

export default function handleInitialData() {
    return (dispatch: any) => {
        dispatch(showLoading());
        dispatch(setChosenCharacter(CHOSEN_ID));
        // let promise = getInitialData();

        // console.log("promise", promise)

        return getInitialData().then(({users, questions}:any) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading());
        });
    };
}

// export default async function handleInitialData(dispatch: Dispatch<Action>) {
//     dispatch(showLoading());
//     // dispatch(setchosenCharactr(choseN_ID));
//     const {users, questions} = await getInitialData();
//     dispatch(receiveUsers(users));
//     dispatch(receiveQuestions(questions));
//     dispatch(hideLoading());
// }
