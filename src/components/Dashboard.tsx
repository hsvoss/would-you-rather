import React, {Component} from "react";
import {connect} from "react-redux";
import {AppState} from "../store";
import Question from "../service/model/Question";
import Poll, {PREVIEW} from "./poll/Poll";

class Dashboard extends Component<{ questions: Question[] }> {

    componentDidMount(): void {

    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return (
            <>
                {this.props.questions.map(question =>
                        // <Poll key={question.id} questionId={question.id} pollType={TAKEPOLL}/>
                        <Poll key={question.id} questionId={question.id} pollType={PREVIEW}/>
                    // <Poll key={question.id} question={question} pollType={STATISTICS}/>
                )}
            </>
        );
    }


}


function mapStatToProps(state: AppState): { questions: Question[] } {
    console.log("appState", state);
    return {
        questions: state.questionState.questions,
    };
}

export default connect(mapStatToProps)(Dashboard)

