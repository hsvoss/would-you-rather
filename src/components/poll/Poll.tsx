import React, {Component} from "react";
import Question from "../../service/model/Question";

import VotingOption from "../../service/model/VotingOption";
import {connect} from "react-redux";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import {Avatar} from "@material-ui/core";
import User from "../../service/model/User";
import TakePoll from "./TakePoll"
import PreviewPoll from "./PreviewPoll";
import StatisticPoll from "./StatisticPoll";


export const TAKEPOLL = 'takepoll';
export const PREVIEW = 'preview';
export const STATISTICS = 'statistics';


class Poll extends Component<{ question: Question, pollType: string, questions: Question[], users: User[] }> {


    render() {

        const {optionOne, optionTwo}: { optionOne: VotingOption, optionTwo: VotingOption } = this.props.question;

        const author: User | undefined = this.props.users.find(user => user.id === this.props.question.authorId);

        return (
            <Card variant={"outlined"} style={{maxWidth: 800, minWidth: 320}}>
                <CardHeader
                    avatar={
                        <Avatar alt={author?.name} src={author?.avatarURL}/>
                    }
                    title={author?.name + " asks:"}
                    subheader="Would you rather..."
                />
                {this.props.pollType === TAKEPOLL &&
                <TakePoll optionOne={optionOne} optionTwo={optionTwo} timestamp={this.props.question.timestamp}/>}
                {this.props.pollType === PREVIEW &&
                <PreviewPoll optionOne={optionOne} timestamp={this.props.question.timestamp}/>}
                {this.props.pollType === STATISTICS &&
                <StatisticPoll optionOne={optionOne} optionTwo={optionTwo}/>}

            </Card>
        );
    }


}

const mapStateToProps = ({questions, users}: { questions: Question[], users: User[] }) => ({
    questions,
    users
});

export default connect(mapStateToProps)(Poll);
