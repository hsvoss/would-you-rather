export default class Answer {
    public questionId: string;
    public choosenAnswer: string;

    constructor(questionId: string, choosenAnswer: string) {
        this.questionId = questionId;
        this.choosenAnswer = choosenAnswer;
    }

}