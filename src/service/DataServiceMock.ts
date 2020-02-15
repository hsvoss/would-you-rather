import User from "./model/User";
import Question from "./model/Question";
import Answer from "./model/Answer";
import VotingOption from "./model/VotingOption";


let users: User[] = [
    {
        id: 'sarahedo',
        name: 'Sarah Edo',
        avatarURL: 'https://material-ui.com/static/images/avatar/3.jpg',
        answers: [
            {questionId: "8xf0y6ziyjabvozdd253nd", choosenAnswer: 'optionOne'},
            {questionId: "6ni6ok3ym7mf1p33lnez", choosenAnswer: 'optionTwo'},
            {questionId: "am8ehyc8byjqgar0jgpub9", choosenAnswer: 'optionTwo'},
            {questionId: "loxhs1bqm25b708cmbf3g", choosenAnswer: 'optionTwo'},
        ],
        questionIDs: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    {
        id: 'tylermcginnis',
        name: 'Tyler McGinnis',
        avatarURL: 'https://material-ui.com/static/images/avatar/1.jpg',
        answers: [
            {questionId: "vthrdm985a262al8qx3do", choosenAnswer: 'optionOne'},
            {questionId: "xj352vofupe1dqz9emx13r", choosenAnswer: 'optionTwo'},
        ],
        questionIDs: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
    {
        id: 'johndoe',
        name: 'John Doe',
        avatarURL: 'https://material-ui.com/static/images/avatar/2.jpg',
        answers: [
            {questionId: "xj352vofupe1dqz9emx13r", choosenAnswer: 'optionOne'},
            {questionId: "vthrdm985a262al8qx3do", choosenAnswer: 'optionTwo'},
            {questionId: "6ni6ok3ym7mf1p33lnez", choosenAnswer: 'optionTwo'}
        ],
        questionIDs: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    }
];

let questions: Question[] = [
    new Question('8xf0y6ziyjabvozdd253nd',
        'sarahedo',
        1467166872634,
        new VotingOption(
            ['sarahedo'],
            'have horrible short term memory'),
        new VotingOption(
            [],
            'have horrible long term memory')),


    new Question('8xf0y6ziyjabvozdd253nd',
        'sarahedo',
        1467166872634,
        new VotingOption(
            ['sarahedo'],
            'have horrible short term memory'),
        new VotingOption(
            [],
            'have horrible long term memory'
        )),
    new Question('6ni6ok3ym7mf1p33lnez',
        'johndoe',
        1468479767190,
        new VotingOption([],
            'become a superhero'),
        new VotingOption(
            ['johndoe', 'sarahedo'],
            'become a supervillain')),


    new Question('am8ehyc8byjqgar0jgpub9',
        'sarahedo',
        1488579767190,
        new VotingOption([],
            'be telekinetic'),
        new VotingOption(
            ['sarahedo'],
            'be telepathic')),


    new Question('loxhs1bqm25b708cmbf3g',
        'tylermcginnis',
        1482579767190,
        new VotingOption([],
            'be a front-end developer'),
        new VotingOption(
            ['sarahedo'],
            'be a back-end developer')),


    new Question('vthrdm985a262al8qx3do',
        'tylermcginnis',
        1489579767190,
        new VotingOption(['tylermcginnis'],
            'find $50 yourself'),
        new VotingOption(
            ['johndoe'],
            'have your best friend find $500')),


    new Question('xj352vofupe1dqz9emx13r',
        'johndoe',
        1493579767190,
        new VotingOption(['johndoe'],
            'write JavaScript'),
        new VotingOption(
            ['tylermcginnis'],
            'write Swift')),
];


export default class DataServiceMock {

    public static generateUID = (): string => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    };


    public static getQuestions = (): Promise<Question[]> => {
        return new Promise<Question[]>(() => {
            setTimeout(() => questions, 1000)
        })
    };

    public static getUsers = (): Promise<Question[]> => {
        return new Promise<Question[]>(() => {
            setTimeout(() => users, 1000)
        })
    };

    public static saveQuestion = (question: Question): Promise<void> => {
        return new Promise<void>(() => {
            setTimeout(() => {
                let user: User | undefined = users.find(user => user.id === authorId);
                let authorId: string = question.authorId;
                questions.push(question);
                user?.questionIDs.push(question.id);
            }, 1000)
        });
    };

    public static saveQuestionAnswer = (authedUser: User, answer: Answer): Promise<void> => {
        return new Promise<void>(() => {
            setTimeout(() => {
                users.find(user => user.id === authedUser.id)
                    ?.questionIDs.push(answer.questionId);


                let find: Question | undefined = questions.find(q => q.id === answer.questionId);
                find?.addAnswer(answer, authedUser.id);

            }, 1000)
        });
    }


    // export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
    //     return new Promise((res, rej) => {
    //         setTimeout(() => {
    //             users = {
    //                 ...users,
    //                 [authedUser]: {
    //                     ...users[authedUser],
    //                     answers: {
    //                         ...users[authedUser].answers,
    //                         [qid]: answer
    //                     }
    //                 }
    //             }
    //
    //             questions = {
    //                 ...questions,
    //                 [qid]: {
    //                     ...questions[qid],
    //                     [answer]: {
    //                         ...questions[qid][answer],
    //                         votes: questions[qid][answer].votes.concat([authedUser])
    //                     }
    //                 }
    //             }
    //
    //             res()
    //         }, 500)
    //     })
    // }

}



