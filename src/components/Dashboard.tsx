import React, {Component} from "react";
import {connect} from "react-redux";
import {AppState} from "../store";
import Question from "../service/model/Question";
import {Tab, Tabs} from "@material-ui/core";
import Poll, {POLL, PREVIEW} from "./poll/Poll";
import User from "../service/model/User";

class Dashboard extends Component<{ answeredQuestions: Question[], unAnsweredQuestions: Question[] }> {

    state = {
        tabNumber: 0,
    };

    render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <>
                <Tabs
                    value={this.state.tabNumber}
                    onChange={(event, value) => this.setState({...this.state, tabNumber: value})}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    style={{flexGrow: 1,}}
                >
                    <Tab label="Unanswered Questions"/>
                    <Tab label="Answered Questions"/>
                </Tabs>
                {this.state.tabNumber === 0 && this.renderUnAnswered()}
                {this.state.tabNumber === 1 && this.renderAnswered()}
            </>
        );
    }

    private renderUnAnswered = () => this.props.unAnsweredQuestions
        .map(question =>
            <Poll key={question.id} questionId={question.id} pollType={PREVIEW}/>
        );

    private renderAnswered = () => this.props.answeredQuestions
        .map(question =>
            <Poll key={question.id} questionId={question.id} pollType={POLL}/>
        );

}


function mapStatToProps(state: AppState): { answeredQuestions: Question[], unAnsweredQuestions: Question[] } {

    const loggedIn = state.userState.users.find(user => user.id === state.choseCharacter.authedUserId) as User;

    const byDate = (a: Question, b: Question) => {
        return b.timestamp - a.timestamp
    };

    const answeredByAuthedCharacter = (question: Question): boolean => {
        const loggedInId: string = loggedIn.id;
        return question.optionOne.userVotedFor.includes(loggedInId) || question.optionTwo.userVotedFor.includes(loggedInId);
    };

    const answeredQuestions = state.questionState.questions
        .filter(question => answeredByAuthedCharacter(question))
        .sort(byDate);
    const unAnsweredQuestions = state.questionState.questions
        .filter(question => !answeredByAuthedCharacter(question))
        .sort(byDate);

    return {
        answeredQuestions: answeredQuestions,
        unAnsweredQuestions: unAnsweredQuestions,
    };
}

export default connect(mapStatToProps)(Dashboard)

