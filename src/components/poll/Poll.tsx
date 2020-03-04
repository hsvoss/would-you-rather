import React, {Component} from "react";
import Question from "../../service/model/Question";

import VotingOption from "../../service/model/VotingOption";
import {connect} from "react-redux";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import {Avatar} from "@material-ui/core";
import User, {hasAnswered} from "../../service/model/User";
import TakePoll from "./TakePoll";
import PreviewPoll from "./PreviewPoll";
import StatisticPoll from "./StatisticPoll";
import {AppState} from "../../store";

export const POLL = "poll";
export const PREVIEW = "preview";

class Poll extends Component<{
    questionId: string,
    pollType: string,
    questions: Question[],
    users: User[],
    loggedIn: User,
}> {
    render() {
        let alreadyAnswered = hasAnswered(this.props.loggedIn, this.props.questionId);

        const question: Question | undefined = findQuestionById(
            this.props.questionId,
            this.props.questions
        );

        if (question === undefined) {
            return <></>;
        }

        const {
            optionOne,
            optionTwo
        }: {
            optionOne: VotingOption;
            optionTwo: VotingOption;
        } = question;

        const author: User | undefined = this.props.users.find(
            user => user.id === question.authorId
        );

        // @ts-ignore
        return (
            <Card variant={"outlined"} style={{width: 800, margin: 10}}>
                <CardHeader
                    avatar={<Avatar alt={author?.name} src={author?.avatarURL}/>}
                    title={author?.name + " asks:"}
                    subheader="Would you rather..."
                />
                {!alreadyAnswered && this.props.pollType === POLL && (
                    <TakePoll
                        optionOne={optionOne}
                        optionTwo={optionTwo}
                        questionId={this.props.questionId}
                        timestamp={question.timestamp}
                    />
                )}
                {alreadyAnswered && this.props.pollType === POLL && (
                    <StatisticPoll optionOne={optionOne} optionTwo={optionTwo}/>
                )}
                {this.props.pollType === PREVIEW && (
                    <PreviewPoll
                        optionOne={optionOne}
                        timestamp={question.timestamp}
                        quetionId={this.props.questionId}
                    />
                )}
            </Card>
        );
    }
}

const findQuestionById = (
    questionId: string,
    questions: Question[]
): Question | undefined => {
    return questions.find(question => question.id === questionId);
};


const mapStateToProps = (state: AppState) => {
    return {
        questions: state.questionState.questions,
        users: state.userState.users,
        loggedIn: state.userState.users?.find(user => user.id === state.choseCharacter.authedUserId) as User
    };
};


export default connect(mapStateToProps)(Poll);
