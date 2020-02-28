import React, {Component} from "react";
import VotingOption from "../../service/model/VotingOption";
import {Button, CardContent} from "@material-ui/core";
import {connect} from "react-redux";
import {AppState} from "../../store";
import User from "../../service/model/User";
import Answer from "../../service/model/Answer";
import {answerQuestion} from "../../store/questions/actions";
import {withRouter} from "react-router-dom";

class TakePoll extends Component<{
    dispatch: Function,
    optionOne: VotingOption,
    optionTwo: VotingOption,
    questionId: string,
    timestamp: number,
    authedUser: User | null,
    location: any,
    history: any,
}, {}> {
    render() {
        return <CardContent
            style={{textAlign: 'center'}}>
            <Button variant="outlined" color="primary" style={{margin: 20}}
                    onClick={() => {
                        this.props.dispatch(answerQuestion(new Answer(this.props.questionId, 'optionOne'), this.props.authedUser as User));
                        this.props.history.push(`/questions/${this.props.questionId}/statistics`);
                    }}
            >{this.props.optionOne.text}</Button>
            or
            <Button variant="outlined" color="primary" style={{margin: 20}}
                    onClick={() => {
                        this.props.dispatch(answerQuestion(new Answer(this.props.questionId, 'optionTwo'), this.props.authedUser as User));
                        this.props.history.push(`/questions/${this.props.questionId}/statistics`);
                    }}
            >{this.props.optionTwo.text}</Button>
            <p style={{textAlign: 'right'}}>{new Date(this.props.timestamp).toLocaleString()}</p>
        </CardContent>;
    }
}


const mapStateToProps = (state: AppState) => {
    return ({
        authedUser: state.choseCharacter.authedUser
    })
};


// @ts-ignore
export default withRouter(connect(mapStateToProps)(TakePoll));
