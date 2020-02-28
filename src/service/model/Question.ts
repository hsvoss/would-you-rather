import VotingOption from "./VotingOption";
import Answer from "./Answer";

export default class Question {
    public id: string;
    public authorId: string;
    public timestamp: number;
    public optionOne: VotingOption;
    public optionTwo: VotingOption;


    constructor(id: string, authorId: string, timestamp: number, optionOne: VotingOption, optionTwo: VotingOption) {
        this.id = id;
        this.authorId = authorId;
        this.timestamp = timestamp;
        this.optionOne = optionOne;
        this.optionTwo = optionTwo;
    }

}

export function addAnswer(answer: Answer, userId: string, questionToAddTheAnswer: Question) {
    if (answer.chosenAnswer === 'optionOne') {
        questionToAddTheAnswer.optionOne.userVotedFor.push(userId);
    } else {
        questionToAddTheAnswer.optionTwo.userVotedFor.push(userId);
    }
}