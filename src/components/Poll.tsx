import React, {Component} from "react";
import Question from "../service/model/Question";

import VotingOption from "../service/model/VotingOption";
import {connect} from "react-redux";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import {Avatar, Button, CardContent} from "@material-ui/core";
import User from "../service/model/User";

export const POLL = 'poll';
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
                {this.props.pollType === POLL && <CardContent style={{textAlign: 'center'}}>
                    <Button variant="outlined" color="primary" style={{margin: 20}}>{optionOne.text}</Button>
                    or
                    <Button variant="outlined" color="primary" style={{margin: 20}}>{optionTwo.text}</Button>
                    <p style={{textAlign: 'right'}}>{new Date(this.props.question.timestamp).toLocaleString()}</p>
                </CardContent>}
                {this.props.pollType === POLL && <CardContent style={{textAlign: 'center'}}>

                    <p style={{textAlign: 'right'}}>{new Date(this.props.question.timestamp).toLocaleString()}</p>
                </CardContent>}

            </Card>
        );
    }
}


const
    mapStateToProps = ({questions, users}: { questions: Question[], users: User[] }) => ({
        questions,
        users
    });

export default connect(mapStateToProps)(Poll);
