import React, {Component} from "react";
import Question from "../service/model/Question";

import VotingOption from "../service/model/VotingOption";
import {connect} from "react-redux";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import {Avatar, Button, CardContent, Chip, withTheme} from "@material-ui/core";
import User from "../service/model/User";
import PieChart from 'react-minimal-pie-chart';
import {Theme} from "@material-ui/core/styles/createMuiTheme";


export const POLL = 'poll';
export const PREVIEW = 'preview';
export const STATISTICS = 'statistics';


class Poll extends Component<{ question: Question, pollType: string, questions: Question[], users: User[], theme: Theme }> {


    render() {

        const {optionOne, optionTwo}: { optionOne: VotingOption, optionTwo: VotingOption } = this.props.question;

        const author: User | undefined = this.props.users.find(user => user.id === this.props.question.authorId);

        return (
            <Card variant={"outlined"} style={{maxWidth: 800, minWidth: 320}}>
                {console.log("diese props", this.props)}
                <CardHeader
                    avatar={
                        <Avatar alt={author?.name} src={author?.avatarURL}/>
                    }
                    title={author?.name + " asks:"}
                    subheader="Would you rather..."
                />
                {this.props.pollType === POLL && this.renderPoll(optionOne, optionTwo)}
                {this.props.pollType === PREVIEW && this.renderPreview(optionOne)}
                {this.props.pollType === STATISTICS && this.renderStatistic(optionOne, optionTwo)}

            </Card>
        );
    }

    private renderPoll(optionOne: VotingOption, optionTwo: VotingOption) {
        return <CardContent style={{textAlign: 'center'}}>
            <Button variant="outlined" color="primary" style={{margin: 20}}>{optionOne.text}</Button>
            or
            <Button variant="outlined" color="primary" style={{margin: 20}}>{optionTwo.text}</Button>
            <p style={{textAlign: 'right'}}>{new Date(this.props.question.timestamp).toLocaleString()}</p>
        </CardContent>;
    }

    private renderPreview(optionOne: VotingOption) {
        return <CardContent style={{textAlign: 'center'}}>
            <p style={{textAlign: 'center'}}>{"..." + optionOne.text + " ..."}</p>
            <Button variant="outlined" color="primary" style={{margin: 20}}>Submit your answer now!</Button>
            <p style={{textAlign: 'right'}}>{new Date(this.props.question.timestamp).toLocaleString()}</p>
        </CardContent>;
    }

    private renderStatistic(optionOne: VotingOption, optionTwo: VotingOption) {
        return <CardContent style={{textAlign: 'center'}}>
            <PieChart radius={20} startAngle={90} viewBoxSize={[2, 1]} animate={true} data={[
                {
                    title: `${optionOne.text}`,
                    value: optionOne.getTotalVotes(),
                    color: `${this.props.theme.palette.primary.main}`
                },
                {
                    title: `${optionTwo.text}`,
                    value: optionTwo.getTotalVotes(),
                    color: `${this.props.theme.palette.secondary.main}`
                },
            ]}/>
            <Chip label={optionOne.text} color="primary" style={{margin: 10}}/>
            <Chip label={optionTwo.text} color="secondary" style={{margin: 10}}/>
        </CardContent>;
    }
}

const
    mapStateToProps = ({questions, users}: { questions: Question[], users: User[] }) => ({
        questions,
        users
    });

export default withTheme(connect(mapStateToProps)(Poll));
