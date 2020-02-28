import Question from "../../service/model/Question";
import {ANSWER_QUESTION, CREATE_QUESTION, QuestionsTypes, RECEIVE_QUESTION} from "./types";
import User from "../../service/model/User";
import DataServiceMock from "../../service/DataServiceMock";
import Answer from "../../service/model/Answer";
import {Dispatch} from "redux";
import {UPDATE_USER_VOTES, UsersTypes} from "../users/types";
import {startLoading, stopLoading} from "../loading/actions";
import VotingOption from "../../service/model/VotingOption";


export function receiveQuestions(questions: Question[]): QuestionsTypes {
    return {
        type: RECEIVE_QUESTION,
        questions,
    }
}

export function createQuestion(authorId: string, optionA: string, optionB: string): Function {
    return async (dispatch: Dispatch): Promise<void> => {
        dispatch(startLoading());

        const optionOne = new VotingOption([], optionA);
        const optionTwo = new VotingOption([], optionB);
        const question = new Question(
            DataServiceMock.generateUID(),
            authorId,
            Date.now(),
            optionOne,
            optionTwo
        );
        await DataServiceMock.saveQuestion(question);
        const questionCreateAction: QuestionsTypes = {
            type: CREATE_QUESTION,
            question: question
        };
        dispatch(questionCreateAction);
        dispatch(stopLoading());
    };
}

export function answerQuestion(answer: Answer, authedUser: User): Function {
    return async (dispatch: Dispatch): Promise<void> => {
        dispatch(startLoading());
        await DataServiceMock.saveQuestionAnswer(authedUser, answer);

        const questionUpdateAction: QuestionsTypes = {
            type: ANSWER_QUESTION,
            authedUser: authedUser,
            answer: answer,
        };
        dispatch(questionUpdateAction);

        const userUpdateAction: UsersTypes = {
            type: UPDATE_USER_VOTES,
            authedUser: authedUser,
            answer: answer
        };
        dispatch(userUpdateAction);
        dispatch(stopLoading());
    };
}

