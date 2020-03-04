import Answer from "./Answer";
import DataServiceMock from "../DataServiceMock";

export default class User {
    public id: string;
    public name: string;
    public avatarURL: string;
    public answers: Answer[];
    public questionIDs: string[];

    constructor(id: string = DataServiceMock.generateUID(), name: string, avatarURL: string, answers: Answer[], questionIDs: string[]) {
        this.id = id;
        this.name = name;
        this.avatarURL = avatarURL;
        this.answers = answers;
        this.questionIDs = questionIDs;
    }
}

export function hasAnswered(user: User, answerID: string) {
    let find = user.answers.find(answer => answer.questionId === answerID);
    return find !== undefined
}