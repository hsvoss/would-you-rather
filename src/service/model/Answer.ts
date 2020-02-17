export default class Answer {
    public questionId: string;
    public chosenAnswer: string;

    constructor(questionId: string, chosenAnswer: string) {
        this.questionId = questionId;
        this.chosenAnswer = chosenAnswer;
    }

}