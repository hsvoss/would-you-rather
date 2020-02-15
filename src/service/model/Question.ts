import VotingOption from "./VotingOption";
import Answer from "./Answer";
import DataServiceMock from "../DataServiceMock";

export default class Question {
    public id: string;
    public authorId: string;
    public timestamp: number;
    public optionOne: VotingOption;
    public optionTwo: VotingOption;


    constructor(id: string = DataServiceMock.generateUID(), authorId: string, timestamp: number, optionOne: VotingOption, optionTwo: VotingOption) {
        this.id = id;
        this.authorId = authorId;
        this.timestamp = timestamp;
        this.optionOne = optionOne;
        this.optionTwo = optionTwo;
    }

    public addAnswer(answer: Answer, userId: string) {
        if (answer.choosenAnswer === 'optionOne') {
            this.optionOne.userVotedFor.push(userId);
        } else {
            this.optionTwo.userVotedFor.push(userId);
        }
    }
}