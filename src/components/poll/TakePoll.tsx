import React, {Component} from "react";
import VotingOption from "../../service/model/VotingOption";
import {Button, CardContent} from "@material-ui/core";
import {connect} from "react-redux";
import {AppState} from "../../store";
import User from "../../service/model/User";
import Answer from "../../service/model/Answer";
import {answerQuestion} from "../../store/questions/actions";


class TakePoll extends Component<{ optionOne: VotingOption, optionTwo: VotingOption, questionId: string, timestamp: number, authedUser: User | null, dispatch: Function }> {
    render() {
        return <CardContent
            style={{textAlign: 'center'}}>
            <Button variant="outlined" color="primary" style={{margin: 20}}
                    onClick={() => this.props.dispatch(answerQuestion(new Answer(this.props.questionId, 'optionOne'), this.props.authedUser as User))}
            >{this.props.optionOne.text}</Button>
            or
            <Button variant="outlined" color="primary" style={{margin: 20}}
                    onClick={() => {
                        this.props.dispatch(answerQuestion(new Answer(this.props.questionId, 'optionTwo'), this.props.authedUser as User))
                    }}
            >{this.props.optionTwo.text}</Button>
            <p style={{textAlign: 'right'}}>{new Date(this.props.timestamp).toLocaleString()}</p>
        </CardContent>;
    }
}


function mapStateToProps(state: AppState) {
    return {
        authedUser: state.choseCharacter.authedUser
    }
}

export default connect(mapStateToProps)(TakePoll);
