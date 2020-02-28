import User from "./model/User";
import Question, {addAnswer} from "./model/Question";
import Answer from "./model/Answer";
import VotingOption from "./model/VotingOption";


let users: User[] = [
    {
        id: 'micky',
        name: 'Micky',
        avatarURL: 'https://www.micky-maus.de/content/images/characters/navigation/Micky.jpg',
        answers: [
            {questionId: "xj352vofupe1dqz9emx13r", chosenAnswer: 'optionOne'},
            {questionId: "vthrdm985a262al8qx3do", chosenAnswer: 'optionTwo'},
            {questionId: "6ni6ok3ym7mf1p33lnez", chosenAnswer: 'optionTwo'}
        ],
        questionIDs: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    },
    {
        id: 'daisy',
        name: 'Daisy',
        avatarURL: 'https://www.micky-maus.de/content/images/characters/navigation/Daisy.jpg',
        answers: [
            {questionId: "8xf0y6ziyjabvozdd253nd", chosenAnswer: 'optionOne'},
            {questionId: "6ni6ok3ym7mf1p33lnez", chosenAnswer: 'optionTwo'},
            {questionId: "am8ehyc8byjqgar0jgpub9", chosenAnswer: 'optionTwo'},
            {questionId: "loxhs1bqm25b708cmbf3g", chosenAnswer: 'optionTwo'},
        ],
        questionIDs: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    {
        id: 'donald',
        name: 'Donald',
        avatarURL: 'https://www.micky-maus.de/content/images/characters/navigation/Donald.jpg',
        answers: [
            {questionId: "vthrdm985a262al8qx3do", chosenAnswer: 'optionOne'},
            {questionId: "xj352vofupe1dqz9emx13r", chosenAnswer: 'optionTwo'},
        ],
        questionIDs: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
];

let questions: Question[] = [
    new Question('8xf0y6ziyjabvozdd253nd',
        'daisy',
        1467166872634,
        new VotingOption(
            ['daisy'],
            'have horrible short term memory'),
        new VotingOption(
            [],
            'have horrible long term memory'
        )),
    new Question('6ni6ok3ym7mf1p33lnez',
        'micky',
        1468479767190,
        new VotingOption([],
            'become a superhero'),
        new VotingOption(
            ['micky', 'daisy'],
            'become a supervillain')),


    new Question('am8ehyc8byjqgar0jgpub9',
        'daisy',
        1488579767190,
        new VotingOption([],
            'be telekinetic'),
        new VotingOption(
            ['daisy'],
            'be telepathic')),


    new Question('loxhs1bqm25b708cmbf3g',
        'donald',
        1482579767190,
        new VotingOption([],
            'be a front-end developer'),
        new VotingOption(
            ['daisy'],
            'be a back-end developer')),


    new Question('vthrdm985a262al8qx3do',
        'donald',
        1489579767190,
        new VotingOption(['donald'],
            'find $50 yourself'),
        new VotingOption(
            ['micky'],
            'have your best friend find $500')),


    new Question('xj352vofupe1dqz9emx13r',
        'micky',
        1493579767190,
        new VotingOption(['micky'],
            'write JavaScript'),
        new VotingOption(
            ['donald'],
            'write Swift')),
];

export default class DataServiceMock {

    public static generateUID = (): string => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    };


    public static getQuestions = (): Promise<Question[]> => {
        return new Promise<Question[]>((res) => {
            setTimeout(() => res(JSON.parse(JSON.stringify(questions))), 1000);
        })
    };

    public static getUsers = (): Promise<User[]> => {
        return new Promise<User[]>((res) => {
            setTimeout(() => res(JSON.parse(JSON.stringify(users))), 1000);
        })
    };

    public static saveQuestionAnswer = (authedUser: User, answer: Answer): Promise<void> => {

        const authedUserServerCopy: User = JSON.parse(JSON.stringify(authedUser));
        const answerServerCopy: Answer = JSON.parse(JSON.stringify(answer));

        function helperMethod(): void {
            users.find(user => user.id === authedUserServerCopy.id)
                ?.questionIDs.push(answerServerCopy.questionId);
            let find: Question = questions.find(q => q.id === answerServerCopy.questionId) as Question;
            addAnswer(answerServerCopy, authedUserServerCopy.id, find);
        }

        return new Promise<void>((resolve) => {
            setTimeout(() => resolve(helperMethod()), 1000)
        });

    };

    public static saveQuestion = (question: Question): Promise<void> => {
        const questionServerCopy = JSON.parse(JSON.stringify(question));

        const helperMethod = (): void => {
            let authorId: string = questionServerCopy.authorId;
            let user: User | undefined = users.find(user => user.id === authorId);
            questions.push(questionServerCopy);
            user?.questionIDs.push(questionServerCopy.id);
        };
        return new Promise<void>((resolve) => {
            setTimeout(() => resolve(helperMethod()), 1000)
        });
    };

}



