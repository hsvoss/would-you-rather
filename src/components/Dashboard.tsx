import React, {Component} from "react";
import {connect} from "react-redux";
import {AppState} from "../store";
import Question from "../service/model/Question";
import {Button} from "@material-ui/core";

class Dashboard extends Component<{ questions: Question[] }> {

    componentDidMount(): void {
        console.log("props:", this.props);

    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return (
            <ul>
                {this.props.questions.map(question =>
                    <li key={question.id}><Button>{question.optionOne.text}</Button></li>
                )}
            </ul>
        );
    }


}


function mapStatToProps(state: AppState): { questions: Question[] } {
    return {
        questions: state.questions,
    };
}

export default connect(mapStatToProps)(Dashboard)

