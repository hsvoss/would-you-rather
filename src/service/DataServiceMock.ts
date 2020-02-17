import User from "./model/User";
import Question from "./model/Question";
import Answer from "./model/Answer";
import VotingOption from "./model/VotingOption";


let users: User[] = [
    {
        id: 'daisy',
        name: 'Daisy Duck',
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
        name: 'Donald Duck',
        avatarURL: 'https://www.micky-maus.de/content/images/characters/navigation/Donald.jpg',
        answers: [
            {questionId: "vthrdm985a262al8qx3do", chosenAnswer: 'optionOne'},
            {questionId: "xj352vofupe1dqz9emx13r", chosenAnswer: 'optionTwo'},
        ],
        questionIDs: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
    {
        id: 'micky',
        name: 'Micky Maus',
        avatarURL: 'https://www.micky-maus.de/content/images/characters/navigation/Micky.jpg',
        answers: [
            {questionId: "xj352vofupe1dqz9emx13r", chosenAnswer: 'optionOne'},
            {questionId: "vthrdm985a262al8qx3do", chosenAnswer: 'optionTwo'},
            {questionId: "6ni6ok3ym7mf1p33lnez", chosenAnswer: 'optionTwo'}
        ],
        questionIDs: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    }
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

    public static getInstantQuestion = (): Question => {
        return questions[0];
    };


    public static generateUID = (): string => {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    };


    public static getQuestions = (): Promise<Question[]> => {
        return new Promise<Question[]>((res) => {
            setTimeout(() => res(questions), 1000);
        })
    };

    public static getUsers = (): Promise<User[]> => {
        return new Promise<User[]>((res) => {
            setTimeout(() => res(users), 1000);
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



