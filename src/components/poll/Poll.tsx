import React, {Component} from "react";
import Question from "../../service/model/Question";

import VotingOption from "../../service/model/VotingOption";
import {connect} from "react-redux";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import {Avatar} from "@material-ui/core";
import User from "../../service/model/User";
import TakePoll from "./TakePoll";
import PreviewPoll from "./PreviewPoll";
import StatisticPoll from "./StatisticPoll";
import {AppState} from "../../store";

export const TAKEPOLL = "takepoll";
export const PREVIEW = "preview";
export const STATISTICS = "statistics";

class Poll extends Component<{
    questionId: string;
    pollType: string;
    questions: Question[];
    users: User[];
}> {
    render() {

        const question: Question | undefined = findQuestionById(this.props.questionId, this.props.questions);

        if (question === undefined) {
            return <></>
        }


        const {optionOne, optionTwo}: {
            optionOne: VotingOption;
            optionTwo: VotingOption;
        } = question;


        const author: User | undefined = this.props.users.find(
            user => user.id === question.authorId
        );

        // @ts-ignore
        // @ts-ignore
        return (
            <Card variant={"outlined"} style={{width: 800, margin: 10}}>
                <CardHeader
                    avatar={<Avatar alt={author?.name} src={author?.avatarURL}/>}
                    title={author?.name + " asks:"}
                    subheader="Would you rather..."
                />
                {this.props.pollType === TAKEPOLL && (
                    <TakePoll
                        optionOne={optionOne}
                        optionTwo={optionTwo}
                        questionId={this.props.questionId}
                        timestamp={question.timestamp}
                    />
                )}
                {this.props.pollType === PREVIEW && (
                    <PreviewPoll
                        optionOne={optionOne}
                        timestamp={question.timestamp}
                        quetionId={this.props.questionId}
                    />
                )}
                {this.props.pollType === STATISTICS && (
                    <StatisticPoll optionOne={optionOne} optionTwo={optionTwo}/>
                )}
            </Card>
        );
    }


}

const findQuestionById = (questionId: string, questions: Question[]): Question | undefined => {
    return questions.find(question => question.id === questionId);
};

const mapStateToProps = (state: AppState) => ({
    questions: state.questionState.questions,
    users: state.userState.users
});

export default connect(mapStateToProps)(Poll);
