import React, {Component} from "react";
import {connect} from "react-redux";
import {AppState} from "../store";
import Question from "../service/model/Question";
import Poll, {PREVIEW} from "./Poll";

class Dashboard extends Component<{ questions: Question[] }> {

    componentDidMount(): void {
        console.log("props:", this.props);

    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return (
            <>
                {this.props.questions.map(question =>
                    <Poll key={question.id} question={question} pollType={PREVIEW}/>
                )}
            </>
        );
    }


}


function mapStatToProps(state: AppState): { questions: Question[] } {
    return {
        questions: state.questions,
    };
}

export default connect(mapStatToProps)(Dashboard)

