import React, {Component} from "react";
import {connect} from "react-redux";
import {AppState} from "../store";
import Question from "../service/model/Question";
import {Tab, Tabs} from "@material-ui/core";
import Poll, {PREVIEW, STATISTICS} from "./poll/Poll";
import User from "../service/model/User";

class Dashboard extends Component<{ questions: Question[], loggedIn: User }> {

    state = {
        tabNumber: 0,
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
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

    private renderUnAnswered = () => this.props.questions
        .filter(question => !this.answeredByAuthedCharacter(question))
        .sort(this.byDate)
        .map(question =>
            <Poll key={question.id} questionId={question.id} pollType={PREVIEW}/>
        );

    private renderAnswered = () => this.props.questions
        .filter(question => this.answeredByAuthedCharacter(question))
        .sort(this.byDate)
        .map(question =>
            <Poll key={question.id} questionId={question.id} pollType={STATISTICS}/>
        );


    private byDate = (a: Question, b: Question) => {
        return b.timestamp - a.timestamp
    };

    private answeredByAuthedCharacter = (question: Question): boolean => {
        const loggedInId: string = this.props.loggedIn.id;
        return question.optionOne.userVotedFor.includes(loggedInId) || question.optionTwo.userVotedFor.includes(loggedInId);
    }

}


function mapStatToProps(state: AppState): { questions: Question[], loggedIn: User } {
    console.log("appState", state);
    return {
        questions: state.questionState.questions,
        loggedIn: state.choseCharacter.authedUser as User,
    };
}

export default connect(mapStatToProps)(Dashboard)

